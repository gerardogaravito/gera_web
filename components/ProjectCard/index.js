import Image from 'next/image'
import { AiFillYoutube } from 'react-icons/ai'

import { Card, ImgCont, Name } from './styles'

export const ProjectCard = ({ name, description, image_alt, demo_url, image_url, repo_url, tools }) => {

  return(
    <Card href={demo_url} target='_blank' alt='demo youtube video'>
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
      <AiFillYoutube size='30px' className='card__icon'/>
    </Card>
  )
}