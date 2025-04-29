import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Checkout.css';

function Checkout({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const [deliveryOption, setDeliveryOption] = useState('standard');
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = deliveryOption === 'standard' ? 0 : 20;
  const finalTotal = total + deliveryFee;

  const handlePlaceOrder = () => {
    setCartItems([]); // Clear cart after order
    navigate('/confirmation');
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout">
        <h1>Checkout</h1>
        <p>Your cart is empty. <Link to="/">Continue shopping</Link>.</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <div className="form-section">
          <h2>Delivery Information</h2>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              aria-label="Delivery address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="delivery-option">Delivery Option</label>
            <select
              id="delivery-option"
              value={deliveryOption}
              onChange={(e) => setDeliveryOption(e.target.value)}
              aria-label="Select delivery option"
            >
              <option value="standard">Standard Delivery (Free)</option>
              <option value="express">Express Delivery ($20)</option>
            </select>
          </div>
          <h2>Payment Information</h2>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              id="card-number"
              type="text"
              placeholder="Enter card number"
              aria-label="Card number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-name">Name on Card</label>
            <input
              id="card-name"
              type="text"
              placeholder="Enter name on card"
              aria-label="Name on card"
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-expiry">Expiry Date</label>
            <input
              id="card-expiry"
              type="text"
              placeholder="MM/YY"
              aria-label="Card expiry date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-cvv">CVV</label>
            <input
              id="card-cvv"
              type="text"
              placeholder="CVV"
              aria-label="Card CVV"
            />
          </div>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <p>{item.name} (x{item.quantity})</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="summary-item">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="summary-item total">
            <p>Total</p>
            <p>${finalTotal.toFixed(2)}</p>
          </div>
          <button onClick={handlePlaceOrder} aria-label="Place your order">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;