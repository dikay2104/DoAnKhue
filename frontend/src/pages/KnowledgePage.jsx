import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import NewsArtwork from '../components/NewsArtwork'
import SectionHeading from '../components/SectionHeading'
import { newsArticles } from '../data/newsArticles'

const tiktokProfile = 'https://www.tiktok.com/@taptanhtachrac'
const tiktokVideoSlots = ['01', '02', '03', '04', '05']

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

        <section className="tiktok-section" aria-labelledby="tiktok-title">
          <header className="tiktok-heading">
            <h2 id="tiktok-title">TẬP TÀNH TÁCH RÁC</h2>
            <a href={tiktokProfile} target="_blank" rel="noreferrer">
              @taptanhtachrac <span aria-hidden="true">·</span> Theo dõi trên TikTok
            </a>
          </header>
          <div className="tiktok-gallery-frame">
            <div className="tiktok-gallery" aria-label="Các video TikTok nổi bật">
              {tiktokVideoSlots.map((number) => (
                <a
                  className="tiktok-video-slot"
                  href={tiktokProfile}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Video TikTok ${number} của Tập Tành Tách Rác`}
                  key={number}
                >
                  <span className="tiktok-video-placeholder" aria-hidden="true">Ảnh video {number}</span>
                </a>
              ))}
            </div>
            <span className="tiktok-gallery-track" aria-hidden="true" />
          </div>
        </section>
      </div>
    </section>
  )
}
