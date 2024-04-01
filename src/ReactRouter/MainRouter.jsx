import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../Pages/Layout';
import ShopsPage from '../Pages/ShopsPage';
import Home from '../Pages/Home';

import Register from '../Pages/Register';
import ShopCategoriesPage from '../Pages/ShopCategoriesPage';
const MainRouter = () => {
    const queryClient = new QueryClient();
  return (
    <div>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>

     <Route path='/'  element={<Layout/>}>
       <Route index element={<Home/>}></Route>
       
      
     </Route>
     <Route path='shop' element={<ShopsPage/>}/>
     <Route path='shopcategories' element={<ShopCategoriesPage/>}/>
     <Route path='register' element={<Register/>}> </Route>

    </Routes>
    </BrowserRouter>
    
    </QueryClientProvider>
   
  </div>
  )
}

export default MainRouter
