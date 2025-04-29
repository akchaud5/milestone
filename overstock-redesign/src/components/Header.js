import { Link } from 'react-router-dom';
import '../styling/Header.css';

function Header({ cartItems }) {
  const categories = [
    "Furniture",
    "Rugs",
    "Decor & Lighting",
    "Outdoor",
    "Bed & Bath",
    "Kitchen",
    "Apparel",
    "Jewelry & Watches",
    "Designer",
    "More",
  ];

  const totalItems = cartItems ? cartItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <header>
      <div className="logo">
        <Link to="/">Overstock Redesign</Link>
      </div>
      <nav>
        <input
          type="text"
          placeholder="Start your search"
          className="search-bar"
          aria-label="Search products"
        />
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to="/products">{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="user-actions">
        <Link to="/cart" aria-label="Cart">
          <span className="icon">🛒 {totalItems > 0 && `(${totalItems})`}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;