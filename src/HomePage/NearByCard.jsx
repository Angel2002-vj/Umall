import React from 'react'
import { baseurl } from '../constants/constantVariable'
const NearByCard = ({shoplogo,shopname}) => {
  return (
    <div className='  col-11'>
        <div className='near-by-card-main'>
        <div className='near-by-card'>
          <img className='near-by-card-image' src={`${baseurl}${shoplogo}`} alt=""/>
          <div className='near-by-card-image-shadow'>
          <div className='near-by-card-description'>
            <div className='small-text'>{shopname}</div>
            {/* <div className='big-text'>{shopname}</div>
            <div className='extra-small-text'>Lorem Ipsum</div> */}
          </div>
          </div>
        </div>
        <div className='shop-name'></div>
        </div>
    </div>
  )
}

export default NearByCard
