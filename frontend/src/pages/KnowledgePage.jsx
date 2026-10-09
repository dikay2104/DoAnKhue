import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import NewsArtwork from '../components/NewsArtwork'
import SectionHeading from '../components/SectionHeading'
import { newsArticles } from '../data/newsArticles'

export default function KnowledgePage() {
  return (
    <section className="knowledge-section section-space page-view" aria-labelledby="knowledge-title">
      <div className="page-width">
        <SectionHeading id="knowledge-title" title="Góc nhỏ về phân loại rác">
          Những câu chuyện và mẹo nhỏ giúp việc phân loại, tái chế trở nên dễ dàng hơn.
        </SectionHeading>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <a className="news-card" href={`/kien-thuc/${article.slug}`} key={article.slug}>
              <NewsArtwork variant={article.thumbnail} />
              <div className="news-card-content">
                <span className="news-category">{article.category}</span>
                <h2>{article.title}</h2>
              </div>
              <FontAwesomeIcon className="news-card-arrow" icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
