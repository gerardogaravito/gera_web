import Image from 'next/image'

import { Card, ImgCont, Name } from './styles'

export const ProjectCard = ({ name, description, image_alt, demo_url, image_url, repo_url }) => {

  return(
    <Card>
      <ImgCont>
        <Image
          src={image_url}
          alt={image_alt}
          width={300}
          height={125}
          layout='fixed'
        />
      </ImgCont>
      <Name>{name}</Name>
    </Card>
  )
}