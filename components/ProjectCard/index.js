import { Card, ImgCont, Name } from './styles'

export const ProjectCard = ({name}) => {

  return(
    <Card>
      <ImgCont></ImgCont>
      <Name>{name}</Name>
    </Card>
  )
}