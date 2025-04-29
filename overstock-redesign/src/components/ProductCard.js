import { Link } from 'react-router-dom';
import '../styling/ProductCard.css';

function ProductCard({ product, cartItems, setCartItems }) {
  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </Link>
      <p className="price">${product.price.toFixed(2)}</p>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < product.rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
        <span>({product.reviews.length} reviews)</span>
      </div>
      <button onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;