import React from 'react'
// import Context  from '../Context'

import { Header } from '@components/Header'
import { Skills } from '@components/Skills'
import { Projects } from '@components/Projects'
import { Footer } from '@components/Footer'

export const getServerSideProps = async () => {
  const response = await fetch('https://gerardogaravito.vercel.app/api/data')
  const data = await response.json()

  if(!data){
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }
  }
}


const Home = ({ data }) => {

  return (
    <React.Fragment>
      <Header {...data}/>
      <Skills />
      <Projects {...data}/>
      <Footer {...data}/>
    </React.Fragment>
  )
}

export default Home
