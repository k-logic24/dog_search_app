import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import App from './App'
import './style/tailwind.output.css'

library.add(faChevronRight, faChevronLeft)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
