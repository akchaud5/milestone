import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../styling/ProductDetails.css';

function ProductDetail({ cartItems, setCartItems }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

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
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <p className="price">${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
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
    </div>
  );
}

export default ProductDetail;