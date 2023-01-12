import styled from 'styled-components'
import { TitleH3 } from './Title'

export const ProductLinkWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 197px;
  height: 256px;
  background-color: #eceff1;
  border-radius: 24px;
`

export const ProductAds = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #607d8b;
`

export const ProductLink = ({ src, href, title, ads }) => {
  return (
    <ProductLinkWrapper href={href}>
      <ProductImage src={src} alt={title} />
      <TitleH3>{title}</TitleH3>
      <ProductAds>{ads} anuncios</ProductAds>
    </ProductLinkWrapper>
  )
}

export const ProductListWrapper = styled.div`
  margin-top: 20px;
`
