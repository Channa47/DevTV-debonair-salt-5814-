import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import styles from "./SeemoreModal.module.css";

export default function SeemoreModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box >
        <Text color="rgb(126, 126, 255)" cursor="pointer" onClick={onOpen}>see more</Text>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent backgroundColor={'rgb(52, 51, 51)'} color="white">
            <ModalHeader>Subtitles</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text className={styles.heading_style} >Languages</Text>
            <ul className={styles.SeemoreModal_ul}>
                            <li className={styles.SeemoreModal_list}>English <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>French (Canada) <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>French (France) <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>German <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Italian <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Japanese <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Portuguese (Brazil) <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Russian <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Spanish (Latin America) <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                            <li className={styles.SeemoreModal_list}>Spanish (Spain) <span className={styles.SeemoreModal_span}> (AD, Dolby&nbsp;Atmos, Dolby&nbsp;5.1, AAC)</span></li>
                    </ul>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }