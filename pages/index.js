import React,{ useState, useEffect } from 'react'
// import Context  from '../Context'

import { Header } from '../components/Header'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'


const Home = () => {

  const [state, setState] = useState([])

  const Conf = {
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json"
    }
  }

  // useEffect( async () => {
  //   let response = await fetch('https://gerardogaravito.vercel.app/api/data', Conf)
  //   console.log(response.json())
  //   let data = await response.json()
  // }, [])

  // useEffect(() => {
  //   fetch('https://gerardogaravito.vercel.app/api/data', Conf)
  //   .then(response => console.log(response))
  //   .then(data => setState(data))
  // }, [])

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
