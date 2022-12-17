import { Box, Text } from "@chakra-ui/react";
import styles from "./Trailers.module.css";

export default function Trailers({movieCode}){
    return(
        <Box>
            <Text className={styles.heading_style}>Trailer</Text>
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