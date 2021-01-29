import { GrMail } from "react-icons/gr";

import { SectionLayout } from '@components/SectionLayout'

import { Container, Signature, Anchor} from './styles'

export const Footer = ({ personal }) => {

  return(
    <SectionLayout>
      <Container>
        <Signature>By Gerardo Garavito 👨🏽‍💻</Signature>
        <Anchor href={`mailto:${personal.contact.email.gmail}`} alt='email'>
          <GrMail size='30px'/>
        </Anchor>
        <Anchor href='https://github.com/gerardogaravito/gera_web' target='_blank' alt='repository of this project'>
          Repo of this project
        </Anchor>
      </Container>
    </SectionLayout>
  )
}