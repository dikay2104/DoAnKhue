import { useState } from 'react'
import projectLogo from '../assets/images/logo.png'

export default function Header({ navigation, currentPath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand" href="/" aria-label="Tập Tành Tách Rác, trang chủ" onClick={(event) => { event.preventDefault(); onNavigate('/'); setMenuOpen(false) }}>
          <img className="brand-logo" src={projectLogo} alt="Tập Tành Tách Rác" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={menuOpen ? 'main-navigation is-open' : 'main-navigation'} aria-label="Điều hướng chính">
          {navigation.map((item) => {
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentPath === item.href ? 'page' : undefined}
                onClick={(event) => { event.preventDefault(); onNavigate(item.href); setMenuOpen(false) }}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
