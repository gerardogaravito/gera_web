import Cors from 'cors'

import data from '@database/data'
import initMiddleware from '@database/init-middleware'

// inicializar el cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: false,
  })
)

export default handler = async (req, res) => {

  //correr cors
  await cors(req, res)

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(data))
}