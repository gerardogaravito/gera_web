import styled from 'styled-components'
import { colors, mediaQueries, width } from '../../globalStyles/stylesVariables'

export const Title = styled.h2`
  color: ${colors.black};
  font-weight: bold;
  width: ${width.normal};
  margin-bottom: 20px;

  @media ${mediaQueries.mobile} {
    width: ${width.mobile};
  }
`