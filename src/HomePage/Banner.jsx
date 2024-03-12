import React from 'react'

const Banner = () => {
//  const  body={
//     shopid:15,
//     userid:652
//   }
//   const fetchingFunction = async ( body) => {
//     const { data } = await axios.post(`https://portal.umall.in/api/popular_products`, body)
//     console.log(data)
//     return data
// }
//   const {data,isLoading,isError,error}=useQuery({queryKey:['getProducts'],queryFn:()=>fetchingFunction(body)})
  return (
    <div className='banner-main'>
    <div className="banner-description-info">
      <div className='banner-description'>
        <div className="banner-head">New Generation Ceramic Tile </div>
        <div className="banner-text">Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
        </div>
        <div className="banner-btn"><button className='learn-more-btn'>Learn more</button></div>
      </div>
    </div>
    </div>
  )
}

export default Banner
