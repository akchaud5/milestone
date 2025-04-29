import { Link } from 'react-router-dom';
import '../styling/Confirmation.css';

function Confirmation() {
  return (
    <div className="confirmation">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been successfully placed.</p>
      <p>You will receive a confirmation email shortly.</p>
      <Link to="/">
        <button aria-label="Continue shopping">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Confirmation;