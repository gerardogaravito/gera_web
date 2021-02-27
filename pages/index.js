import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Header } from '@components/Header'
import { Skills } from '@components/Skills'
import { Projects } from '@components/Projects'
import { Footer } from '@components/Footer'

//este texto es un test para saber si el cambio de http a ssh funcionó

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
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
      title={`${data.personal.name} ${data.personal.dadlast} | ${data.personal.profession}`}
      description="Web Developer using frontend technologies such as React, React-Native and Styled-Components"
      canonical='https://gerardogaravito.vercel.app/'
      openGraph={{
        url: 'https://gerardogaravito.vercel.app/',
        title: 'Gerardo Garavito | Front-End Developer',
        description: 'Web Developer using frontend technologies such as React, React-Native and Styled-Components',
        images: [
          {
            url: '/gera_web.png',
            width: 800,
            height: 600,
            alt: 'Gerardo Garavito Website picture',
          },
        ],
        site_name: 'Gerardo Garavito Website',
      }}
      twitter={{
        handle: '@garavito666',
        site: '@garavito666',
        cardType: 'summary_large_image',
      }}
      />
      <Header {...data}/>
      <Skills />
      <Projects {...data}/>
      <Footer {...data}/>
    </React.Fragment>
  )
}

export default Home
