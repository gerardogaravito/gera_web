import { Container, Info, Name, Profession, Bio, Network, Anchor } from './styles'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { colors } from '../../globalStyles/stylesVariables'

export const Header = () => {

  const personal = {
    name: "Gerardo",
    dadlast: "Garavito",
    momlast: "García",
    profession: 'Front-End Developer',
    birth: {
      day: "10",
      month: "April",
      year: "2000"
    },
    contact: {
      email: {
        gmail: "garavitogerardo@gmail.com",
        outlook: "ggaravito2000@hotmail.com",
        university: "gerardo.garavitogrc@uanl.edu.mx"
      },
      phone: 8115110723,
      linkedin: "https://www.linkedin.com/in/gerardo-garavito-b408811b2/",
      github: "https://github.com/gerardogaravito",
      instagram: "https://www.instagram.com/garavito666/?hl=es-la"
    }
  }

  return(
    <Container>
      <Info>
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
      </Info>
    </Container>
  )
}