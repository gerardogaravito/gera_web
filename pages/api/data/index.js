import NextCors from 'nextjs-cors'

import data from '@database/data'

// ----------------------------- nextjs-cors
async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://www.npmjs.com/package/cors
  await NextCors(req, res, {
     // Options
      methods: ['GET'],
      origin: '*',
     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  res.json(data);
}

export default handler