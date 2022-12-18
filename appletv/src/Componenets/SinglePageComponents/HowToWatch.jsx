import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./HowToWatch.module.css"
export default function HowToWatch(){
    return(
        <Box className={styles.HowToWatch_main_box} >
            <Text className={styles.heading_style}>How to Watch</Text>
        <Box>
        <Box className={styles.HowToWatch_logo_box}>
            <Image className={styles.HowToWatch_appleTvLogo} alt="appleTvLogo" src="https://is1-ssl.mzstatic.com/image/thumb/DB8YqlVtN7M8YvGvgsP2eg/400x225.png"/>
            <Text className={styles.HowToWatch_FreeTrail} >Start Free Trial</Text>
        </Box>
        <Text className={styles.HowToWatch_Freedays} >7 days free, then $6.99/month.</Text>
        </Box>
          </Box>
    )
}