import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-toastify';

function Product({ post }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post));
    toast.error("Item Removed From Cart");
  };

  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt={post.title} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p) => p.id !== post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add To Cart</button>
        )
      }
    </div>
  );
}

export default Product;
