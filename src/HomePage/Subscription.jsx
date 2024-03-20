import React from 'react'
 import SubscriptionCard from  '../HomePage/SubsriptionCard'
 import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Subscription = () => {

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
      {
        breakpoint: 885,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll:2,
        },
      },
      {
        breakpoint: 636,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
            {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
        ]
  };




  const  body={
  
  }
  const fetchingFunction = async ( body) => {
    const { data } = await axios.get(`https://portal.umall.in/api/plans`, body)
    console.log(data,'uuuuuuuuuuuuuuuuuuuuuuuuuuu')
    return data
}
  const {data,isLoading,isError,error}=useQuery({queryKey:['getPlans'],queryFn:()=>fetchingFunction(body)})
 
  return (
    <Slider {...settings}>
      {isLoading ?<></>:
              isError ? <div className="empty">error {error.msg}</div>
              : data?.plans?.map(plan => <SubscriptionCard key={plan.id} name={plan.name} amount={plan.amount} />)}
    </Slider>

  )
}

export default Subscription
