//
//! > By itsR4wand
//* (c) 2024
//

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CookiesProvider, useCookies } from 'react-cookie'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './screens/Home.jsx'
import Roadmap from './screens/Roadmap.jsx'
import NotFound from './screens/NotFound.jsx'

function App() {
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  const [language] = useState(defaultLanguage)

  // Check if the language is Kurdish Sorani or not
  const getDirection = (lang) => {
    // if language us kurdish sorani then make the website RTL
    if (lang === 'ckb') {
      return 'rtl'
    }
    // if not then make the website LTR
    return 'ltr'
  }

  return (
    <CookiesProvider>
      <Router>
        <div dir={getDirection(language)}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/roadmaps/:roadmapURL' element={<Roadmap />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CookiesProvider>
  )
}

export default App
