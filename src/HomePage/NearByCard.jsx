import React from 'react'
import shop from '../assets/shop-image.png'
const NearByCard = () => {
  return (
    <div className=' col-lg-3 col-md-3 col-sm-4 col-6'>
        <div className='near-by-card-main'>
        <div className='near-by-card'>
          <img className='near-by-card-image' src={shop} alt=""/>
          <div className='near-by-card-image-shadow'>
          {/* <div className='near-by-card-description'>
            <div className='small-text'>Lorem Ipsum</div>
            <div className='big-text'>Lorem Ipsum</div>
            <div className='extra-small-text'>Lorem Ipsum</div>
          </div> */}
          </div>
        </div></div>
    </div>
  )
}

export default NearByCard
