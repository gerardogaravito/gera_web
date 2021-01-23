import styled from 'styled-components'

import { colors } from '../../globalStyles/stylesVariables'

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
  width: 390px;
`

export const Container = styled.div`
  height: 220px;
  width: 450px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Skill = styled.p`
  color: ${colors.black};
  width: 165px;
  display: flex;
  align-items: center;
  margin: 10px 20px;

  & :first-child {
    margin-right: 5px;
  }
`