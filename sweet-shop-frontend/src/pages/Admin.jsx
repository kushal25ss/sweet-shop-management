import { useState } from 'react'
import styles from './Admin.module.css'

export default function Admin() {
  const [sweets, setSweets] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentId, setCurrentId] = useState(null)

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddOrUpdate = (e) => {
    e.preventDefault()

    if (isEditing) {
      // UPDATE
      setSweets((prev) =>
        prev.map((sweet) =>
          sweet.id === currentId
            ? {
                ...sweet,
                name: form.name,
                category: form.category,
                price: Number(form.price),
                quantity: Number(form.quantity),
              }
            : sweet
        )
      )
    } else {
      // ADD
      const newSweet = {
        id: Date.now(),
        name: form.name,
        category: form.category,
        price: Number(form.price),
        quantity: Number(form.quantity),
      }
      setSweets([...sweets, newSweet])
    }

    // Reset
    setForm({ name: '', category: '', price: '', quantity: '' })
    setIsEditing(false)
    setCurrentId(null)
  }

  const handleEdit = (sweet) => {
    setIsEditing(true)
    setCurrentId(sweet.id)
    setForm({
      name: sweet.name,
      category: sweet.category,
      price: sweet.price,
      quantity: sweet.quantity,
    })
  }

  const handleDelete = (id) => {
    setSweets(sweets.filter((sweet) => sweet.id !== id))
  }

  const handleRestock = (id) => {
    setSweets((prev) =>
      prev.map((sweet) =>
        sweet.id === id
          ? { ...sweet, quantity: sweet.quantity + 5 }
          : sweet
      )
    )
  }

  return (
    <div className={styles.container}>
      <h1>Admin Panel 🛠️</h1>

      {/* Form */}
      <form className={styles.form} onSubmit={handleAddOrUpdate}>
        <input
          name="name"
          placeholder="Sweet name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
        />
        <button>
          {isEditing ? 'Update Sweet' : 'Add Sweet'}
        </button>
      </form>

      {/* List */}
      <div className={styles.list}>
        {sweets.map((sweet) => (
          <div key={sweet.id} className={styles.item}>
            <span>
              {sweet.name} | {sweet.category} | ₹{sweet.price} | Qty:{' '}
              {sweet.quantity}
            </span>

            <div className={styles.actions}>
              <button onClick={() => handleEdit(sweet)}>Edit</button>
              <button onClick={() => handleRestock(sweet.id)}>Restock +5</button>
              <button onClick={() => handleDelete(sweet.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
