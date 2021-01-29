import styled from 'styled-components'

import { width, mediaQueries } from '@globalStyles/stylesVariables'

export const Description = styled.p`
  width: ${width.normal};
  text-align: justify;
  margin-bottom: 20px;

  @media ${mediaQueries.mobile} {
    width: 250px;
  }
`

export const Project = styled.div`
  display: flex;

  @media ${mediaQueries.tablet} {
    flex-direction: column;
  }
`