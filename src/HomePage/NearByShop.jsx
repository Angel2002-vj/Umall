import React, { useEffect, useState } from 'react'
import NearByCard from './NearByCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NearByShop = () => {
    
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
        responsive: [
    
      {
        breakpoint: 860,
        settings: {
         
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
         
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
            {
        breakpoint: 470,
        settings: {
         
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 340,
        settings: {
           dots: false,
        
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      

        ]
  };








 
    const [pincode,setPincode] = useState()

    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude,longitude} = pos.coords;
            console.log(latitude,longitude)
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            // fetch(url).then(res=>res.json()).then(data=>setAdd(data.address))
            fetch(url).then(res=>res.json()).then(data=>setPincode(data.address.postcode))
        })
    },[])
   
    console.log(pincode,"pincode")
    const [shops, setShops] = useState([]);
       const  body={
       pincode:'680020'
  }
  const fetchingFunction = async ( body) => {
    const { data } = await axios.post(`https://portal.umall.in/api/shoplist`, body)
    // console.log(data)
    return data
}
  const {data,isLoading,isError,error}=useQuery({queryKey:['getShops'],queryFn:()=>fetchingFunction(body)})
  let filteredShops = [];
  if (data && data.categories) {
      // Filter shops based on pin code
      filteredShops = data.categories.reduce((accumulator, category) => {
          const filteredCategoryShops = category.shops.filter(
              shop => shop.pin_code === '680020'
          );
          return [...accumulator, ...filteredCategoryShops];
      }, []);
  }
  console.log(filteredShops,'yhhhyyy')
  return (
    <>
        <Slider {...settings}>
        {filteredShops.map(shop =>
         ( <NearByCard key={shop.id} shopname={shop.name} shoplogo={shop.logo} />
        ))
        }
          </Slider>
      
       {/* <div>{pincode} </div> */}
    </>
  )
}

export default NearByShop
