import React, { useEffect, useState } from 'react';
import { Box, IconButton, Image, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import axios from 'axios';
import styles from "./Related.module.css"

// Settings for the slider
const settings = {
  
  arrows: true,
 
  infinite: false,
  autoplay: false,
  speed: 50,
  slidesToShow: 5,
  slidesToScroll: 5,
};
const settingsForsmallTablet = {
  
  arrows: true,
 
  infinite: false,
  autoplay: false,
  speed: 50,
  slidesToShow: 2,
  slidesToScroll: 2,
};
const settingsForMobile = {
  
  arrows: true,
 
  infinite: false,
  autoplay: false,
  speed: 50,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsForTablet = {
  
  arrows: true,
 
  infinite: false,
  autoplay: false,
  speed: 50,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export default function Related() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();
  const [slider2,setSlider2]=React.useState()
  const [slider3,setSlider3]=React.useState()
  const [slider4,setSlider4]=React.useState()


  const [cards,setCards]=useState([])
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
      axios.get("https://appllehomeserver.onrender.com/movies").then((res)=>{
      setCards(res.data)
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
    <Box pt={['10px']}pb={['10px']}>
    <Text className={styles.heading_style}>Related</Text>
   {/* For large screen */}
    <Box
    display={['none','none','none','block']}
    marginTop={'50px'}
      position={'relative'}
      height={'170px'}
      // border={'1px solid black'}
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
      
     <Box width="90%" display={['none','none','none','block']} height={'100%'}  margin={'auto'}>
     <Slider   {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((item, index) => (
            <Box key={item.id} padding={'10px'}   h={'100%'} w={'90%'} >
              
                <Image src={item.img} width="100%"  height={'100%'} borderRadius="10px"  />
               

            </Box>
        ))}
      </Slider>
     </Box>
     
    </Box>
    {/* for tablet view */}
    <Box
    display={['none','none','block','none']}
    marginTop={'50px'}
      position={'relative'}
      height={'170px'}
      // border={'1px solid black'}
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
        onClick={() => slider2?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="grey"/>
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
        onClick={() => slider2?.slickNext()}>
          <IoIosArrowForward size={'40px'} color="grey"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider   {...settingsForTablet} ref={(slider2) => setSlider2(slider2)}>
        {cards.map((item, index) => (
            <Box key={item.id} padding={'10px'}   h={'100%'} w={'90%'} >
              
                <Image src={item.img} width="100%"  height={'100%'} borderRadius="10px"  />
               

            </Box>
        ))}
      </Slider>
     </Box>
     
    </Box>
    {/* for small tablet view */}
    <Box
    display={['none','block','none','none']}
    marginTop={'50px'}
      position={'relative'}
      height={'170px'}
      // border={'1px solid black'}
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
        onClick={() => slider3?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="grey"/>
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
        onClick={() => slider3?.slickNext()}>
          <IoIosArrowForward size={'40px'} color="grey"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider   {...settingsForsmallTablet} ref={(slider3) => setSlider3(slider3)}>
        {cards.map((item, index) => (
            <Box key={item.id} padding={'10px'}   h={'100%'} w={'90%'} >
              
                <Image src={item.img} width="100%"  height={'100%'} borderRadius="10px"  />
               

            </Box>
        ))}
      </Slider>
     </Box>
     
    </Box>
    {/* for mobile view */}
    <Box
    display={['block','none','none','none']}
    marginTop={'50px'}
      position={'relative'}
      height={'170px'}
      // border={'1px solid black'}
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
        onClick={() => slider4?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="grey"/>
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
        onClick={() => slider4?.slickNext()}>
          <IoIosArrowForward size={'40px'} color="grey"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider   {...settingsForMobile} ref={(slider4) => setSlider4(slider4)}>
        {cards.map((item) => (
            <Box key={item.id}>
                <Image className={styles.Related_Image} src={item.img}  />
            </Box>
        ))}
      </Slider>
     </Box>
     
    </Box>
    </Box>
  );
}