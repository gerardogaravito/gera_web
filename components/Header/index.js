import { Section, Container, Name, Profession, Bio, Network, Anchor } from './styles'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { colors } from '@globalStyles/stylesVariables'

export const Header = ({ personal }) => {
  
  return(
    <Section>
      <Container>
        <Name>{personal.name} {personal.dadlast} {personal.momlast}</Name>
        <Profession>{personal.profession}</Profession>
        <Bio>Member of Platzi Master and <br/>learning to be a Software Engineer at UANL.</Bio>
        <Network>
          <Anchor href={personal.contact.github} target='_blank' alt='Git Hub'>
            <FaGithub color={colors.main} size='25px'/>
          </Anchor>
          <Anchor href={personal.contact.linkedin} target='_blank' alt='Linkedin'>
            <FaLinkedin color={colors.main} size='25px'/>
          </Anchor>
          <Anchor href={personal.contact.instagram} target='_blank' alt='Instagram'>
            <GrInstagram color={colors.main} size='25px'/>
          </Anchor>
        </Network>
      </Container>
    </Section>
  )
}