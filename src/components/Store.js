import React from 'react'
import Apple from '../../src/Assets/Images/apple.png'
import Playstore from '../../src/Assets/Images/GooglePlayBadge.png'


const Store = () => {
  return (
    <div className='store'>
        <img src={Apple} alt='apple-store' className='apple'/>
        <img src={Playstore} alt='apple-store' />
    </div>
  )
}

export default Store