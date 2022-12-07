import React from 'react'
import { Text } from '@chakra-ui/react'


const TextComponent = ({ children, config }) => {
  // comprobacion de las props y utsar las que quieras con un ...styles
  if (config === undefined) config = {}
  if (config.fontSize === undefined) config.fontSize = '2xl'
  if (config.color === undefined) config.color = 'black'
  if (config.style === undefined) config.style = {}


  return (
    <Text fontSize={config.fontSize} color={config.color} style={config.style}>{children}</Text>
  )
}

export default TextComponent