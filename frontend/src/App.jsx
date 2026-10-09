import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { navigation } from './components/navigation'
import AboutPage from './pages/AboutPage'
import GuidePage from './pages/GuidePage'
import HomePage from './pages/HomePage'
import KnowledgePage from './pages/KnowledgePage'
import ReceptionPage from './pages/ReceptionPage'
import { projectContact } from './data/recyclingGuide'
import { newsArticles } from './data/newsArticles'
import KnowledgeDetailPage from './pages/KnowledgeDetailPage'
import { findMatches, findSuggestions } from './lib/recyclingSearch'
import './App.css'

const pages = {
  '/': HomePage,
  '/gioi-thieu': AboutPage,
  '/huong-dan': GuidePage,
  '/kien-thuc': KnowledgePage,
  '/diem-tiep-nhan': ReceptionPage,
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [query, setQuery] = useState('')
  const [submission, setSubmission] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(to) {
    if (window.location.pathname !== to) window.history.pushState(null, '', to)
    setPath(to)
    window.scrollTo(0, 0)
  }

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
    navigate('/huong-dan')
  }

  function handleSearch(event) {
    event.preventDefault()
    runLookup(query, event.currentTarget.querySelector('input'))
  }

  function handleSuggestion(term) {
    setQuery(term)
    runLookup(term)
  }

  const detailArticle = path.startsWith('/kien-thuc/')
    ? newsArticles.find((article) => `/kien-thuc/${article.slug}` === path)
    : null
  const Page = detailArticle ? KnowledgeDetailPage : pages[path] ?? HomePage
  const searchProps = { query, setQuery: handleQueryChange, onSearch: handleSearch, error }
  const pageProps = detailArticle
    ? { article: detailArticle }
    : path === '/huong-dan'
    ? { searchProps, submission, onSuggestion: handleSuggestion, onQuickSearch: runLookup }
    : { searchProps }

  return (
    <>
      <a className="skip-link" href="#main-content">Đi đến nội dung chính</a>
      <Header navigation={navigation} currentPath={path.startsWith('/kien-thuc/') ? '/kien-thuc' : path} onNavigate={navigate} />
      <main id="main-content" key={path}>
        <Page {...pageProps} />
      </main>
      <Footer navigation={navigation} projectContact={projectContact} />
    </>
  )
}

export default App
