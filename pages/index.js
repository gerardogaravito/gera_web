import React,{ useState, useEffect } from 'react'
// import Context  from '../Context'

import { Header } from '@components/Header'
import { Skills } from '@components/Skills'
import { Projects } from '@components/Projects'


const Home = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    fetch('https://gerardogaravito.vercel.app/api/data')
    .then(response => response.json())
    .then(data => setState(data))
    .catch(error => console.error('error', error))
  }, [])

  console.log(state)

  return (
    <React.Fragment>
      <Header />
      <Skills />
      <Projects />
    </React.Fragment>
  )
}

export default Home
