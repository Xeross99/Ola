import React from 'react'
import Plx from "react-plx";
import image1 from '../images/main/1.PNG'

const section_one = () => {
  return (
    <div className='h-full mb-20'>
      <Plx parallaxData=
        {[
          {
            start: 0,
            end: 1200,
            properties: [
              {
                startValue: 200,
                endValue: 0,
                property: "translateY"
              },
            ]
          }
        ]}> <img src={image1} alt='1st plan' />
      </Plx>
    </div>
  )
}

export default section_one