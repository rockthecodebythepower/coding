import styled from "@emotion/styled";


const UiTitle = styled.h1`
  font-weight: bold;
  @media(min-width: 600px) {
    color: ${({ theme }) => theme.palette.alternative}
  }
`

export default UiTitle;