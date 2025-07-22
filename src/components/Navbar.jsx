import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <div>
        <NavLink to='/'>
          <img src='https://avatars.githubusercontent.com/u/117018000?v=4?s=400'></img>
        </NavLink>
        <div>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <IoCartOutline />
          </NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar