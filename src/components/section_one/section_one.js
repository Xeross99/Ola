import React from 'react'
import Plx from "react-plx";
import image1 from '../images/Logo zieleń.png'

const section_one = () => {
  return (
<Plx
        parallaxData={[
          {
            start: 0,
            end: 1000,
            easing: "ease-in",
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 50,
          top: 0,
          width: "50%",
          zIndex: 100
        }}
      >
        <img style={{ width: "100%" }} src={image1} alt="foreground" />
      </Plx>
  )
}

export default section_one