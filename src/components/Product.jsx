import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-toastify';
import './Product.css';

function Product({ post }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = () => {
    dispatch(add(post));
    toast.success('Item Added To Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error('Item Removed From Cart');
  };

  return (
    <div className="card">
      <div className="inside-container">
        <p className='title'>
          {post.title.length>20 
          ? post.title.substring(0 , 30) 
          : post.title}
        </p>
        <p className="desc">
          {post.description.length > 100
            ? post.description.substring(0, 90) + '...'
            : post.description}
        </p>
        <img className="image" src={post.image} alt={post.title} />
        <p className="price">${post.price}</p>
        {
          cart.some((p) => p.id === post.id) ? (
            <button className='remove-button' onClick={removeFromCart}>Remove Item</button>
          ) : (
            <button className='add-button' onClick={addToCart}>Add To Cart</button>
          )
        }

      </div>
    </div>
  );
}

export default Product;
