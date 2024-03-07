import React from 'react'
import '../HomePage/home.css'
import Banner from '../HomePage/Banner'
import ShopCategoryCard from '../HomePage/ShopCategoryCard'
import NearByCard from '../HomePage/NearByCard'
import AboutSection from '../HomePage/AboutSection'
import FeaturesSection from '../HomePage/FeaturesSection'
import Subscription from '../HomePage/Subscription'
import ContactSection from '../HomePage/ContactSection'
const Home = () => {
  return (
    <div>
      <Banner/>
    <div className='heading'>Shop Categories</div>  
    <div className='shop-categories'>
  
      <div className='row'>
        <ShopCategoryCard/>
        <ShopCategoryCard/>
        <ShopCategoryCard/>
        <ShopCategoryCard/>
        <ShopCategoryCard/>
        <ShopCategoryCard/>
       
        </div>
   
    </div>
    <div className='heading'>Near by Shop</div> 
    <div className='near-shop'>
  
       <div className='row'>
           <NearByCard/>
           <NearByCard/>
           <NearByCard/>
           <NearByCard/>
       </div>
   
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
