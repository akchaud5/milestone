import { useState } from 'react';
import '../styling/FilterBar.css';

function FilterBar({ onFilter }) {
  const [style, setStyle] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');

  const handleFilter = () => {
    onFilter({ style, seats: parseInt(seats), price: parseFloat(price) });
  };

  return (
    <div className="filter-bar">
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        aria-label="Select style"
      >
        <option value="">All Styles</option>
        <option value="Modern">Modern</option>
        <option value="Rustic">Rustic</option>
      </select>
      <select
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        aria-label="Select seating capacity"
      >
        <option value="">All Seats</option>
        <option value="6">6+</option>
        <option value="8">8+</option>
      </select>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Max Price"
        aria-label="Maximum price"
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default FilterBar;