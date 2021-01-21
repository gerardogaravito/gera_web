// import React, { createContext, useState, useEffect } from 'react'

// const Context = createContext()

// const Provider = ({ children }) => {

//   const [state, setState] = useState([])

//   useEffect(() => {
//     fetch('https://gerardogaravito.vercel.app/api/data')
//     .then(response => response.json())
//     .then(data => setState(data))
//   }, [])

//   console.log(state)

//   const value = {
//     state
//   }

//   return(
//     <Context.Provider value={value}>
//       {children}
//     </Context.Provider>
//   )
// }

// export default {
//   Provider,
//   Consumer: Context.Consumer
// }