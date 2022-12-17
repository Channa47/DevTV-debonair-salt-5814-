import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

export default function SeemoreModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Text color="blue" cursor="pointer" onClick={onOpen}>see more</Text>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Subtitles</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae odio sit ipsum non numquam, quisquam aspernatur ducimus quo iure.
                 Soluta perspiciatis cupiditate necessitatibus voluptates ipsa corrupti aut atque iste voluptate.
                 </Text>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }