import projectLogo from '../assets/images/logo_2.png'

export default function Footer({ navigation, projectContact }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#trang-chu" aria-label="Tập Tành Tách Rác, trang chủ">
            <img className="brand-logo" src={projectLogo} alt="Tập Tành Tách Rác" />
          </a>
          <p>Đừng tiện tay, phân loại ngay.</p>
        </div>
        <div className="footer-contact">
          <h2>Thông tin liên hệ dự án</h2>
          <a href={`tel:${projectContact.phone.replaceAll(' ', '')}`}>{projectContact.phone}</a>
          <a href={`mailto:${projectContact.email}`}>{projectContact.email}</a>
        </div>
        <nav className="footer-links" aria-label="Liên kết chân trang">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </div>
      <div className="page-width footer-bottom">
        <span>Tập Tành Tách Rác</span>
        <span>Thông tin phân loại cần được đối chiếu với điểm tiếp nhận tại địa phương.</span>
      </div>
    </footer>
  )
}
