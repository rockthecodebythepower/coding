import { Global as GLobalEmotion } from '@emotion/react'
import { theme } from '../theme';

export const Global = () => (
  <GLobalEmotion
    styles={(theme) => [
      {
        "*": {
          padding: 0,
          margin: 0,
          fontFamily: "Regular",
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.high,
          color: theme.palette.text.high
        }
      },
      {
        "@font-face": {
          fontFamily: "Regular",
          src: `url(${theme.typography.fonts.regular}) format("truetype")`,
        },
      },
      {
        "@font-face": {
          fontFamily: "Bold",
          src: `url(${theme.typography.fonts.bold}) format("truetype")`,
        },
      }
    ]}
  >

  </GLobalEmotion >
)