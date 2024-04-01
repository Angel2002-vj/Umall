import React from 'react'
import category from '../assets/categories.png'
const ShopCategoryCard = ({name}) => {
  return (
    <div className='col-2'>
    <div className="category-card">
    <img src={category} alt='' />
    
  </div> 
  <div className='category-name'>{name}</div>
  </div>
  )
}

export default ShopCategoryCard
