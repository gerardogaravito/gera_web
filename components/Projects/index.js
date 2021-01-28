import { SectionTitle } from '@components/SectionTitle'
import { SectionLayout } from '@components/SectionLayout'
import { ProjectCard } from '@components/ProjectCard'

import { Description } from './styles'

export const Projects = ({ projects }) => {

  projects = [
    {
      name: 'CheapFetch',
      id: 0,
      description: 'It is a website that allows you to search products along Amazon and Mercado Libre. Built in 2 weeks.',
      demo_url: 'https://www.youtube.com/watch?v=ylLJ3H1UiCQ&t=4s',
      image_url: '/cheapfetch.png',
      image_alt: 'project cheapfetch',
      repo_url: 'https://github.com/C5-CheapFetch/CheapFetch',
      tools: ['React', 'Next JS', 'Styled-Components']
    },
    {
      name: 'Re-Z',
      id: 1,
      description: 'A project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=8oqP7f7T_lc&t=4s',
      image_url: '/re_z.png',
      image_alt: 'project re-z',
      repo_url: 'https://github.com/gerardogaravito/re_z',
      tools: ['React', 'Webpack', 'CSS']
    },
    {
      name: 'Master Path',
      id: 2,
      description: 'Built in 48 hrs during the Platzi Master Hackaton 2020. Me and my team obtain honorable mention during the award ceremony.',
      demo_url: 'https://www.youtube.com/watch?v=eVRFnytvDHE',
      image_url: '/master_path.jpg',
      image_alt: 'project master path',
      repo_url: 'https://github.com/hack-learning/masterpath_frontend',
      tools: ['React', 'Next JS', 'Styled-Components', 'Redux']
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