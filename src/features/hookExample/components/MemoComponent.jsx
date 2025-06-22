import React, { useMemo, useState } from 'react'

//Product list
const products = [
  { id: 1, name: 'iPhone', category: 'phone' },
  { id: 2, name: 'iPad', category: 'tablet' },
  { id: 3, name: 'Galaxy S', category: 'phone' },
  { id: 4, name: 'MacBook', category: 'laptop' },
];

export default function MemoComponent() {
  const [category, setCategory] = useState('all'); // Category filter
  const [count, setCount] = useState(0); // Unrelated state for testing re-render

  // Memoize filtered list so it only recalculates when category changes
  const filteredProducts = useMemo(() => {
    console.log('Filter'); // Log only when category changes
    if (category === 'all') return products;
    return products.filter(p => {
      console.log('Filtering item:', p.name); // Show filtered items
      return p.category === category;
    });
  }, [category]); //Recalculate only when category changes

  return (
    <div>
      <h2>Product List</h2>

      {/*Filter dropdown */}
      <div>
        <label>Filter by: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="phone">Phone</option>
          <option value="tablet">Tablet</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

      {/* Show filtered products */}
      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <hr />
      <p>Count: {count}</p>
      {/*This button increases count but won't re-filter products */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
