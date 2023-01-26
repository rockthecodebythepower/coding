import { spacing } from "./utils";

export const BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  laptop: 992
}

export const ZINDEX = {
  base: 100,
  popUp: 200,
  navBar: 300,
  popper: 400,
  spinner: 500
}

const brandColors = {
  primary: '#6380f7',
  secondary: '#03DAC4',
  neutral: '#505457'
}

const contentColors = {
  live: '#FF0030',
  vod: '#0092F6'
}

const feedbackColors = {
  info: '#0077C8',
  success: '#00B388',
  warning: '#F6BE00',
  error: '#D20028'
}

export const theme = {
  palette: {
    brand: {
      primary: brandColors.primary,
      secondary: brandColors.secondary,
      neutral: brandColors.neutral
    },
    content: {
      live: contentColors.live,
      vod: contentColors.vod
    },
    feedback: {
      info: feedbackColors.info,
      success: feedbackColors.success,
      warning: feedbackColors.warning,
      error: feedbackColors.error
    },
    background: {
      high: '#131516',
      medium: '#1B1E20',
      low: '#25282A'
    },
    text: {
      high: '#FFFFFF',
      medium: '#C9C9CA',
      low: '#929394'
    }
  },
  mediaquery: {
    mobile: `@media(max-width: ${BREAKPOINTS.tablet}px)`,
    tablet: `@media(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.laptop}px)`,
    laptop: `@media(min-width: ${BREAKPOINTS.laptop}px)`
  },
  typography: {
    fonts: {
      regular: '/fonts/Roboto/Roboto-Regular.ttf',
      bold: '/fonts/Roboto/Roboto-Bold.ttf'
    }
  },
  spacing
}
