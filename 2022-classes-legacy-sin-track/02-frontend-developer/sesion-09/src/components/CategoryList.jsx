import { useEffect, useState } from 'react'
import { CategoryLink } from '../ui/Category'
import categoryMocks from '../api/categoryMocks'
import { TitleH2 } from '../ui/Title'
import { CarouselUI } from '../ui/Carousel'

const CategoryList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoryMocks)
  }, [])

  return (
    <div>
      <TitleH2>Descubre nuestras categorías</TitleH2>
      <CarouselUI>
        {categories.map((category) => (
          <CategoryLink
            key={category.title}
            href={category.href}
            src={category.src}
            title={category.title}
          />
        ))}
      </CarouselUI>
    </div>
  )
}

export default CategoryList
