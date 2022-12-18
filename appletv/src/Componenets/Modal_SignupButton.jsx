import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { SignupPage } from "../Pages/Signup"

export default function SignupButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue">Sign up</Button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}  size={['md','xl','xl',"2xl"]} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <SignupPage  />
              
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }