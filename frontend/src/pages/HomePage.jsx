import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import coverImage from '../assets/images/cover.png'
import SearchForm from '../components/SearchForm'

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
    </div>
  )
}
