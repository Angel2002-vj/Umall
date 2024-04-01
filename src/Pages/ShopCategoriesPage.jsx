import React from 'react'
import CategoryDisplay from '../ShopPage/CategoryDisplay'
import NavBar from '../components/Nav'

const ShopCategoriesPage = () => {
  return (
    <>
    <NavBar  AboutLink='/'
             ShopsLink='/'
             CategoryLink='/'
             ContactusLink='/'/>
    <div className='Shop-main-container'>
    <div className="shop-page-info">
          <div className='shop-nav-bar'>
           {/* <div className='filter' onClick={toggleCategories}><i class="ri-filter-fill"></i></div> */}
           <div className='search-boxs'>
				      <form className="box-search" action="">
				          	<input type="text" placeholder="Search  Here..." name="search2"/>
					          <i className="ri-search-line"></i>
				      </form>
			     </div>
           {/* <div className='search-bar-div'><input type="text" className='search-bar' placeholder='search here ...'/> <button className="search"><i class="ri-search-line"></i></button></div> */}
       </div>
    </div>
    <div className='heading'><div>Shop Categories</div></div> 
    <div className="shop-page-info"><CategoryDisplay/> </div>
    </div>
    </>
  )
}

export default ShopCategoriesPage
