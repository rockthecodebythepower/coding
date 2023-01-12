import { useEffect, useState } from 'react';

import Image from '../components/Image';
import Div from '../components-ui/Div';
import P from '../components-ui/P';

const Carousel = (props) => {
  const { cards, cardWidth } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(cards.length);

  useEffect(() => {
    setLength(cards.length);
  }, [cards.length]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Div display="flex" maxWidth="70rem" position="relative" cursor="pointer">
      {/* Previous Arrow */}
      <Div
        display="flex"
        onClick={prev}
        justify="center"
        align="center"
        zIndex="2"
        Div="1 0 4rem"
      >
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.2 23.4a.998.998 0 0 0 0 1.2l3 4a.999.999 0 1 0 1.6-1.199L23.25 24l2.55-3.402a.997.997 0 0 0-.2-1.399 1 1 0 0 0-1.4.2l-3 4z"></path>
        </svg>
      </Div>
      {/* Carousel slides */}
      <Div overflow="hidden">
        <Div
          display="flex"
          gap="1rem"
          transform={`translateX(-${currentIndex * 90}%)`}
          transition="all 500ms ease-in-out"
          align="start"
          padding="1rem"
          height="100%"
        >
          {cards.map((card) => {
            const { img, hover, title } = card;

            const [src, setSrc] = useState(img);

            return (
              <Div
                display="flex"
                key={title}
                width={cardWidth}
                dir="column"
                flex="1 0 auto"
                justify="start"
                align="center"
                textAlign="center"
                onMouseOver={() => setSrc(hover)}
                onMouseOut={() => setSrc(img)}
                hover="carousel"
                transition="all 250ms ease-in-out"
                padding="1rem"
                borderRadius="1rem"
                height="100%"
              >
                <Image src={src} width="50%" />
                <P>{title}</P>
              </Div>
            );
          })}
        </Div>
      </Div>
      {/* Next Arrow */}
      <Div
        display="flex"
        onClick={() => {
          console.log('next');
          next();
        }}
        justify="center"
        align="center"
        zIndex="2"
        Div="1 0 4rem"
      >
        <svg
          width="48"
          height="48"
          viewBox="12 12 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M26.8 24.6a.998.998 0 0 0 0-1.2l-3-4a.999.999 0 1 0-1.6 1.199l2.55 3.4-2.55 3.402a.997.997 0 0 0 .2 1.399 1 1 0 0 0 1.4-.2l3-4z"></path>
        </svg>
      </Div>
    </Div>
  );
};

export default Carousel;
