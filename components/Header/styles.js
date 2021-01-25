import styled from 'styled-components'
import { colors, fonts, mediaQueries } from '../../globalStyles/stylesVariables'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  text-align: justify;

  @media ${mediaQueries.mobile} {
    width: 240px;
  }
`

export const Name = styled.h1`
  color: ${colors.white};
  margin-bottom: 5px;
`
export const Profession = styled.h3`
  color: ${colors.main};
  font-family: ${fonts.font_mono};
  margin-bottom: 30px;
`

export const Bio = styled.p`
  color: ${colors.main};
  font-family: ${fonts.font_mono};
  margin-bottom: 30px;
`

export const Network = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
`

export const Anchor = styled.a`

`