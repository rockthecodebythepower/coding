import React from 'react'
import styled, { css } from 'styled-components'

import { mobile } from '../styles/medias'

const TitleStyled = styled.h1`
  color: black;
  font-size: 20px;
  ${({ primary }) =>
    primary && css`
        background-color: indianred;
        border: 1px solid blue;
        font: 20px
      `
  } &:hover {
    background-color: yellowgreen;
  }
  ${mobile} {
    font-size: 10px
  }

`

const Title = ({ children, primary }) => {
  return (
    <TitleStyled primary={primary}>{children}</TitleStyled>
  )
}

export default Title