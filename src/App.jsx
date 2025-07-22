import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  )
}

export default App

