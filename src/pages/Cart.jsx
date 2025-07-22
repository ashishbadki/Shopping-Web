import React, { useEffect, useState, useTransition } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem'; 
import { Link } from 'react-router-dom';
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

  //calculating total amount

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc , curr) => acc + curr.price , 0));
  } , [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div>
              <div>
              {
                cart.map((item , index) => {
                  return <CartItem key={item.id} item={item} itemIndex ={index}></CartItem>
                })
              }
              </div>

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount : {totalAmount}</p>
              </div>
              <div>
                <button>Check Out</button>
              </div>
            </div>
          ) :
          (
            <div>
              <p>Bag Feels Empty</p>
              <Link to='/'>
                <button >Shop Now</button>
              </Link>
            </div>
          )
      }
    </div>
  );
}

export default Cart;
