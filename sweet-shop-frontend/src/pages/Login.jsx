import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back 🍬</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" />
          </div>

          <button className={styles.loginBtn}>Login</button>
        </form>

        <p className={styles.footerText}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}
