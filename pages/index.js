import React,{ useState, useEffect } from 'react'
// import Context  from '../Context'

import { Header } from '@components/Header'
import { Skills } from '@components/Skills'
import { Projects } from '@components/Projects'


const Home = () => {

  const [state, setState] = useState([])

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  // useEffect(() => {
  //   fetch('https://gerardogaravito.vercel.app/api/data', requestOptions)
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log('error', error))
  // }, [])

  // console.log(state)

  return (
    <React.Fragment>
      <Header />
      <Skills />
      <Projects />
    </React.Fragment>
  )
}

export default Home
