import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import NearShopsCard from './NearShopsCard'
const NearByshopsDisplay = () => {
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
    <div className='row'>
        {filteredShops.map(shop =>
         ( <NearShopsCard key={shop.id} shopname={shop.name} shoplogo={shop.logo} />
        ))
        }
    </div>
  )
}

export default NearByshopsDisplay
