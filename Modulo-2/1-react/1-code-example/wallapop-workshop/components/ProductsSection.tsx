import { memo } from 'react';

import Div from '../components-ui/Div';
import H1 from '../components-ui/H1';
import H2 from '../components-ui/H2';
import P from '../components-ui/P';
import theme from '../src/theme';
import Image from './Image';

const ProductsSection = ({ section }) => {
  const { title, products } = section;

  const areas = ['half1', 'half2', 'third1', 'third2', 'third3'];

  return (
    <Div
      display="flex"
      dir="column"
      width="100%"
      backgroundColor={theme.sectionBackground2}
      align="center"
      padding="3rem 1rem"
      gap="2rem"
      textAlign="center"
    >
      <H1>{title}</H1>
      <Div
        display="grid"
        templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
        templateAreas={`
            "half1 half1 half1 half2 half2 half2"
            "third1 third1 third2 third2 third3 third3"
          `}
        maxWidth="60rem"
        gap="1rem"
        media="@media (max-width: 750px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          object-fit: contain;
          width: 100%;
        }"
      >
        {products.map((product, i) => {
          const { img, name, ads } = product;

          return (
            <Div
              key={name}
              area={areas[i]}
              objectFit="cover"
              justify="center"
              backgroundColor={theme.background}
              padding="0.5rem"
              borderRadius="0.5rem"
              display="flex"
              dir="column"
              gap="0.5rem"
              media="@media (max-width: 750px) {
                min-width: 12rem;
                max-width: 16rem;
              }"
            >
              <Div
                display="flex"
                justify="center"
                align="center"
                overflow="hidden"
                borderRadius="0.25rem"
              >
                <Image src={img} />
              </Div>
              <H2 color="primary" font="Gentleman-Bold">
                {name}
              </H2>
              <P>{`${ads} anuncios`}</P>
            </Div>
          );
        })}
      </Div>
    </Div>
  );
};

export default memo(ProductsSection);
