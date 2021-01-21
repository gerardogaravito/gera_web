import { Container, Info, Name, Profession, Bio } from './styles'

export const Header = () => {

  return(
    <Container>
      <Info>
        <Name>Gerardo Garavito García</Name>
        <Profession>Front-End Developer</Profession>
        <Bio>Member of Platzi Master and <br/>learning to be a Software Engineer at UANL. <br/> Still working on it...</Bio>
      </Info>
    </Container>
  )
}