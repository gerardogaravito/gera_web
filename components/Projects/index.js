import { SectionTitle } from '@components/SectionTitle'
import { SectionLayout } from '@components/SectionLayout'
import { ProjectCard } from '@components/ProjectCard'
import { ProjectDescription } from '@components/ProjectDescription'

import { Description, Project } from './styles'

export const Projects = ({ projects }) => {

  return(
    <SectionLayout>
      <SectionTitle title='Projects' />
      <Description>Some projects where I've contributed as a Front-End Developer</Description>
      {
        projects.map(item => (
          <Project key={item.id}>
            <ProjectCard {...item}/>
            <ProjectDescription {...item}/>
          </Project>
        ))
      }
    </SectionLayout>
  )
}