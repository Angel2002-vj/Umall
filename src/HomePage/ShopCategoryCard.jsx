import React from 'react'
import category from '../assets/categories.png'
const ShopCategoryCard = () => {
  return (
    <div className='col-xl-2 col-lg-2 col-md-2 col-sm-3 col-4'>
      <div className="card-info">
        <div className="category-card-main">
          <img className='category-card-image' src={category} alt="" />
        </div> 
        <div className='category-name'>Kitchen</div>
        <div className="near-shop-container">

        </div>
        </div>
    </div>
  )
}

export default ShopCategoryCard
