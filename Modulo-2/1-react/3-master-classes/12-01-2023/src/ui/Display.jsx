import styled from 'styled-components'

export const HomeUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  @media screen and (min-width: 758px) {
    gap: 60px;
  }
`
