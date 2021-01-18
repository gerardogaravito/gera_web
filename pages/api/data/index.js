import data from '../../../database/data'

const handler = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(data))
}

export default handler