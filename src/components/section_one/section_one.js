import React from 'react'
import image1 from '../images/Logo zieleń.png'

const section_one = () => {
  return (
    <div className='w-screen h-screen relative'>
      <img src={image1} alt="Logo" className='w-1/2 absolute top-1/2 -translate-y-1/2 right-5'></img>
    </div>
  )
}

export default section_one