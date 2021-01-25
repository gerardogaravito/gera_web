import styled from 'styled-components'

import { colors, mediaQueries } from '../../globalStyles/stylesVariables'

export const Section = styled.section`
  background-color: ${colors.main};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 0px;
`

export const Title = styled.h2`
  color: ${colors.black};
  font-weight: bold;
  width: 370px;
  margin-bottom: 20px;

  @media ${mediaQueries.mobile} {
    width: 165px;
  }
`

export const Container = styled.div`
  height: 180px;
  width: 370px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & :nth-child(5){
    margin: 10px 0px 10px 40px;
  }
  & :nth-child(6){
    margin: 10px 0px 10px 40px;
  }
  & :nth-child(7){
    margin: 10px 0px 10px 40px;
  }
  & :nth-child(8){
    margin: 10px 0px 10px 40px;
  }

  @media ${mediaQueries.mobile} {
    height: auto;
    width:165px;

    & :nth-child(5){
    margin: 10px 0px;
  }
  & :nth-child(6){
    margin: 10px 0px;
  }
  & :nth-child(7){
    margin: 10px 0px;
  }
  & :nth-child(8){
    margin: 10px 0px;
  }
  }
`

export const Skill = styled.p`
  color: ${colors.black};
  width: 165px;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  
  & :first-child {
    margin-right: 5px;
  }
`