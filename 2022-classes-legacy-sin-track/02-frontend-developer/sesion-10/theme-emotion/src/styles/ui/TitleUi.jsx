import styled from '@emotion/styled'

const TitleUi = styled.h1`
  color: ${({ theme }) => theme.palette.text.medium};
  @media (min-width: 600px) {
    color: ${({ theme }) => theme.palette.text.high};
  }
  @media (min-width: 900px) {
    color: ${({ theme }) => theme.palette.text.low};
  }
`

export default TitleUi