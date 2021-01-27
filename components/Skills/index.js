import { SectionTitle } from '@components/SectionTitle'
import { SectionLayout } from '@components/SectionLayout'

import { Container, Section, Title, Skill } from './styles'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript, SiReact, SiStyledComponents, SiNextDotJs } from 'react-icons/si'
import { DiScrum, DiResponsive } from 'react-icons/di'

export const Skills = () => {

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'React JS',
    'Styled-Components',
    'Next JS',
    'Scrum',
    'Responsive Design'
  ]

  return(
    <SectionLayout>
      <SectionTitle title='Skills'/>
      <Container>
        <Skill><FaHtml5 size='25px' />{skills[0]}</Skill>
        <Skill><FaCss3Alt size='25px' />{skills[1]}</Skill>
        <Skill><SiJavascript size='25px' />{skills[2]}</Skill>
        <Skill><SiReact size='25px' />{skills[3]}</Skill>
        <Skill><SiStyledComponents size='25px' />{skills[4]}</Skill>
        <Skill><SiNextDotJs size='25px' />{skills[5]}</Skill>
        <Skill><DiScrum size='25px' />{skills[6]}</Skill>
        <Skill><DiResponsive size='25px' />{skills[7]}</Skill>
      </Container>
    </SectionLayout>
  )
}