import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const fadeImages  = [
  {
    url: 'https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp',
    caption: 'Slide 1'
  },
  {
    url: 'https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp',
    caption: 'Slide 2'
  },
  {
    url: 'https://is2-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/738x416.webp',
    caption: 'Slide 3'
  },
  {
    url : 'https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp',
    caption: 'Slide 4'
  }
];

const Slider = () => {
    return (
      <div className="slide-container" style={{width:"100%", marginTop:"0px"}} >
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img width={"100%"} height={"100px"} src={fadeImage.url} style={{borderRadius:"10px"}} />
              </div>
              {/* <h2>{fadeImage.caption}</h2> */}
            </div>
          ))}
        </Fade>
      </div>
    )
  }

export default Slider 