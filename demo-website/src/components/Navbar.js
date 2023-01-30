import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import '../styles/Navbar.css'

const Navbar = () => {
  const [openLinks,setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks)
  };

  return (
    <div className='navbar'>
      <div className='leftside' id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className='rightside'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <DensitySmallIcon className='svg' />
        </button>
           
      </div>
    </div>
  )
}

export default Navbar