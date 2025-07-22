import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import './CartItem.css'; // <-- Add this line

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <button onClick={() => dispatch(remove(item.id))}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
