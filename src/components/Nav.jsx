import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import   logo from '../assets/Logoblack.png'
import CustomButton from './CustomButton'
const NavBar = ({AboutLink,ShopsLink,CategoryLink,ContactusLink}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='navbar'>
    <div className="nav">
      <div className='logo'>
        <img className='logo--image' src={logo} alt="Logo" />
      </div>
      <div className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
        <div className='nav-links'>
          <Link to='/' className='link-underline link-underline-opacity-0'>
            <div className='home' onClick={toggleMenu}>Home</div>
          </Link>
          <a href={AboutLink} className='link-underline link-underline-opacity-0'>
            <div className='about' onClick={toggleMenu}>About</div>
          </a>
          <a href={ShopsLink} className='link-underline link-underline-opacity-0'>
            <div className='about' onClick={toggleMenu}>Shops</div>
          </a>
          <a href={CategoryLink} className='link-underline link-underline-opacity-0'>
            <div className='about' onClick={toggleMenu}>Categories</div>
          </a>
          <a href={ContactusLink} className='link-underline link-underline-opacity-0'>
            <div className='about' onClick={toggleMenu}>Contact Us</div>
          </a>
        </div> 
        <div className='register-btn' >
        <Link to='register'> <CustomButton buttontext='Register' /></Link>
        </div>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen?<i class="ri-close-line"></i>:<i class="ri-menu-line"></i>}
      
      </div>
    </div>
  </div>


  )
}

export default NavBar
