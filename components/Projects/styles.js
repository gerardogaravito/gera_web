import styled from 'styled-components'

import { width, mediaQueries } from '@globalStyles/stylesVariables'

export const Description = styled.p`
  width: ${width.normal};

  @media ${mediaQueries.mobile} {
    width: ${width.mobile};
  }
`