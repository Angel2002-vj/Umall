import React from 'react'
import '../HomePage/home.css'
import Banner from '../HomePage/Banner'
import AboutSection from '../HomePage/AboutSection'
import FeaturesSection from '../HomePage/FeaturesSection'
import Subscription from '../HomePage/Subscription'
import ContactSection from '../HomePage/ContactSection'
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'

import NearByShop from '../HomePage/NearByShop'
import ShopCategorySlider from '../HomePage/ShopCategorySlider'
const Home = () => {
//  const  body={
//     shopid:15,
//     userid:652
//   }
//   const fetchingFunction = async ( body) => {
//     const { data } = await axios.get(`https://portal.umall.in/api/popular_products`, body)
//     console.log(data)
//     return data
// }
//   const {data,isLoading,isError,error}=useQuery({queryKey:['getProducts'],queryFn:()=>fetchingFunction(body)})

return (
    <div>
      <Banner/>
    <div className='heading'>Shop Categories</div>  
      <div className='shop-categories'>
    <ShopCategorySlider/>
       </div>
   
    <div className='heading'>Near by Shop</div> 
    <div className='near-shop'>
  
     <NearByShop/>
   
    </div> 
    <div id='about' className='about-section'>
      <AboutSection/>
    </div>    
    <div className='heading'>Features</div> 
    <div className='about-section'>
      <FeaturesSection/>
    </div> 
    <div className='heading'>Subscription</div>
    <div className='about-section'>
      <Subscription/>
    </div>
    <div className='about-section'>
       <ContactSection/>
    </div>
   </div>
  )
}

export default Home
