import React from 'react'


const SubsriptionCard = ({name,amount,details}) => {
  function checkPlan() {
    if (amount > 0) {
      return 'Paid';
    } else {
      return 'free';
    }
  }
  console.log('Original name:', name);

  const cleanedName = name.replace(/"/g, '');
  console.log('Cleaned name:', cleanedName);
  const capitalizedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
  return (
    <div className='col-md-12 col-sm-12 col-12 subscription-card-main'>
      <div className='subscription-card'>
        <div className="subcription-card-info">
         
           <div className="subscription-status">{checkPlan()}</div>
           <div className="subsrciptio-rate"><div className='price'>${amount}</div><div className='month'>/mo</div></div>
           <div className="subcription-points">
            
      <div className="popup-container">
        <div className="subcription-name">
         {capitalizedName}
          <p className="popup-content">{cleanedName}</p>
        </div>
       </div>
             {/* <div className='subcription-feature'><div className='subcription-feature-msg'>{name}</div></div> */}
             <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>{details}</div></div>
             <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>{details}</div></div>
              <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>{details}</div></div>
           </div>
           {/* <div className='subscription-btn'> <button className='subscription-button'>Already using</button></div> */}
        </div>   
      </div>
    </div>
  )
}

export default SubsriptionCard
