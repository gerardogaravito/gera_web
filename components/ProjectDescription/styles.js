import styled from 'styled-components'

import { colors, mediaQueries } from '@globalStyles/stylesVariables'
import { paintInPink } from '@globalStyles/animations'

export const Description = styled.div`
  width: 300px;
  height: 200px;
  margin: 5px 5px 30px 0px;
  display: grid;
  grid-template-rows: 45% 25% 30%;
  overflow: hidden;

  @media ${mediaQueries.tablet} {
    margin: 0px 5px 30px 5px;
  }

  @media ${mediaQueries.mobile} {
    width: 250px;
    height: 166px;
  }
`

export const Text = styled.p`
  grid-row: 1 / 2;
  text-align: justify;
  margin: 5px 5px 0px 5px;

  @media ${mediaQueries.mobile} {
    font-size: 12px;
  }
`

export const Tools = styled.div`
  grid-row: 2 / 3;
  color: ${colors.light_gray};
  display: flex;

  @media ${mediaQueries.mobile} {
    /* justify-content: space-between; */
  }
`

export const Tool = styled.small`
  width: auto;
  height: 15px;
  background-color: ${colors.black};
  padding: 3px;
  margin: 0px 6px;
  display: flex;

  @media ${mediaQueries.mobile} {
    font-size: 10px;
    margin: 0px 3px;
  }
`

export const Repo = styled.a`
  grid-row: 3 / 4;
  text-decoration: none;
  color: ${colors.black};
  margin: 15px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${paintInPink}
  }

  @media ${mediaQueries.tablet} {
    justify-content: center;
    margin: 0px;
  }
`