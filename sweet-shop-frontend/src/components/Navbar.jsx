import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>🍭 Sweetify</div>

      <nav className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/">Sweets</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>

      </nav>

      <button className={styles.loginBtn}>
        <Link to="/login">Login</Link>
      </button>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>Sweets</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  )
}
