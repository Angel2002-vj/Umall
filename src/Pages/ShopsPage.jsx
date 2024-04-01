import React, { useState } from 'react'
import '../ShopPage/shoppage.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import NearByshopsDisplay from '../NearByShops/NearByshopsDisplay'
import NavBar from '../components/Nav'
const ShopsPage = () => {

  const [showCategories, setShowCategories] = useState(false); 
  const  body={
  
  }
  const fetchingFunction = async ( body) => {
    const { data } = await axios.get(`https://portal.umall.in/api/all-shopcategories`, body)
    console.log(data)
    return data
}
  const {data,isLoading,isError,error}=useQuery({queryKey:['getCategory'],queryFn:()=>fetchingFunction(body)})
  // const toggleCategories = () => {
  //   setShowCategories(!showCategories);
  // };
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
                                            {/* <div className={showCategories ?'shop-category-listing':'empty'}>
                                              {isLoading ? <></> :isError ? <div className="empty">error {error.msg}</div> : showCategories  && data?.categories?.map(category => <div className='shop-category--name' key={category.id}>{category.name}</div>)}</div> */}
        
         
        


      </div>
    <div className='heading'><div> Near by Shop</div></div>      
     <div className="shop-page-info"> <NearByshopsDisplay/></div>
    </div>
    </>
  )
}

export default ShopsPage
