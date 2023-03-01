import { useEffect, useState } from 'react'
import { CarouselUI } from '../ui/Carousel'
import technologyMock from '../api/technologyMock'
import routineMock from '../api/routineMock'
import { TitleH2 } from '../ui/Title'
import { ProductLink, ProductListWrapper } from '../ui/Product'

const ProductList = ({ title, type }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (type === 'technology') {
      setProducts(technologyMock)
    } else if (type === 'routine') {
      setProducts(routineMock)
    }
  }, [])

  return (
    <div>
      <TitleH2>{title}</TitleH2>
      <ProductListWrapper>
        <CarouselUI gap="16px">
          {products.map((product) => (
            <ProductLink
              key={product.title}
              src={product.src}
              href={product.href}
              ads={product.ads}
              title={product.title}
            />
          ))}
        </CarouselUI>
      </ProductListWrapper>
    </div>
  )
}

export default ProductList
