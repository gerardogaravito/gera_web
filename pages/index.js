import React,{ useState, useEffect } from 'react'
// import Context  from '../Context'

import { Header } from '../components/Header'


const Home = () => {

  // const [state, setState] = useState([])

  // useEffect(() => {
  //   fetch('https://gerardogaravito.vercel.app/api/data', {
  //     mode: 'no-cors',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(data => setState(data))
  // }, [])

  // console.log(state)

  return (
    <Header />
  )
}

export default Home
