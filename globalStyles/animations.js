import { css, keyframes } from 'styled-components'

import { colors } from './stylesVariables'

const paintInKeyframes = keyframes`
  from {
    background-color: ${colors.black}
  }
  to {
    background-color: ${colors.gray}
  }
`

export const paintIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${paintInKeyframes} ${type};
    animation-fill-mode: forwards;
  `