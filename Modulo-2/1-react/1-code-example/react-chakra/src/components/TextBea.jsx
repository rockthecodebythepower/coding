import React from 'react'
import styled from '@emotion/styled';


const PBea = styled.p`
  padding: 32px;
  background-color: hotpink;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const TextBea = ({ children }) => {
  return (
    <PBea>{children}</PBea>
  )
}

export default TextBea