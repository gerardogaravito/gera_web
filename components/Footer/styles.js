import styled from 'styled-components'

import { colors, mediaQueries } from '@globalStyles/stylesVariables'
import { paintInPink } from '@globalStyles/animations'

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${mediaQueries.mobile} {
    flex-direction: column;
  }
`

export const Signature = styled.p``

export const Anchor = styled.a`
  color: ${colors.black};
  font-size: 14px;

  @media ${mediaQueries.mobile} {
    margin-top: 30px;
  }

  &:hover {
    ${paintInPink}
  }
`
