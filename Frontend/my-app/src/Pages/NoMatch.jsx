import React from 'react'
import errorimg from '../assets/images/error.png'
const NoMatch = () => {
  return (
    <div>
      <img src={errorimg} alt='not-found' style={{marginLeft:'20px', size:'40px'}}/>
    </div>
  )
}

export default NoMatch