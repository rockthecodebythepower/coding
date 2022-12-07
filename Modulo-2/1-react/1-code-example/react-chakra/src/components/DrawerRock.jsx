import React from 'react'

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  Box,
  Input,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  Select,
  Center,
  useDisclosure,
  DrawerCloseButton
} from '@chakra-ui/react'

const DrawerRock = ({ action }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef()


  return (
    <>
      <Center>
        <Button colorScheme="red" onClick={onOpen} mb={10}>Drawer - Form</Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="2px">
              {
                action === 'register' ? 'Register' : 'Login'
              }
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="25px">
                <Box>
                  <FormLabel htmlFor='username'>Name:</FormLabel>
                  <Input
                    ref={firstField}
                    placeholder="Please enter your username"
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='hero'>Select your Hero:</FormLabel>
                  <Select id="hero" defaultValue="SpiderMan">
                    <option value="SpiderMan">Peter Parker</option>
                    <option value="IronMan">Tony Stark</option>
                  </Select>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Center>
    </>
  )
}

export default DrawerRock