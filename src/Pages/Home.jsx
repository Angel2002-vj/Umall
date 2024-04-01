import React from 'react'
import '../HomePage/home.css'
import Banner from '../HomePage/Banner'
import AboutSection from '../HomePage/AboutSection'
import FeaturesSection from '../HomePage/FeaturesSection'
import Subscription from '../HomePage/Subscription'
import ContactSection from '../HomePage/ContactSection'
import NearByShop from '../HomePage/NearByShop'
import ShopCategorySlider from '../HomePage/ShopCategorySlider'
import { Link } from 'react-router-dom'
const Home = () => {
return (
    <div>
      <Banner/>
    <div  id='category' className='heading-first'><div>Shop Categories</div> <Link to={'shopcategories'}  className='view-all see-all link-underline link-underline-opacity-0'>view more <i class="ri-arrow-right-s-line"></i></Link></div>  
      <div className='shop-categories'>
         <ShopCategorySlider/>
       </div>
    <div id='shops' className='heading'><div> Near by Shop</div> <div className='see-all'><Link to={'shop'} className='view-all see-all link-underline link-underline-opacity-0'>view more <i class="ri-arrow-right-s-line"></i></Link></div></div> 
    <div className='near-shop'>
      <NearByShop/>
    </div> 
    <div id='about' className='about-section'>
      <AboutSection/>
    </div>    
    <div  className='heading'>Features</div> 
    <div className='feature--section'>
      <FeaturesSection/>
    </div> 
    <div className='heading'>Plans</div>
    <div className='subscription-main-section'>
      <Subscription/>
    </div>
    <div id='contact' className='about-section'>
       <ContactSection/>
    </div>
   </div>
  )
}

export default Home
