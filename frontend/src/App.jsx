import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { navigation } from './components/navigation'
import AboutSection from './sections/AboutSection'
import GuideSection from './sections/GuideSection'
import HomeSection from './sections/HomeSection'
import KnowledgeSection from './sections/KnowledgeSection'
import ReceptionSection from './sections/ReceptionSection'
import { projectContact } from './data/recyclingGuide'
import { findMatches, findSuggestions } from './lib/recyclingSearch'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [submission, setSubmission] = useState(null)
  const [error, setError] = useState('')

  function handleQueryChange(value) {
    setQuery(value)
    setError('')
    setSubmission(null)
  }

  function runLookup(searchTerm, inputElement) {
    const trimmedTerm = searchTerm.trim()
    if (!trimmedTerm) {
      setError('Nhập tên chất liệu hoặc loại đồ để bắt đầu tra cứu.')
      setSubmission(null)
      inputElement?.focus()
      return
    }

    setError('')
    const matches = findMatches(trimmedTerm)
    setSubmission({
      query: trimmedTerm,
      matches,
      suggestions: matches.length === 0 ? findSuggestions(trimmedTerm) : [],
    })
    window.history.replaceState(null, '', '#huong-dan')
    document.getElementById('huong-dan')?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSearch(event) {
    event.preventDefault()
    runLookup(query, event.currentTarget.querySelector('input'))
  }

  function handleSuggestion(term) {
    setQuery(term)
    runLookup(term)
  }

  const searchProps = {
    query,
    setQuery: handleQueryChange,
    onSearch: handleSearch,
    error,
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Đi đến nội dung chính</a>
      <Header navigation={navigation} />
      <main id="main-content">
        <HomeSection searchProps={searchProps} />
        <AboutSection />
        <GuideSection
          searchProps={searchProps}
          submission={submission}
          onSuggestion={handleSuggestion}
          onQuickSearch={runLookup}
        />
        <KnowledgeSection />
        <ReceptionSection />
      </main>
      <Footer navigation={navigation} projectContact={projectContact} />
    </>
  )
}

export default App
