import React, { useRef, useState } from 'react'
import ShopCategoriesCard from './ShopCategoriesCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const ShopCategorySlider = () => {
    // const containerRef = useRef(null);
    // const [scrollLeft, setScrollLeft] = useState(0);
  
    // const handleScroll = (scrollOffset) => {
    //   const newScrollLeft = scrollLeft + scrollOffset;
    //   if (containerRef.current) {
    //     containerRef.current.scrollLeft = newScrollLeft;
    //     setScrollLeft(newScrollLeft);
    //   }
    // };


    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                  arrows: false,
                  slidesToShow: 6,
                  slidesToScroll: 6,
                },
              },
          {
            breakpoint: 860,
            settings: {
              arrows: false,
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
                {
            breakpoint: 470,
            settings: {
              arrows: false,
              slidesToShow: 3,
              dots: false,
              slidesToScroll: 3,
            },
          },
            ]
      };



             const  body={
  
  }
  const fetchingFunction = async ( body) => {
    const { data } = await axios.get(`https://portal.umall.in/api/all-shopcategories`, body)
    console.log(data)
    return data
}
  const {data,isLoading,isError,error}=useQuery({queryKey:['getProducts'],queryFn:()=>fetchingFunction(body)})

  return (

    <Slider {...settings}>
       {isLoading ?<></>:
              isError ? <div className="empty">error {error.msg}</div>
              : data?.categories?.map(category => <ShopCategoriesCard key={category.id} name={category.name} />)}


       {/* <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  />
        <CategoryTestCard  /> */}
	</Slider>
 
  )
}

export default ShopCategorySlider
