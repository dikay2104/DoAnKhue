import coverImage from '../assets/images/cover.png'
import SearchForm from '../components/SearchForm'

export default function HomePage({ searchProps }) {
  return (
    <div className="home-page">
      <section id="trang-chu" className="hero-section page-width">
        <div className="hero-copy">
          <p className="hero-eyebrow">Hướng dẫn phân loại rác</p>
          <h1>Đừng tiện tay.<br />Phân loại ngay.</h1>
          <p className="hero-description">Khám phá món đồ nào có thể tái chế và cách chuẩn bị đúng trước khi chuyển giao.</p>
          <SearchForm {...searchProps} inputId="home-waste-search" />
        </div>
        <div className="hero-artwork">
          <img
            src={coverImage}
            alt="Linh vật Tập Tành Tách Rác bên những thùng phân loại"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="home-intro section-space">
        <div className="page-width home-intro-layout">
          <div>
            <p className="hero-eyebrow">Tập Tành Tách Rác</p>
            <h2>Một thói quen nhỏ, một lựa chọn tốt hơn.</h2>
          </div>
          <div>
            <p>Dự án chia sẻ kiến thức phân loại và xử lý rác sinh hoạt có khả năng tái chế cho người trẻ tại Đà Nẵng.</p>
            <a className="text-link" href="#gioi-thieu">Tìm hiểu về dự án <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  )
}
