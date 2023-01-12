import Image from '../components/Image';
import A from '../components-ui/A';
import P from '../components-ui/A';
import Div from '../components-ui/Div';
import H3 from '../components-ui/H3';
import StyledFooter from '../components-ui/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter maxWidth="70rem" alignSelf="center">
      <Div display="flex" wrap="wrap" gap="1rem" justify="space-between">
        <Div display="flex" dir="column" width="min-content">
          <Image
            src="https://es.wallapop.com/images/logos/logo-wallapop-home-v2.svg"
            alt="Wallapop navigation bar logo"
            height="2rem"
          />
          <P>Copyright © 2022 Wallapop © de sus respectivos propietarios</P>
        </Div>
        <Div display="flex" dir="column" gap="1rem">
          <H3>Wallapop</H3>
          <A>Quiénes somos</A>
          <A>Cómo funciona</A>
          <A>Brand Book</A>
          <A>Prensa</A>
          <A href="https://www.linkedin.com/" target="_black">
            Empleo
          </A>
        </Div>
        <Div display="flex" dir="column" gap="1rem">
          <H3>Soporte</H3>
          <A>Preguntas frecuentes</A>
          <A>Reglas de publicación</A>
          <A>Consejos de seguridad</A>
        </Div>
        <Div display="flex" dir="column" gap="1rem">
          <H3>Soporte</H3>
          <A>Condiciones de uso</A>
          <A>Política de privacidad</A>
          <A>Cookies</A>
        </Div>
        <Div display="flex" dir="column" gap="1rem">
          <H3>Motor</H3>
          <A>Particulares</A>
          <A>Profesionales</A>
        </Div>
        <Div display="flex" dir="column" gap="1rem">
          <H3>Wallapop PRO</H3>
          <A>Impulsa tu negocio</A>
        </Div>
      </Div>
      <Div display="flex" wrap="wrap" justify="space-between" gap="4rem">
        <Div display="flex" wrap="wrap" gap="2rem" alignSelf="center">
          <Div display="flex" gap="1rem" align="center">
            <Image
              src="https://es.wallapop.com/images/icons/ic-ios.svg"
              alt="apple icon"
              height="2rem"
            />
            <A>Apple Store</A>
          </Div>
          <Div display="flex" gap="1rem" align="center">
            <Image
              src="https://es.wallapop.com/images/icons/ic-huawei.svg"
              alt="AppGallery"
              height="2rem"
            />
            <A>Apple Store</A>
          </Div>
          <Div display="flex" gap="1rem" align="center">
            <Image
              src="https://es.wallapop.com/images/icons/ic-android.svg"
              alt="Google Play"
              height="2rem"
            />
            <A>Apple Store</A>
          </Div>
        </Div>
        <Div display="flex" gap="2rem" alignSelf="center">
          <A>
            <Image
              src="https://es.wallapop.com/images/icons/ic_facebook_normal.svg"
              alt="Google Play"
              height="2rem"
            />
          </A>
          <A>
            <Image
              src="https://es.wallapop.com/images/icons/ic_twitter_normal.svg"
              alt="Google Play"
              height="2rem"
            />
          </A>
          <A>
            <Image
              src="https://es.wallapop.com/images/icons/ic_ig.svg"
              alt="Google Play"
              height="2rem"
            />
          </A>
        </Div>
      </Div>
    </StyledFooter>
  );
};

export default Footer;
