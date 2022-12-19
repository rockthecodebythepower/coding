import { spacing } from './utils'

export const breakPoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992
}

const lightPalette = {
  background: '#fff',
  color: '#551951'
}

const darkPalette = {
  background: '#551951',
  color: '#fff'
}

export const themeLight = {
  palette: {
    background: lightPalette.background,
    color: lightPalette.color,
    alternative: "red"
  },
  mediaquery: {
    mobile: `@media (max-widht: ${breakPoints.tablet}px)`,
    tablet: `@media (min-widht: ${breakPoints.tablet}px) and (max-widht: ${breakPoints.desktop}px)`,
    desktop: `@media (min-widht: ${breakPoints.desktop}px)`,
  },
  spacing
}


export const themeDark = {
  palette: {
    background: darkPalette.background,
    color: darkPalette.color,
    alternative: "red"
  },
  mediaquery: {
    mobile: `@media (max-widht: ${breakPoints.tablet}px)`,
    tablet: `@media (min-widht: ${breakPoints.tablet}px) and (max-widht: ${breakPoints.desktop}px)`,
    desktop: `@media (min-widht: ${breakPoints.desktop}px)`,
  },
  spacing
}