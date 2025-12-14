import styles from './SweetCard.module.css'

export default function SweetCard({ sweet, onPurchase }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{sweet.name}</h3>

      <span className={styles.category}>{sweet.category}</span>

      <div className={styles.details}>
        <p className={styles.price}>₹{sweet.price}</p>
        <p className={styles.stock}>Stock: {sweet.quantity}</p>
      </div>

      <button
        className={styles.buyBtn}
        disabled={sweet.quantity === 0}
        onClick={() => onPurchase(sweet.id)}
      >
        {sweet.quantity === 0 ? 'Out of Stock' : 'Purchase'}
      </button>
    </div>
  )
}
