
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Image, Link, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import axios from 'axios';
import styles from "./CrewAndCast.module.css";

// Settings for the slider
const settings = {
  
  arrows:false,
 
  infinite: false,
  autoplay: false,
  speed: 5,
  slidesToShow: 8,
  slidesToScroll: 8,
};
const settingsForsmallTablet = {
  
  arrows:false,
 
  infinite: false,
  autoplay: false,
  speed: 5,
  slidesToShow: 4,
  slidesToScroll: 4,
};
const settingsForMobile = {
  
  arrows:false,
 
  infinite: false,
  autoplay: false,
  speed: 5,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const settingsForTablet = {
  
  arrows:false,
 
  infinite: false,
  autoplay: false,
  speed: 5,
  slidesToShow: 6,
  slidesToScroll: 6,
};

export default function CrewAndCast() {
    const param = 30;
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();
  const [slider2,setSlider2]=React.useState()
  const [slider3,setSlider3]=React.useState()
  const [slider4,setSlider4]=React.useState()


  const [cast,setCast]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '10px', md: '10px' });

  ;
  const getData=()=>{
    setLoading(true)
    try {
      axios.get(`https://movies-appletv.onrender.com/movies/${param}`).then((res)=>{
      setCast(res.data.cast)
      setLoading(false)
    })
      
    } catch (error) {
      setError(true)
    }
  }

  const ShowCrewDetails=(name)=>{
  window.open(`https://en.wikipedia.org/wiki/${name}`)
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
    <Text fontSize={['16px','18px','20px','20px']} fontWeight="500" w={'90%'} marginLeft='5%' textAlign='left'>Cast & Crew</Text>
    {/* For large screen */}
    <Box
      display={['none','none','none','block']}
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
          <IoIosArrowBack size={'40px'} color="pink"/>
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
          <IoIosArrowForward size={'40px'} color="pink"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        {cast.map((item,index) => (
           
            <Box key={item.id} onClick={()=>ShowCrewDetails(item.name)} className={styles.CrewAndCast_div} > 
              <Box> {item.img.includes("apple")? <Image className={styles.CrewAndCast_Image}  src="https://is3-ssl.mzstatic.com/image/thumb/UAJxYURG7lNf9Et6x4yCBg/550x550bb.webp" />:
               <Image className={styles.CrewAndCast_Image} src={item.img}  />}
              </Box>  
                <Box><Text  cursor= 'pointer' >{item.name}</Text></Box>
            </Box>
            
        ))}
      </Slider>
     </Box>
     
    </Box>

     {/* For Tablet view */}
     <Box
      display={['none','none','block','none']}
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
        onClick={() => slider2?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="pink"/>
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
          <IoIosArrowForward size={'40px'} color="pink"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider  {...settingsForTablet} ref={(slider2) => setSlider2(slider2)}>
        {cast.map((item,index) => (
           
            <Box key={item.id} onClick={()=>ShowCrewDetails(item.name)} className={styles.CrewAndCast_div} > 
              <Box> {item.img.includes("apple")? <Image className={styles.CrewAndCast_Image}  src="https://is3-ssl.mzstatic.com/image/thumb/UAJxYURG7lNf9Et6x4yCBg/550x550bb.webp" />:
               <Image className={styles.CrewAndCast_Image} src={item.img}  />}
              </Box>  
                <Box><Text  cursor= 'pointer' >{item.name}</Text></Box>
            </Box>
            
        ))}
      </Slider>
     </Box>
     
    </Box>


 {/* For Small Tablet screen */}
 <Box
 display={['none','block','none','none']}
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
        onClick={() => slider3?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="pink"/>
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
          <IoIosArrowForward size={'40px'} color="pink"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider  {...settingsForsmallTablet} ref={(slider3) => setSlider3(slider3)}>
        {cast.map((item,index) => (
           
            <Box key={item.id} onClick={()=>ShowCrewDetails(item.name)} className={styles.CrewAndCast_div} > 
              <Box> {item.img.includes("apple")? <Image className={styles.CrewAndCast_Image}  src="https://is3-ssl.mzstatic.com/image/thumb/UAJxYURG7lNf9Et6x4yCBg/550x550bb.webp" />:
               <Image className={styles.CrewAndCast_Image} src={item.img}  />}
              </Box>  
                <Box><Text  cursor= 'pointer' >{item.name}</Text></Box>
            </Box>
            
        ))}
      </Slider>
     </Box>
     
    </Box>

     {/* For Mobile screen */}
     <Box
     display={['block','none','none','none']}
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
        onClick={() => slider4?.slickPrev()}>
          <IoIosArrowBack size={'40px'} color="pink"/>
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
          <IoIosArrowForward size={'40px'} color="pink"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
      
     <Box width="90%" height={'100%'}  margin={'auto'}>
     <Slider  {...settingsForMobile} ref={(slider4) => setSlider4(slider4)}>
        {cast.map((item,index) => (
           
            <Box key={item.id} onClick={()=>ShowCrewDetails(item.name)} className={styles.CrewAndCast_div} > 
              <Box> {item.img.includes("apple")? <Image className={styles.CrewAndCast_Image}  src="https://is3-ssl.mzstatic.com/image/thumb/UAJxYURG7lNf9Et6x4yCBg/550x550bb.webp" />:
               <Image className={styles.CrewAndCast_Image} src={item.img}  />}
              </Box>  
                <Box><Text  cursor= 'pointer' >{item.name}</Text></Box>
            </Box>
            
        ))}
      </Slider>
     </Box>
     
    </Box>

    </Box>
  );
}