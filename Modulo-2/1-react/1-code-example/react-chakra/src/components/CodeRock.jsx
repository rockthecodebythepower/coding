import React from 'react'
import { Stack, Code } from '@chakra-ui/react'

const CodeRock = () => {
  return (
    <Stack direction="row" my={5} px={10}>
      <Code colorScheme="yellow" children="console.log('Welcome to Chakra')" />
    </Stack>
  )
}

export default CodeRock