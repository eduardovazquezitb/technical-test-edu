import React from 'react'
import ReactDOM from 'react-dom/client'
import DynamicAllEmployeesDisplayer from './components/DynamicAllEmployeesDisplayer/index.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DynamicAllEmployeesDisplayer />
  </React.StrictMode>
)
