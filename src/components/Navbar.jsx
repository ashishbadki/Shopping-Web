import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <div className='main-container'>
        <div className='logo'>
          <NavLink to='/'>
          <img className='logo' src='https://avatars.githubusercontent.com/u/117018000?v=4?s=400'></img>
        </NavLink>
        </div>
        <div>
          <NavLink className="home" to='/'>
          <p>Home</p>
          </NavLink>
        </div>
        <NavLink className="cart-logo" to='/cart'>
          <IoCartOutline />
        </NavLink>
      </div>

  )
}

export default Navbar