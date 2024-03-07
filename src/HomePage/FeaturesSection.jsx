import React from 'react'
import about from '../assets/aboutimg.png'
const FeaturesSection = () => {
  return (
    <div className='features-section'>
             <div className='story-section'> 
                 <div className="story-section-head">Our  Story</div>
                 <div className="story-section-description">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                 </div>
              </div>
             <div className='img-section'><img className='feature-image' src={about} alt="" /></div>
             <div className='image-secton2'><img className='feature-image' src={about} alt="" /></div>
             <div className='story-section2'>
             <div className="story-section-head">Our  Story</div>
                 <div className="story-section-description">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                 </div>
             </div>
    </div>
  )
}

export default FeaturesSection
