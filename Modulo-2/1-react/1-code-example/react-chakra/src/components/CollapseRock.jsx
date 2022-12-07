import React from 'react'
import { Button, Collapse, Box, useDisclosure, Center } from '@chakra-ui/react'

const CollapseRock = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Center mt={10}>
        <Button onClick={onToggle}>Open Collapse</Button>
      </Center>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt={4}
          bg="red.600"
          rounded="md"
          shadow="md"
        >
          Collapse with animation - Framer Motion
        </Box>

      </Collapse>
    </>
  )
}

export default CollapseRock