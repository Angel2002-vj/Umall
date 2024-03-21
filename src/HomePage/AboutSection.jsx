import React from 'react'
import about from '../assets/aboutnew.png'
const AboutSection = () => {
  return (
    <div className='about-container'>
       <div className="about-img"><img className='about-image' src={about} alt="" /></div>
       <div className="about-description">
        <div className="about-head">About  Umall</div>
        <div className='about-description-info'>
        we recognize the complexities that come with overseeing multiple retail locations. 
        Whether you're a budding entrepreneur venturing into multiple markets or an established
         retailer expanding your empire, our app is tailor-made to simplify your operations, 
         enhance productivity, and elevate customer experiences across all your stores.
         </div>
         </div>
    </div>
  )
}

export default AboutSection
