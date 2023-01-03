import React from 'react'
import ReactDOM from 'react-dom/client'
import DisplayAllEmployees from './components/DisplayAllEmployees'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DisplayAllEmployees />
  </React.StrictMode>
)
