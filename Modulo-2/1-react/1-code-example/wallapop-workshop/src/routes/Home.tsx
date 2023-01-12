import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import Image from '../../components/Image';
import ProductsSection from '../../components/ProductsSection';
import Div from '../../components-ui/Div';
import H1 from '../../components-ui/H1';
import H2 from '../../components-ui/H2';
import P from '../../components-ui/P';
import data from '../data';
import theme from '../theme';

const Home = () => {
  return (
    <>
      <Div textAlign="center" padding="0 1rem">
        <P>Wallapop, la plataforma líder de compraventa de productos de segunda mano</P>
      </Div>
      <Div
        display="flex"
        dir="column"
        maxWidth="100%"
        padding="2rem 0"
        gap="2rem"
        textAlign="center"
      >
        <H1>¿Qué estás buscando hoy?</H1>
        <Carousel cards={data.categories} cardWidth="10rem" />
      </Div>
      <Div
        display="flex"
        backgroundColor={theme.sectionBackground}
        justify="center"
        gap="1rem"
        padding="2rem 1rem"
        width="100%"
      >
        <Div display="flex" dir="column" justify="center" gap="2rem">
          <H1 color="white">A quien madruga Wallapop PRO le ayuda</H1>
          <H2 color="white">
            ¿Tienes un negocio y quieres empezar a vender online? Descubre nuestras
            soluciones para impulsar tus ventas. ¡Al lío!
          </H2>
          <Button variant="highlight">Más información</Button>
        </Div>
        <Div
          media="@media (max-width: 1000px) {
           display: none;
          }"
        >
          <Image
            width="max-content"
            src="https://es.wallapop.com/images/home/pro/pro-banner.svg"
            alt=""
          />
        </Div>
      </Div>
      {data.sections.map((section, i) => (
        <ProductsSection section={section} key={i} />
      ))}
    </>
  );
};

export default Home;
