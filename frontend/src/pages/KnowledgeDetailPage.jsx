import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import NewsArtwork from '../components/NewsArtwork'
import KnowledgeArticleBody from '../components/KnowledgeArticleBody'

export default function KnowledgeDetailPage({ article }) {
  return (
    <article className="news-detail page-view section-space">
      <div className="page-width news-detail-inner">
        <a className="news-back-link" href="/kien-thuc">
          <span className="news-back-arrow"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /></span>
          <span>Quay lại Tin tức</span>
        </a>
        <NewsArtwork variant={article.thumbnail} />
        <header className="news-detail-heading">
          <span className="news-category">{article.category}</span>
          <h1>{article.title}</h1>
        </header>
        <KnowledgeArticleBody article={article} />
      </div>
    </article>
  )
}
