import styled from 'styled-components'

export const CarouselUI = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  gap: ${(props) => props.gap || 0};
`
