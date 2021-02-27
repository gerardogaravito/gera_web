import { FaGithub } from "react-icons/fa";


import { Description, Text, Tools, Tool, Repo } from './styles'

export const ProjectDescription = ({ name, description, repo_url, tools}) => {


  return(
    <Description>
      <Text>{description}</Text>
      <Tools>
        {
          tools.map(tool => (
            <Tool key={tool} >{tool}</Tool>
          ))
        }
      </Tools>
      <Repo href={repo_url} target='_blank' alt={`${name} repository`}>
        <FaGithub size='30px'/>
      </Repo>
    </Description>
  )
}