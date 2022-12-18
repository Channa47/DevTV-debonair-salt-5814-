import { Box, Text } from "@chakra-ui/react";
import styles from "./Information.module.css";
import SeemoreModal from "./SeemoreModal";

export default function Information({genre,regionOfOrigin,releaseYear,rated,originalAudio}){

    return(
        <Box className={styles.Information_main_box} >

            {/* Information section */}
         <Box className={styles.Information_box} >
            <Text className={styles.heading_style} >Information</Text>
            <Box className={styles.Information_content_box} >
              <Text className={styles.Information_content_box_Text} >Genre</Text>
              <Text className={styles.Information_content_box_Value}>{genre}</Text>  
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Text} >Released</Text>
            <Text className={styles.Information_content_box_Value} >{releaseYear}</Text> 
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Text} >Rated</Text>
            <Text className={styles.Information_content_box_Value} >{rated}</Text> 
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Text} >Region of origin</Text>
            <Text className={styles.Information_content_box_Value} >{regionOfOrigin}</Text> 
            </Box>
         </Box>

         {/* Languages sction */}
         <Box className={styles.Information_box} >
            <Text className={styles.heading_style} >Languages</Text>
            <Box className={styles.Information_content_box} >
              <Text className={styles.Information_content_box_Text} >Original Audio</Text>
              <Text className={styles.Information_content_box_Value} >{originalAudio}</Text>  
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Text} >Audio</Text>
            <Text className={styles.Information_content_box_Value} >English (AD,Dolby 5.1, Dolby Atmos, AAC), and 9 more...</Text> 
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Text} >Subtitles</Text>
            <Text className={styles.Information_content_box_Value} >English (CC, SDH), and 40 more...<SeemoreModal/></Text> 
            </Box>
         </Box>

         {/* Accessebility section */}
         <Box className={styles.Information_box} >
            <Text className={styles.heading_style} >Accessibility</Text>
            <Box className={styles.Information_content_box} >
              <Text  className={styles.Information_content_box_Value}>CC</Text>
              <Text  className={styles.Information_content_box_Value} >
                Closed captions (CC) refer to subtitles in the available language with the addition of relevant non-dialogue information.
              </Text>  
            </Box>
            <Box className={styles.Information_content_box} >
            <Text className={styles.Information_content_box_Value} >AD</Text>
            <Text className={styles.Information_content_box_Value} >
            Audio descriptions (AD) refer to a narration track describing what is happening on screen, to provide context for those who are blind or have low vision.
            </Text> 
            </Box>
         </Box>

        </Box>
    )
}