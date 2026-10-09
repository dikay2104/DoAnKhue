import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import projectLogo from '../assets/images/logo_2.png'

export default function Footer({ navigation, projectContact }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <a className="brand brand-footer" href="/" aria-label="Tập Tành Tách Rác, trang chủ">
            <img className="brand-logo" src={projectLogo} alt="Tập Tành Tách Rác" />
          </a>
          <p>Đừng tiện tay, phân loại ngay.</p>
        </div>
        <div className="footer-contact">
          <h2>Thông tin liên hệ dự án</h2>
          <a className="footer-contact-link" href={`tel:${projectContact.phone.replaceAll(' ', '')}`}>
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
            <span>{projectContact.phone}</span>
          </a>
          <a className="footer-contact-link" href={`mailto:${projectContact.email}`}>
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <span>{projectContact.email}</span>
          </a>
          {/* Font Awesome Free brand icons: Facebook F and TikTok (CC BY 4.0). */}
          <div className="footer-social" aria-label="Mạng xã hội">
            <a className="social-link" href="https://www.facebook.com/profile.php?id=61594863424306" target="_blank" rel="noreferrer" aria-label="Facebook Tập Tành Tách Rác">
              <svg viewBox="0 0 320 512" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0C152.77 0 105.47 44 105.47 123.92v71.42H24.89V288h80.58v224h99.2V288z" /></svg>
              <span>Facebook</span>
            </a>
            <span className="social-link is-pending" aria-label="TikTok, sẽ cập nhật sau">
              <svg viewBox="0 0 448 512" aria-hidden="true"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z" /></svg>
              <span>TikTok (sắp cập nhật)</span>
            </span>
          </div>
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
