import Cors from 'cors'
import NextCors from 'nextjs-cors'

import data from '@database/data'
// import initMiddleware from '@database/init-middleware'

// Initializing the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
//   // origin: ['https://gerardogaravito.vercel.app/','http://localhost:3000/'],
//   origin: ['*']
// })

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

// async function handler(req, res) {

//   //correr cors
//   await runMiddleware(req, res, cors)

//   res.statusCode = 200
//   res.setHeader('Content-type', 'application/json')
//   res.end(JSON.stringify(data))
// }


// ----------------------------- nextjs-cors
async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://www.npmjs.com/package/cors
  await NextCors(req, res, {
     // Options
      methods: ['GET'],
      origin: ['*'],
     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  res.json(data);
}

export default handler