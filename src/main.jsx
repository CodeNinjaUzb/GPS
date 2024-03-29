import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/react-datepicker/src/stylesheets/datepicker.scss'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = 'http://5.182.26.124/api/';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
