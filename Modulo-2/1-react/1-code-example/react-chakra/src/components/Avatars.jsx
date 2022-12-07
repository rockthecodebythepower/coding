import React from 'react'

import { Wrap, WrapItem, Avatar, Center, Heading } from '@chakra-ui/react'

const Avatars = () => {
  return (
    <Center mt={10}>
      <Heading size="md" mb={4} px={10} pt={3}>
        ¿How to generate Avatars?
      </Heading>
      <Wrap>
        <WrapItem>
          <Avatar name='Iron Man' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv7bL0uY1-zX_zbADPYgrxaEL7tkJkraWcw&usqp=CAU' />
        </WrapItem>
        <WrapItem>
          <Avatar name='SpiderMan' src='https://sm.ign.com/t/ign_es/screenshot/default/spiderman_16eh.h720.jpg' />
        </WrapItem>
      </Wrap>
    </Center>
  )
}

export default Avatars