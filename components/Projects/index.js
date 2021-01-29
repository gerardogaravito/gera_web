import { SectionTitle } from '@components/SectionTitle'
import { SectionLayout } from '@components/SectionLayout'
import { ProjectCard } from '@components/ProjectCard'

import { Description } from './styles'

export const Projects = ({ projects }) => {

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