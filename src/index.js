import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'
import {BrowserRouter} from 'react-router-dom'

// fetch('https://strangers-things.herokuapp.com/api/2209/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer TOKEN_STRING_HERE'
//   },
//   body: JSON.stringify({ /* whatever things you need to send to the API */ })
// })

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)


root.render(<Main />)