import { spacing } from './utils';

export const BREAKPOINTS = {
  extraSmall: 320,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

const PALETTE_COLOR_LIGHT = {
  background: '#fff',

}

const PALETTE_COLOR_DARK = {
  background: '#551951',

}

export const themeLight = {
  palette: {
    background: {
      main: PALETTE_COLOR_LIGHT.background,
    },
    color: {
      main: PALETTE_COLOR_DARK.background,
    }
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  spacing
}

export const themeDark = {
  palette: {
    background: {
      main: PALETTE_COLOR_DARK.background,
    },
    color: {
      main: PALETTE_COLOR_LIGHT.background,
    }
  },
  mediaquery: {
    mobile: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`,
    desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
  },
  spacing
}