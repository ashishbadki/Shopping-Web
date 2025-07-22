import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Your Cart</h2>
            <h3>Summary</h3>
            <p><span>Total Items: {cart.length}</span></p>
            <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
            <button className="checkout-btn">Check Out</button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Bag Feels Empty</p>
          <Link to="/">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
