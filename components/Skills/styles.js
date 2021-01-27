import styled from 'styled-components'

import { colors, mediaQueries, width } from '@globalStyles/stylesVariables'

export const Section = styled.section`
  background-color: ${colors.main};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 0px;
`

export const Container = styled.div`
  height: 180px;
  width: ${width.normal};
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
    width:${width.mobile};

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
  width: ${width.mobile};
  display: flex;
  align-items: center;
  margin: 10px 0px;
  
  & :first-child {
    margin-right: 5px;
  }
`