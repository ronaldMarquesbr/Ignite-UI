import {
  colors,
  fontSizes,
  fontWeights,
  space,
  lineHeights,
  radii,
  fonts,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, keyframes, css, globalCss, theme, createTheme, config } =
  createStitches({
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
    theme: {
      colors,
      fontSizes,
      fontWeights,
      space,
      lineHeights,
      radii,
      fonts,
    },
  })
