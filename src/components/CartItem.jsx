import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice'; 
import { toast } from 'react-toastify';
function CartItem({item , itemIndex}) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div>
      <div>
        <img src={item.image}></img>
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div>
        <FcDeleteDatabase onClick={removeFromCart}></FcDeleteDatabase>
      </div>
    </div>
  )
}

export default CartItem