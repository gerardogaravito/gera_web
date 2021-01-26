import styled from 'styled-components'
import { colors } from '../../globalStyles/stylesVariables'

export const Card = styled.div`
  background-color: ${colors.black};
  width: 300px;
  height: 200px;
`

export const ImgCont = styled.div`
  background-color: ${colors.gray};
  overflow: hidden;
  object-fit: cover;
  width: 300px;
  height: 125px;
`

export const Name = styled.p`
  color: ${colors.white};
  font-weight: bold;
`