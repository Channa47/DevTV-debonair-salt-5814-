import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
 
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={'blue.400'}
        color={'pink'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} >
            <Stack align={'flex-start'} >
              <ListHeader    >Product</ListHeader>
              <Link fontSize='18px' href={'#'}>Overview</Link>
              <Link fontSize='18px' href={'#'}>Features</Link>
              <Link fontSize='18px' href={'#'}>Tutorials</Link>
              <Link fontSize='18px' href={'#'}>Pricing</Link>
              <Link fontSize='18px' href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader  >Company</ListHeader>
              <Link fontSize='18px' href={'#'}>About Us</Link>
              <Link fontSize='18px' href={'#'}>Press</Link>
              <Link fontSize='18px' href={'#'}>Careers</Link>
              <Link fontSize='18px' href={'#'}>Contact Us</Link>
              <Link fontSize='18px' href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader  >Legal</ListHeader>
              <Link fontSize='18px' href={'#'}>Cookies Policy</Link>
              <Link fontSize='18px' href={'#'}>Privacy Policy</Link>
              <Link fontSize='18px' href={'#'}>Terms of Service</Link>
              <Link fontSize='18px' href={'#'}>Law Enforcement</Link>
              <Link fontSize='18px' href={'#'}>Status</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader  >Follow Us</ListHeader>
              <Link fontSize='18px' href={'#'}>Facebook</Link>
              <Link fontSize='18px' href={'#'}>Twitter</Link>
              <Link fontSize='18px' href={'#'}>Dribbble</Link>
              <Link fontSize='18px' href={'#'}>Instagram</Link>
              <Link fontSize='18px' href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        
      </Box>
    );
  }