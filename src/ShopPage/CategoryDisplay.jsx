import React from 'react'
import ShopCategoryCard from './ShopCategoryCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const CategoryDisplay = () => {
    const  body={
  
    }
    const fetchingFunction = async ( body) => {
        const { data } = await axios.get(`https://portal.umall.in/api/all-shopcategories`, body)
        console.log(data)
        return data
    }
    const {data,isLoading,isError,error}=useQuery({queryKey:['getProducts'],queryFn:()=>fetchingFunction(body)})
    
  return (
    <div className='row'>
       {isLoading ?<></>:
              isError ? <div className="empty">error {error.msg}</div>
              : data?.categories?.map(category => <ShopCategoryCard key={category.id} name={category.name} />)}
    </div>
  )
}

export default CategoryDisplay
