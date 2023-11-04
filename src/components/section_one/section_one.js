import React from 'react'
import image1 from '../images/img4.jpg'
import image2 from '../images/img1.jpg'

const section_one = () => {
  return (
    <div className='w-screen h-screen snap-center'>
      <div className='flex flex-row max-h-screen w-full overflow-x-scroll snap-mandatory snap-x'>
        <img src={image1} alt="img1" className=' object-cover snap-center'></img>
        <img src={image2} alt="img2" className=' object-cover snap-center'></img>
      </div>
    </div>
  )
}

export default section_one