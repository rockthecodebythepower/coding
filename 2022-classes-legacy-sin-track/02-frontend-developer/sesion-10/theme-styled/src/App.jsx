import styled from 'styled-components'
const App = () => {
  return (
    <StyledDiv>
      <StyledTitle>Vite + React + Styled-Components</StyledTitle>
    </StyledDiv>
  )
}

export default App

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background.dark};
`

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondary.light};
  font-family: ${(props) => props.theme.fontFamily.heading};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: ${(props) => props.theme.letterSpacing.wide};
  text-align: center;
  @media (min-width: 600px) {
    font-size: ${(props) => props.theme.fontSize['4xl']};
  }

  @media (min-width: 900px) {
    font-size: ${(props) => props.theme.fontSize['6xl']};
  }
`
