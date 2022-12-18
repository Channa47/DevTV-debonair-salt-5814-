
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Image, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import axios from 'axios';
import styles from "./CrewAndCast.module.css";
import { useParams } from 'react-router-dom';

// Settings for the slider
const settings = {
  
  arrows: true,
 
  infinite: false,
  autoplay: false,
  speed: 50,
  slidesToShow: 8,
  slidesToScroll: 8,
}

export default function CrewAndCast() {
    const {id} = useParams();
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();
  const [cast,setCast]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' , sm: `30%` });
  const side = useBreakpointValue({ base: '30%', md: '10px', sm: `5px` });

  ;
  const getData=()=>{
    setLoading(true)
    try {
      axios.get(`https://movies-appletv.onrender.com/movies/${id}`).then((res)=>{
      setCast(res.data.cast)
      setLoading(false)
    })
      
    } catch (error) {
      setError(true)
    }
  }
  useEffect(()=>{
    getData()
  },[])

  if(loading){
    return <Spinner
    thickness='3px'
    speed='0.65s'
    emptyColor='gray.200'
    color='grey.500'
    size='md'
  />
  }

  return (
    <Box>
    <Text className={styles.heading_style}>Cast & Crew</Text>
    <Box
    marginTop={'50px'}
      position={'relative'}
      height={'170px'}
      margin={'auto'}
      overflow={'hidden'}>
      
          {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton 
        aria-label="left-arrow"
        colorScheme={'transparent'}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
          <IoIosArrowBack size={'23px'} color="grey"/>
        {/* <BiLeftArrowAlt /> */}
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
          <IoIosArrowForward size={'23px'} color="grey"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        {cast.map((item) => (
           
            <Box className={styles.CrewAndCast_div} key={item.id} > 
              <Box> {item.img.includes("apple")? <Image className={styles.CrewAndCast_Image}  src="https://is3-ssl.mzstatic.com/image/thumb/UAJxYURG7lNf9Et6x4yCBg/550x550bb.webp" />:
               <Image className={styles.CrewAndCast_Image} src={item.img}  />}
              </Box>  
                <Box><Text>{item.name}</Text></Box>
            </Box>
            
        ))}
      </Slider>
     </Box>
     
    </Box>
    </Box>
  );
}