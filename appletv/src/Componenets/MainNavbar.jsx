import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    VStack,
    Heading,
    Text,
    Image,
    color,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from "@chakra-ui/react";


  import { useNavigate } from "react-router-dom";
  import { CloseIcon, HamburgerIcon,AtSignIcon,CircleIcon,CheckIcon } from "@chakra-ui/icons";
  
  import {Link} from "react-router-dom"
  import { SignupPage } from "../Pages/Signup";



  function MainNavbar() {
    const handChange = (e) =>{
        localStorage.setItem("search",JSON.stringify(e.target.value))
    }
    let admintoken = JSON.parse(localStorage.getItem("admintoken")) || null
    let usertoken = JSON.parse(localStorage.getItem("token")) || null
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    return (
      <>
        <Box
          backgroundColor={"black"}
          px={{ base: "3", md: "8" }}
          position="sticky"
          top="0"
          w={{base:"100%",sm:"100%",md:"100%"}}
          m="auto"
          p={{sm:"auto",md:"0px 0px 0px 0px"}}
          zIndex={4}
        >
          <Flex
            h={{ base: 70, sm: 70, md: 16 }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <IconButton
              size={"md"}
              icon={
                isOpen ? (
                  <CloseIcon color={"black"} />
                ) : (
                  <HamburgerIcon color={"black"} />
                )
              }
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Heading letterSpacing={3} fontFamily={"Inspiration"}>
                <Link to={"/"} key={"home"}>
                  <Image ml={"10px"} w="12%" src="https://i.ibb.co/kK7QWvT/Dev-Apple-Logo.jpg" alt="logo" />
                </Link>
              </Heading>
            </HStack>
            <Flex>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                fontWeight="500"
                fontSize="16px"
                mr={10}
              >  
                {admintoken && 
                <Button onClick={()=>navigate("/manageitems")} border={"none"} _hover={{background:"blue"}} mr={"20px"} background={"blue"} color="white">Admin Page</Button>}
                <Link to="/searchboxpage"><input onChange={(e)=>handChange(e)} style={{border:"2px solid white" , backgroundColor:"black", color:"white"}} placeholder="&#128270; Search"  type="text" /></Link>
                <Button onClick={()=>navigate("/login")} border={"none"} _hover={{background:"blue"}} mr={"20px"} background={"blue"} color="white">{usertoken?
                <>
                {/* <CheckIcon  color='green.500' />{usertoken} */}
                <Popover closeOnBlur={true}>
                  <PopoverTrigger>
                  <button>{usertoken}</button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader color={"green"}>Your Currently logged in</PopoverHeader>
                    <PopoverBody>
                      <button onClick={()=>{localStorage.setItem("token",JSON.stringify(null));navigate("/")}} style={{backgroundColor:"red" ,borderRadius:"5px",width:"80%"}}>LogOut</button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                </>
                :"Sign up"
                }
                </Button>
                {/* <Popover>
                  <PopoverTrigger>
                  <Button border={"none"} _hover={{background:"blue"}} mr={"20px"} background={"blue"} color="white">Sign Up</Button>
                  </PopoverTrigger>
                  <PopoverContent m={"100%"} justifyContent="center">
                  <PopoverBody> <SignupPage/>    </PopoverBody>
                  </PopoverContent>
                  </Popover> */}
              </HStack>
            </Flex>
          </Flex>
          {isOpen ? (
            <VStack
              justifyContent={"center"}
              flexDirection="row"
              textAlign="center"
              alignItems="center"
              h="100vh"
              display={{ md: "none" }}
              fontWeight="500"
              fontSize="16px"
            >
              <VStack spacing={14} mt="20">
              {admintoken && 
                <Button onClick={()=>navigate("/manageitems")} border={"none"} _hover={{background:"blue"}} mr={"20px"} background={"blue"} color="white">Admin Page</Button>}
                <Link to="/home"><input onChange={(e)=>handChange(e)} style={{border:"2px solid white" , backgroundColor:"black", color:"white"}} placeholder="&#128270; Search"  type="text" /></Link>
                {/* <Link to="/login"><Button border={"none"} _hover={{background:"blue"}} background={"blue"} color="white">Sign Up</Button></Link> */}
                <Button onClick={()=>navigate("/login")} border={"none"} _hover={{background:"blue"}} mr={"20px"} background={"blue"} color="white">{usertoken?
                <>
                {/* <CheckIcon  color='green.500' />{usertoken} */}
                <Popover closeOnBlur={true}>
                  <PopoverTrigger>
                  <button>{usertoken}</button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader color={"green"}>Your Currently logged in</PopoverHeader>
                    <PopoverBody>
                      <button onClick={()=>{localStorage.setItem("token",JSON.stringify(null));navigate("/")}} style={{backgroundColor:"red" ,borderRadius:"5px",width:"80%"}}>LogOut</button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                </>
                :"Sign up"
                }
                </Button>
              </VStack>
            </VStack>
          ) : null}
        </Box>
      </>
    );
  }
  
  export default MainNavbar;