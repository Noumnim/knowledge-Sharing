import React, { useMemo, useState } from 'react'
const products = [
  { id: 1, name: 'iPhone', category: 'phone' },
  { id: 2, name: 'iPad', category: 'tablet' },
  { id: 3, name: 'Galaxy S', category: 'phone' },
  { id: 4, name: 'MacBook', category: 'laptop' },
];

export default function MemoComponent() {
  const [category, setCategory] = useState('all');
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    console.log('Filter');
    if (category === 'all') return products;
    return products.filter(p => {
      console.log('Filtering item:', p.name);
      return p.category === category;
    });
  }, [category]);
  // const filteredProducts = category === 'all'
  //   ? products
  //   : products.filter(p => {
  //       console.log('Filtering item:', p.name);
  //       return p.category === category;
  //     });
  // console.log('Filtering...');

  return (
    <div>
      <h2>Product List</h2>

      <div>
        <label>Filter by: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="phone">Phone</option>
          <option value="tablet">Tablet</option>
          <option value="laptop">Laptop</option>
        </select>
      </div>

      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <hr />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
