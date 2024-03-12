import React from 'react'
import NearByCard from './NearByCard'

const NearByShop = () => {
  function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // Call function to convert coordinates to pincode
    convertToPincode(latitude, longitude);
}

function error() {
    console.log("Unable to retrieve your location");
}

function convertToPincode(latitude, longitude) {
    const apiKey = 'AIzaSyADkTLT-E-j3E2x03dQXjDu23CnqupDluc';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'OK') {
                const addressComponents = data.results[0].address_components;
                let pincode = null;
                for (let component of addressComponents) {
                    if (component.types.includes('postal_code')) {
                        pincode = component.long_name;
                        break;
                    }
                }
                if (pincode) {
                    console.log(`Pincode: ${pincode}`);
                    // Now you have the pincode, you can do further processing with it.
                } else {
                    console.log("Pincode not found");
                }
            } else {
                console.log("Reverse geocoding failed");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call getCurrentLocation to initiate the process
getCurrentLocation();



















  return (
    <>
        <div className='row'>
           <NearByCard/>
           <NearByCard/>
           <NearByCard/>
           <NearByCard/>
       </div>
    </>
  )
}

export default NearByShop
