import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to={'/'}><p>Home</p> </Link>
      <Link to={'about'}><p>About</p></Link> 
    </div>
  )
}

export default NavBar
