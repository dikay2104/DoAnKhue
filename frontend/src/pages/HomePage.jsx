import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import coverImage from '../assets/images/cover.png'
import SearchForm from '../components/SearchForm'
import SectionHeading from '../components/SectionHeading'
import NewsArtwork from '../components/NewsArtwork'
import TikTokVideoGallery from '../components/TikTokVideoGallery'
import { newsArticles } from '../data/newsArticles'

export default function HomePage({ searchProps }) {
  return (
    <div className="home-page">
      <section id="trang-chu" className="home-hero page-width" aria-labelledby="home-title">
        <figure className="home-cover">
          <img
            src={coverImage}
            alt="Linh vật Tập Tành Tách Rác bên các thùng phân loại"
            fetchPriority="high"
          />
        </figure>
        <div className="home-search-content">
          <div className="home-search-heading">
            <p className="home-search-eyebrow">Tập Tành Tách Rác</p>
            <h1 id="home-title">Khám phá xem món đồ nào có thể tái chế!</h1>
          </div>
          <SearchForm
            {...searchProps}
            inputId="home-waste-search"
            className="home-search-form"
            label="Bạn muốn phân loại món đồ nào?"
            placeholder="Ví dụ: chai nhựa, thùng carton"
            helperText="Kết quả tra cứu sẽ hiển thị trong trang Hướng dẫn."
          />
        </div>
      </section>

      <section className="home-intro section-space">
        <div className="page-width home-intro-layout">
          <div>
            <p className="hero-eyebrow">Tập Tành Tách Rác</p>
            <h2>Một thói quen nhỏ, một thay đổi lớn</h2>
          </div>
          <div>
            <p>Dự án chia sẻ kiến thức phân loại và xử lý rác sinh hoạt có khả năng tái chế cho người trẻ tại Đà Nẵng.</p>
            <a className="text-link" href="/gioi-thieu">Tìm hiểu về dự án <FontAwesomeIcon className="text-link-arrow" icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="home-news-section section-space" aria-labelledby="home-news-title">
        <div className="page-width">
          <SectionHeading id="home-news-title" title="Góc nhỏ về phân loại rác">
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

          <div className="home-news-more">
            <a className="text-link" href="/kien-thuc">
              Xem toàn bộ tin tức <FontAwesomeIcon className="text-link-arrow" icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </a>
          </div>

          <section className="home-tiktok-section" aria-labelledby="home-tiktok-title">
            <header className="tiktok-heading">
              <div>
                <span className="news-category" id="home-tiktok-title">Video mới</span>
              </div>
              <a href="https://www.tiktok.com/@taptanhtachrac" target="_blank" rel="noreferrer">
                @taptanhtachrac <span aria-hidden="true">·</span> Theo dõi trên TikTok
              </a>
            </header>
            <TikTokVideoGallery />
          </section>
        </div>
      </section>
    </div>
  )
}
