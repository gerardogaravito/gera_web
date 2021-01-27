import { SectionTitle } from '@components/SectionTitle'
import { SectionLayout } from '@components/SectionLayout'
import { ProjectCard } from '@components/ProjectCard'

import { Description } from './styles'

export const Projects = () => {

  const projects = [
    {
      name: 'Re-Z',
      id: 1,
      description: 'Re-Z is a project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=8oqP7f7T_lc&t=4s',
      image_url: '/re_z.png',
      image_alt: 'project re-z',
      repo_url: 'https://github.com/gerardogaravito/re_z'
    },
    {
      name: 'CheapFetch',
      id: 2,
      description: 'Cheap Fetch it is a very useful website that allows you to search a product along Amazon and Mercado Libre (more stores are comming soon)',
      demo_url: 'https://www.youtube.com/watch?v=ylLJ3H1UiCQ&t=4s',
      image_url: '/cheapfetch.png',
      image_alt: 'project cheapfetch',
      repo_url: 'https://github.com/C5-CheapFetch/CheapFetch'
    },
    {
      name: 'Master Path',
      id: 3,
      description: 'Re-Z is a project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=eVRFnytvDHE',
      image_url: '/master_path.jpg',
      image_alt: 'project master path',
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