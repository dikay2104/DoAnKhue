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
import PaperDetailPage from './pages/PaperDetailPage'
import BeverageCartonDetailPage from './pages/BeverageCartonDetailPage'
import GlassContainerDetailPage from './pages/GlassContainerDetailPage'
import MetalCanDetailPage from './pages/MetalCanDetailPage'
import PlasticBottleDetailPage from './pages/PlasticBottleDetailPage'
import PlasticPackagingDetailPage from './pages/PlasticPackagingDetailPage'
import CookingOilDetailPage from './pages/CookingOilDetailPage'
import UsedBatteryDetailPage from './pages/UsedBatteryDetailPage'
import { findMatches } from './lib/recyclingSearch'
import './App.css'

const pages = {
  '/': HomePage,
  '/gioi-thieu': AboutPage,
  '/huong-dan': GuidePage,
  '/kien-thuc': KnowledgePage,
  '/diem-tiep-nhan': ReceptionPage,
  '/huong-dan/giay-va-bia-giay': PaperDetailPage,
  '/huong-dan/vo-hop-giay': BeverageCartonDetailPage,
  '/huong-dan/chai-lo-thuy-tinh': GlassContainerDetailPage,
  '/huong-dan/vo-lon': MetalCanDetailPage,
  '/huong-dan/chai-nhua': PlasticBottleDetailPage,
  '/huong-dan/bao-bi-nhua': PlasticPackagingDetailPage,
  '/huong-dan/dau-an-thua': CookingOilDetailPage,
  '/huong-dan/pin-cu': UsedBatteryDetailPage,
}

const pageMetadata = {
  '/': {
    title: 'Tập Tành Tách Rác | Phân loại rác tái chế tại Đà Nẵng',
    description: 'Tra cứu cách phân loại, chuẩn bị và chuyển giao rác có thể tái chế tại Đà Nẵng. Cùng Tập Tành Tách Rác bắt đầu từ những thói quen nhỏ.',
  },
  '/gioi-thieu': {
    title: 'Giới thiệu dự án | Tập Tành Tách Rác',
    description: 'Tìm hiểu dự án Tập Tành Tách Rác và các hoạt động nâng cao kiến thức phân loại rác sinh hoạt cho người trẻ tại Đà Nẵng.',
  },
  '/huong-dan': {
    title: 'Hướng dẫn phân loại rác tái chế | Tập Tành Tách Rác',
    description: 'Tra cứu cách phân loại và chuẩn bị các món đồ tái chế thường gặp trước khi chuyển giao tại Đà Nẵng.',
  },
  '/kien-thuc': {
    title: 'Kiến thức tái chế | Tập Tành Tách Rác',
    description: 'Đọc các bài viết về nhận biết rác tái chế, ký hiệu tái chế và cách hạn chế làm nhiễm bẩn vật liệu tái chế.',
  },
  '/diem-tiep-nhan': {
    title: 'Điểm tiếp nhận rác tái chế tại Đà Nẵng | Tập Tành Tách Rác',
    description: 'Tìm hiểu điểm tiếp nhận rác tái chế được giới thiệu bởi dự án Tập Tành Tách Rác tại Đà Nẵng.',
  },
  '/huong-dan/giay-va-bia-giay': {
    title: 'Cách chuẩn bị rác thải giấy | Tập Tành Tách Rác',
    description: 'Hướng dẫn phân loại, làm sạch, ép phẳng và bó gọn giấy trước khi đem đến điểm tiếp nhận.',
  },
  '/huong-dan/vo-hop-giay': {
    title: 'Cách chuẩn bị vỏ hộp giấy | Tập Tành Tách Rác',
    description: 'Hướng dẫn làm sạch, tách nắp, ép dẹt và lưu trữ vỏ hộp sữa, nước trái cây trước khi đem đi tái chế.',
  },
  '/huong-dan/chai-lo-thuy-tinh': {
    title: 'Cách chuẩn bị chai lọ thủy tinh | Tập Tành Tách Rác',
    description: 'Hướng dẫn làm sạch, tháo nắp, giữ tem nhãn và đóng gói chai lọ thủy tinh an toàn trước khi đem đi tái chế.',
  },
  '/huong-dan/vo-lon': {
    title: 'Cách chuẩn bị vỏ lon | Tập Tành Tách Rác',
    description: 'Hướng dẫn làm sạch, ép bẹp, xử lý nắp sắc và lưu trữ vỏ lon kim loại an toàn trước khi đem đi tái chế.',
  },
  '/huong-dan/chai-nhua': {
    title: 'Cách chuẩn bị chai nhựa | Tập Tành Tách Rác',
    description: 'Hướng dẫn làm sạch, ép bẹp, đóng nắp và phân loại tem nhãn chai nhựa trước khi đem đi tái chế.',
  },
  '/huong-dan/bao-bi-nhua': {
    title: 'Cách chuẩn bị rác thải nhựa | Tập Tành Tách Rác',
    description: 'Hướng dẫn loại bỏ tạp chất, làm sạch, xếp chồng và lưu trữ riêng bao bì nhựa trước khi đem đi tái chế.',
  },
  '/huong-dan/dau-an-thua': {
    title: 'Cách chuẩn bị dầu ăn thừa | Tập Tành Tách Rác',
    description: 'Hướng dẫn làm nguội, lọc cặn, chiết chai và bảo quản riêng dầu ăn thừa trước khi đem đến điểm tiếp nhận.',
  },
  '/huong-dan/pin-cu': {
    title: 'Cách xử lý pin cũ đã qua sử dụng | Tập Tành Tách Rác',
    description: 'Hướng dẫn phân loại, bảo quản, dán cách điện và chuyển pin cũ đến điểm thu gom chuyên dụng.',
  },
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
    })
    navigate('/huong-dan')
  }

  function handleSearch(event) {
    event.preventDefault()
    runLookup(query, event.currentTarget.querySelector('input'))
  }

  const detailArticle = path.startsWith('/kien-thuc/')
    ? newsArticles.find((article) => `/kien-thuc/${article.slug}` === path)
    : null

  useEffect(() => {
    const metadata = detailArticle
      ? {
          title: `${detailArticle.title} | Tập Tành Tách Rác`,
          description: `${detailArticle.title}. Tìm hiểu kiến thức và mẹo tái chế từ dự án Tập Tành Tách Rác tại Đà Nẵng.`,
        }
      : pageMetadata[path] ?? pageMetadata['/']

    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://taptanhtachrac.netlify.app${path}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://taptanhtachrac.netlify.app${path}`)
  }, [path, detailArticle])

  const Page = detailArticle ? KnowledgeDetailPage : pages[path] ?? HomePage
  const searchProps = { query, setQuery: handleQueryChange, onSearch: handleSearch, error }
  const pageProps = detailArticle
    ? { article: detailArticle }
    : ['/huong-dan/giay-va-bia-giay', '/huong-dan/vo-hop-giay', '/huong-dan/chai-lo-thuy-tinh', '/huong-dan/vo-lon', '/huong-dan/chai-nhua', '/huong-dan/bao-bi-nhua', '/huong-dan/dau-an-thua', '/huong-dan/pin-cu'].includes(path)
    ? { onNavigate: navigate }
    : path === '/huong-dan'
    ? { searchProps, submission, onQuickSearch: runLookup, onNavigate: navigate }
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
