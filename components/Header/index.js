import { Container, Info, Name, Profession, Bio } from './styles'

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
      </Info>
    </Container>
  )
}