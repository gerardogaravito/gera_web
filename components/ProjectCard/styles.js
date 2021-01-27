import styled, { keyframes } from 'styled-components'
import { colors } from '@globalStyles/stylesVariables'
import { paintIn } from '@globalStyles/animations'

export const Card = styled.a`
  background-color: ${colors.black};
  width: 300px;
  height: 200px;
  margin: 5px;

  & :hover {
    ${paintIn};
  }
`

export const ImgCont = styled.div`
  background-color: ${colors.gray};
  overflow: hidden;
  object-fit: cover;
  width: 300px;
  height: 125px;

  & :only-child {
    object-fit: cover;
  }
`

export const Name = styled.p`
  color: ${colors.white};
  font-weight: bold;
  margin: 15px;
`