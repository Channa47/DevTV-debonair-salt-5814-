import { Box, Text } from "@chakra-ui/react";
import styles from "./CopyrightSection.module.css";


export default function CopyrightSection(){
    return(
        <Box className={styles.Copyright_main_box} >
            <Box className={styles.Copyright_box1} >
                <Text className={styles.Information_content_box_Value} >Copyright © 2022 Apple Inc. All rights reserved.</Text>
                <Text className={styles.Information_content_box_Text} >Internet Service Terms | Apple TV & Privacy | Cookie Policy | Support</Text>
            </Box>

            <Box className={styles.Information_content_box_Text} >United States</Box>
        </Box>
    )
}