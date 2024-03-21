import React from 'react'
import about from '../assets/aboutnew.png'
const AboutSection = () => {
  return (
    <div className='about-container'>
       <div className="about-img"><img className='about-image' src={about} alt="" /></div>
       <div className="about-description">
        <div className="about-head">About  Umall</div>
        <div className='about-description-info'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         </div>
         </div>
    </div>
  )
}

export default AboutSection
