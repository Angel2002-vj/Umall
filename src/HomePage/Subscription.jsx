import React from 'react'
 import SubscriptionCard from  '../HomePage/SubsriptionCard'
const Subscription = () => {
  return (
    <div className='subscription-section'>
      <div className="row">
        <SubscriptionCard/>
        <SubscriptionCard/>
        <SubscriptionCard/>
      </div>   
    </div>
  )
}

export default Subscription
