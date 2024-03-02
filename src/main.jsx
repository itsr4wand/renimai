//
//! > By itsR4wand
//* (c) 2024
//
//? > Instagram/itsr4wand
//? > YouTube/itsr4wand
//? > GitHub/itsr4wand
//? > Telegram/itsr4wand
//? > BuyMeACoffee/itsr4wand
//

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
)



