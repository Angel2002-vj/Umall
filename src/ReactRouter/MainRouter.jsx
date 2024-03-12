import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Pages/Layout';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Register from '../Pages/Register';
const MainRouter = () => {
    const queryClient = new QueryClient();
  return (
    <div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>

     <Route path='/'  element={<Layout/>}>
       <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}/>
        
     </Route>
 <Route path='register' element={<Register/>}> </Route>

    </Routes>
    </BrowserRouter>
    
    </QueryClientProvider>
   
  </div>
  )
}

export default MainRouter
