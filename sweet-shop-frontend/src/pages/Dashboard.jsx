import { useState } from 'react'
import styles from './Dashboard.module.css'
import SweetCard from '../components/SweetCard'

const initialSweets = [
  { id: 1, name: 'Gulab Jamun', category: 'Indian Sweet', price: 20, quantity: 5 },
  { id: 2, name: 'Rasgulla', category: 'Indian Sweet', price: 25, quantity: 0 },
  { id: 3, name: 'Chocolate Barfi', category: 'Chocolate', price: 30, quantity: 10 },
  { id: 4, name: 'Kaju Katli', category: 'Dry Fruit', price: 40, quantity: 8 },
  { id: 5, name: 'Motichoor Ladoo', category: 'Indian Sweet', price: 18, quantity: 15 },
  { id: 6, name: 'Milk Cake', category: 'Milk Sweet', price: 35, quantity: 6 },
  { id: 7, name: 'Peda', category: 'Milk Sweet', price: 22, quantity: 12 },
  { id: 8, name: 'Soan Papdi', category: 'Festival Sweet', price: 28, quantity: 0 },
  { id: 9, name: 'Rasmalai', category: 'Milk Sweet', price: 45, quantity: 4 },
  { id: 10, name: 'Besan Ladoo', category: 'Indian Sweet', price: 16, quantity: 20 },
]

export default function Dashboard() {
  const [sweets, setSweets] = useState(initialSweets)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const handlePurchase = (id) => {
    setSweets((prev) =>
      prev.map((sweet) =>
        sweet.id === id && sweet.quantity > 0
          ? { ...sweet, quantity: sweet.quantity - 1 }
          : sweet
      )
    )
  }

  const filteredSweets = sweets.filter((sweet) => {
    const matchName = sweet.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchCategory =
      category === 'All' || sweet.category === category

    return matchName && matchCategory
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Available Sweets 🍭</h1>

      {/* Search & Filter */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search sweets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Indian Sweet">Indian Sweet</option>
          <option value="Milk Sweet">Milk Sweet</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Dry Fruit">Dry Fruit</option>
          <option value="Festival Sweet">Festival Sweet</option>
        </select>
      </div>

      {/* Sweet Grid */}
      <div className={styles.grid}>
        {filteredSweets.length > 0 ? (
          filteredSweets.map((sweet) => (
            <SweetCard
              key={sweet.id}
              sweet={sweet}
              onPurchase={handlePurchase}
            />
          ))
        ) : (
          <p>No sweets found 🍬</p>
        )}
      </div>
    </div>
  )
}
