import React from 'react'


const SubsriptionCard = () => {
  return (
    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 subscription-card-main'>
      <div className='subscription-card'>
        <div className="subcription-card-info">
           <div className="subscription-status">Free</div>
           <div className="subsrciptio-rate"><div className='price'>$0</div><div className='month'>/mo</div></div>
           <div className="subcription-points">
             <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>Voice messages anywhere</div></div>
             <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>Voice messages anywhere</div></div>
             <div className='subcription-feature'> <div><i class="ri-checkbox-circle-fill"></i></div><div className='subcription-feature-msg'>Voice messages anywhere</div></div>
           </div>
           <div className='subscription-btn'> <button className='subscription-button'>Already using</button></div>
        </div>   
      </div>
    </div>
  )
}

export default SubsriptionCard
