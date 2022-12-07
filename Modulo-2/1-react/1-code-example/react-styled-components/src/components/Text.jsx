import React from 'react'
import styled from 'styled-components'

const TextStyled = styled.p`
 background-color:${props => props.background === 'coral' ? 'coral' : 'skyblue'};
 color: red;
 font-size: 10px;
 border: 0;
`

const TextComponent = ({ children, background }) => {
  return (
    <TextStyled background={background}>{children}</TextStyled>
  )
}

export default TextComponent