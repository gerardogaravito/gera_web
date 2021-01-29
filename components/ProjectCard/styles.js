import styled, { keyframes } from 'styled-components'
import { colors, mediaQueries } from '@globalStyles/stylesVariables'
import { paintInGray, paintInBlack, youtubeColor } from '@globalStyles/animations'

export const Card = styled.a`
  background-color: ${colors.black};
  width: 300px;
  height: 200px;
  margin: 5px;
  text-decoration: none;
  position: relative;

  & .card__icon {
    color: ${colors.white};
    position: absolute;
    right: 15px;
    bottom: 15px;
  }

  &:hover {
    ${paintInGray}
    cursor: pointer;

    & .card__icon {
      ${youtubeColor}
    }

    & p {
      ${paintInBlack}
    }
  }

  @media ${mediaQueries.mobile} {
    width: 250px;
    height: 166px;

    & .card__icon {
      right: 10px;
      bottom: 10px;
    }
  }
`

export const ImgCont = styled.div`
  background-color: ${colors.gray};
  overflow: hidden;
  object-fit: cover;
  width: 300px;
  height: 125px;
  display: flex;
  justify-content: center;

  & :only-child {
    object-fit: cover;
  }

  @media ${mediaQueries.mobile} {
    width: 250px;
    height: 103px;
  }
`

export const Name = styled.p`
  color: ${colors.white};
  font-weight: bold;
  margin: 15px 0px 0px 15px;

  @media ${mediaQueries.mobile} {
    margin: 10px 0px 0px 10px;
  }
`