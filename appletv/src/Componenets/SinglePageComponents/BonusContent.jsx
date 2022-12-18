import { Box, Text } from "@chakra-ui/react";
import styles from "./Trailers.module.css";

export default function BonusContent({movieCode}){
    const param = 7;
    return(
        <Box>
            <Text className={styles.heading_style}>Bonus Content</Text>
            <Box className={styles.iframe_div} >
            <iframe className={styles.iframe}
            src={`https://www.youtube.com/embed/${movieCode}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>  
            </iframe>
            
        </Box>
        </Box>
    )

}