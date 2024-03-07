import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
const LayoutPage = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default LayoutPage
