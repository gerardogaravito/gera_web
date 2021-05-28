const data = {
  personal: {
    name: 'Gerardo',
    dadlast: 'Garavito',
    momlast: 'García',
    profession: 'Front-End Developer',
    contact: {
      email: {
        gmail: 'garavitogerardo@gmail.com',
        uanl: 'gerardo.garavitogrc@uanl.edu.mx'
      },
      linkedin: 'https://www.linkedin.com/in/gerardo-garavito-b408811b2/',
      github: 'https://github.com/gerardogaravito',
      instagram: 'https://www.instagram.com/garavito666/?hl=es-la'
    },
  },
  projects: [
    {
      name: 'Re-Z',
      id: 0,
      description: 'A project where you can consult recipes with the possibility of buying all the ingredients easily.',
      demo_url: 'https://www.youtube.com/watch?v=8oqP7f7T_lc&t=4s',
      image_url: '/re_z.png',
      image_alt: 'project re-z',
      repo_url: 'https://github.com/gerardogaravito/team_cesar_c5/tree/master/re-z',
      tools: ['React', 'Webpack', 'CSS']
    },
    {
      name: 'CheapFetch',
      id: 1,
      description: 'Website that allows you to search products along Amazon and Mercado Libre. Built in 3 weeks.',
      demo_url: 'https://www.youtube.com/watch?v=ylLJ3H1UiCQ&t=4s',
      image_url: '/cheapfetch.png',
      image_alt: 'project cheapfetch',
      repo_url: 'https://github.com/C5-CheapFetch/CheapFetch',
      tools: ['React', 'Next JS', 'Styled-Components']
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
  ],
}

export default data;