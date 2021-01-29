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

// // from light gray to Pink
const paintInLightPinkKeyframes = keyframes`
from {
  color: ${colors.light_gray}
}
to {
  color: ${colors.pink}
}
`

export const paintInLightPink = ({ time = '0.5s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${paintInLightPinkKeyframes} ${type};
  animation-fill-mode: forwards;
`

// // from black to pink
const paintInPinkKeyframes = keyframes`
from {
  color: ${colors.black}
}
to {
  color: ${colors.pink};
}
`

export const paintInPink = ({ time = '0.5s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${paintInPinkKeyframes} ${type};
  animation-fill-mode: forwards;
`