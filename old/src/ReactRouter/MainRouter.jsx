import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import LayoutPage from '../Pages/LayoutPage'
 '../Pages/AboutPage'
const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index  element={<LayoutPage/>}>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouter
