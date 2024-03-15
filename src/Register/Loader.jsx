import React from 'react'
const Loader = ({color='#FFF',style}) => {
    return (
      <span  style={{borderTop:`3px solid ${color}`,...style}} className="loader"></span>
    )
}

export default Loader;