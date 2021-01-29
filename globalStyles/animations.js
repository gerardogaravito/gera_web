import { css, keyframes } from 'styled-components'

import { colors } from './stylesVariables'

// from black to white
const paintInWhiteKeyframes = keyframes`
  from {
    background-color: ${colors.black}
  }
  to {
    background-color: ${colors.white}
  }
`

export const paintInGray = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${paintInWhiteKeyframes} ${type};
    animation-fill-mode: forwards;
  `

//transform to red the youtube logo
const youtubeFrames = keyframes`
  from {
    color: ${colors.white}
  }
  to {
    color: ${colors.red}
  }
`

export const youtubeColor = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${youtubeFrames} ${type};
    animation-fill-mode: forwards;
  `

// // from white to black
const paintInBlackKeyframes = keyframes`
from {
  color: ${colors.white}
}
to {
  color: ${colors.black}
}
`

export const paintInBlack = ({ time = '0.5s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${paintInBlackKeyframes} ${type};
  animation-fill-mode: forwards;
`

// // from main to white
const paintInMainWhiteKeyframes = keyframes`
from {
  color: ${colors.main}
}
to {
  color: ${colors.white}
}
`

export const paintInMainWhite = ({ time = '0.5s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${paintInMainWhiteKeyframes} ${type};
  animation-fill-mode: forwards;
`