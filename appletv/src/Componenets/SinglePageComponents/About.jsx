import { Box, Image, Text } from "@chakra-ui/react";
import styles from "./About.module.css";
export default function About({movieName,genre}){
    return(
        <Box>
            <Text className={styles.heading_style}>About</Text>
            <Box className={styles.About_main_box} >
            <Box className={styles.About_box}>
            <Text className={styles.heading_style}>{movieName}</Text>
            <Text fontSize="10px">{genre}</Text>
            <Text className={styles.About_desc} >2022 winner of 2 Emmy® Awards. Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. They begin a journey to discover the truth about their jobs</Text> 
            </Box>

            <Box className={styles.About_box} >
                <Box className={styles.About_AgeRestriction_box} >
                <Image className={styles.PosterDetails_tickmark_img} alt="tickmark" src="https://tv.apple.com/assets/badges/common-sense-onDark-small@2x-f3312938f6b7188fbf37701e3557e399.png"/>
                <Text className={styles.heading_style}>15+</Text>
                </Box>
                <Text fontSize="10px">Common Sense</Text>
                <Text className={styles.About_desc}>Dystopian tale of extreme work-life balance is scary smart.</Text>
            </Box>
            </Box>
        </Box>
    )
}