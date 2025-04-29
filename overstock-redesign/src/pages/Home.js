


import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import '../styling/Home.css';

function Home({ cartItems, setCartItems }) {
  const categories = [
    { name: "Furniture", img: "https://rnb.scene7.com/is/image/roomandboard/SmSpace_Ideas_hero_1124?cb&size=1600,1600&scl=1", link: "/products" },
    { name: "Rugs", img: "https://m.media-amazon.com/images/I/91stlkZYJlL.jpg", link: "/products" },
    { name: "Decor & Lighting", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfiAAt_FbsWFebuOx5SXi6gWcn6_Ifj96ig&s", link: "/products" },
    { name: "Outdoor", img: "https://m.media-amazon.com/images/I/81TzH6gnVSL._AC_UF894,1000_QL80_.jpg", link: "/products" },
  ];

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Summer Sale - Up to 40% Off!</h1>
          <p>Discover the best deals on furniture and home decor.</p>
          <Link to="/products">
            <button aria-label="Shop now">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="category-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="category-card">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;