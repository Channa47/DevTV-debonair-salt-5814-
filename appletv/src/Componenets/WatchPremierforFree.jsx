import React, { useEffect, useState } from 'react';
import { Box, IconButton, Spinner, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import axios from 'axios';

// Settings for the slider
const settings = {
  
  arrows: false,
 
  infinite: true,
  autoplay: false,
  speed: 50,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 5,
};

export default function WatchPremierForFree() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState();
  const [cards,setCards]=useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  ;
  const getData=()=>{
    setLoading(true)
    try {
      axios.get("https://movies-appletv.onrender.com/movies").then((res)=>{
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
  console.log(cards)
  if(loading){
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  }

  return (
    <Box
    marginTop={'50px'}
      position={'relative'}
      height={'250px'}
      border={'1px solid black'}
      margin={'auto'}
      overflow={'hidden'}>
        <Text fontSize={'20px'} fontWeight="500" w={'90%'} marginLeft='5%' textAlign='left'>Watch Premieres for Free</Text>
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
          <IoIosArrowBack size={'40px'} color="black"/>
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
          <IoIosArrowForward size={'40px'} color="black"/>
        {/* <BiRightArrowAlt /> */}
      </IconButton>
      {/* Slider */}
     <Box width="90%" margin={'auto'}>
     <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((item, index) => (
            <Box key={item.id}   marginLeft={'0px'} h={'250px'} w={'90%'} >
              {/* <iframe  src={`https://www.youtube.com/embed/${item.emdeddata}`} borderRadius='10px'
               width="100%" height={'100%'}></iframe> */}
               <iframe  width="100%" height={'100%'} src={`https://www.youtube.com/embed/${item.emdeddata}`} border="5px solid black" borderRadius='10px' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </Box>
        ))}
      </Slider>
     </Box>
    </Box>
  );
}