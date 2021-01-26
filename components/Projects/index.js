import { SectionTitle } from '../SectionTitle'
import { SectionLayout } from '../SectionLayout'
import { ProjectCard } from '../ProjectCard'

import { Description } from './styles'

export const Projects = () => {

  const projects = [
    {
      name: 'Re-Z',
      id: 1,
      description: 'Re-Z is a project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=8oqP7f7T_lc&t=4s',
      image_url: 'https://camo.githubusercontent.com/99c93567f4b96fe158d932a07eca65dc4c1517a75515ed60d5cd82e3708dc4f8/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f72652d7a2d33613436312e61707073706f742e636f6d2f6f2f486f6d652532302831292e706e673f616c743d6d6564696126746f6b656e3d39396239366639362d343434362d343763312d616561642d313330363337653834356661',
      repo_url: 'https://github.com/gerardogaravito/re_z'
    },
    {
      name: 'CheapFetch',
      id: 2,
      description: 'Cheap Fetch it is a very useful website that allows you to search a product along Amazon and Mercado Libre (more stores are comming soon)',
      demo_url: 'https://www.youtube.com/watch?v=ylLJ3H1UiCQ&t=4s',
      image_url: 'https://camo.githubusercontent.com/4817e110827fb613d79dc761ad2d5fc61583d2a1cbb4cc9f60dab90187906161/68747470733a2f2f692e696d6775722e636f6d2f6f704a7a4556532e706e67',
      repo_url: 'https://github.com/C5-CheapFetch/CheapFetch'
    },
    {
      name: 'Master Path',
      id: 3,
      description: 'Re-Z is a project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=eVRFnytvDHE',
      image_url: '',
      repo_url: 'https://github.com/hack-learning/masterpath_frontend'
    },
  ]

  return(
    <SectionLayout>
      <SectionTitle title='Projects' />
      <Description>Some projects where I've contributed as a Front-End Developer</Description>
      {
        projects.map(item => (
          <ProjectCard {...item} key={item.id}/>
        ))
      }
    </SectionLayout>
  )
}