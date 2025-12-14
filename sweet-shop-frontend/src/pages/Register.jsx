import { Link } from 'react-router-dom'
import styles from './Register.module.css'

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Create Account 🍭</h2>
        <p className={styles.subtitle}>
          Register to manage your sweet shop
        </p>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Create password" />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>

          <button className={styles.registerBtn}>
            Register
          </button>
        </form>

        <p className={styles.footerText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}
