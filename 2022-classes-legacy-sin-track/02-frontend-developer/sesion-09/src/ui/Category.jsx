import styled from 'styled-components'

export const CategoryLinkWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 8px;
  width: 30vw;
  min-width: 30vw;
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 758px) {
    width: 138px;
    min-width: unset;
  }
`

export const CategoryLogo = styled.img`
  width: 48px;
  height: 48px;
`

export const CategoryText = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #253238;
  font-weight: 300;
`

export const CategoryLink = ({ src, href, title }) => {
  return (
    <CategoryLinkWrapper href={href}>
      <CategoryLogo src={src} alt={title} />
      <CategoryText>{title}</CategoryText>
    </CategoryLinkWrapper>
  )
}
