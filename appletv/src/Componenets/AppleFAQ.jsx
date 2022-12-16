import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

export const AppleFAQ = () => {
  return (
    <Box 
    // border={"1px solid black"} 
    w={"100%"} marginTop={['20px']}>
        <Text fontSize={['25px','30px','40px','50px']} fontWeight={['500']} mt={['30px']}mb={['20px']}>Question?Answer.</Text>
      <Box 
    //   border={"1px solid blue"} 
      w={['100%','94%','86%',"80%"]} ml={['0','3%','7%',"10%"]}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"  fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                  What is  DevTv+?
                </Box>
                <AccordionIcon boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              DevTv+ is a streaming service from Dev . It features exclusive Dev Original shows and movies from some of the
                industry's top talent, with new premieres arriving each month. Browse all of the available content on Apple TV+ inside the
                Dev TV app on the "Dev TV+" tab.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                  What does DevTv+ include ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              Apple TV+ includes Apple Original films and series which are original shows and movies made exclusively for Apple. It
            also includes free access for anyone to watch Friday Night Baseball, provided through Apple TV+ in partnership with MLB
            (Major League Baseball). New shows and movies are being added to the streaming service frequently, so browse inside the
            Apple TV app or visit tv.apple.com often to see new releases.
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                  Where can I watch  DevTv+ ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
                DevTv+ is an exclusive streaming subscription available in the Apple TV app. You can find the Apple TV app on many of
                your favourite Apple devices. Plus, find the app on many smart TVs, streaming devices, game consoles and some select
                cable boxes.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                  Can I watch DevTv+ on my phone ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              DevTv+ is a streaming service that lives inside the DevTv+ app an app that brings DevTv+ together with other
                streaming service subscriptions that you add. You can find the DevTv+ app on iPhone, iPad, DevTv+ 4K or HD, plus on
                many streaming devices and smart TVs like Roku, Samsung, LG, Panasonic and more.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                  How to watch DevTv+ on Android or Windows ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              The easiest way to watch DevTv+ on an Android phone or Windows device is to visit tv.DevTv+.com. There, you can still
                sign in with an DevTv+ ID, add DevTv+ Original shows and movies to your Up Next watchlist and keep track of what you are
                watching.
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                 What movies are on DevTv+ ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              There are many movies to choose from on Apple TV+ and new Apple Original films are being added frequently. The best
                way to see what movies are on Apple TV+ is to browse the Apple TV+ tab inside the Apple TV app or here on tv.apple.com.
                You will find many award-winning films to choose from, like Academy Award-winner for Best Picture CODA or the critically-
                acclaimed The Tragedy of Macbeth. Or choose from hits like Greyhound, Swan Song, Wolfwalkers and more.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                 What can I watch on DevTv+ ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              More Apple Original series are being added to the TV app frequently, so check back often to discover new TV shows on
                Apple TV+. Start by browsing in the Apple TV+ tab on the Apple TV app or here on tv.apple.com. You will find hits like the
                Emmy-winning Ted Lasso, critically-acclaimed The Morning Show and sci-fi epic Foundation, plus new and popular shows
                like Severance, Slow Horses and WeCrashed.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                    How do I get DevTv+ ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              You can subscribe to Apple TV+ inside the Apple TV app on your mobile or living room device or on tv.apple.com. Your
            subscription to Apple TV+ will use the payment method associated with your Apple ID, which is your one sign-in for all
            things Apple. With one Apple account, it's easy to manage your subscription in Settings on any device or on tv.apple.com.
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                    Can I get DevTv+ for free ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              There are a few ways to try Apple TV+ for free. First, try 7 days of Apple TV+ for free by starting a trial in the Apple TV app
                on your iPhone, iPad, Apple TV 4K or HD, or on any streaming device. If you have recently purchased Apple hardware that
                includes a 12-month, 6-month, 3-month or other complimentary free trial of Apple TV+, this offer will automatically appear
                in the Apple TV app when signed in with the Apple ID associated with your recent hardware purchase.
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <Text>
              <AccordionButton >
                <Box as="span"   fontSize={['18px','20px','25px','25px']} color={['blackAlpha.800']} flex="1" textAlign="left">
                    How do I cancel DevTv+ ?
                </Box>
                <AccordionIcon  boxSize='35px'/>
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              <Box width={'80%'} fontSize={['18px']} textAlign={['left']}>
              The easiest way to cancel an Apple TV+ subscription is to go to Settings on an Apple device like an iPhone. Open the app,
                choose your name, then select Subscriptions and choose Apple TV+. You can also manage your Apple TV+ subscription at
                tv.apple.com. Sign in and choose the account icon in the top right corner.
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
