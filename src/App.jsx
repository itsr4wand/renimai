//
//! > By itsR4wand
//* (c) 2024
//

// Importing necessary modules
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useCookies } from 'react-cookie'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Roadmaps from './screens/Roadmaps.jsx'
import Roadmap from './screens/Roadmap.jsx'
import NotFound from './screens/NotFound.jsx'

// Defining the App component
export default function App() {
  // Initializing the helmet context
  const helmetContext = {}
  // Using cookies to get the language preference
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // Setting the language to the user's preference
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

  // Rendering the component
  return (
    <HelmetProvider context={helmetContext}>
      <Router>
        <div dir={getDirection(language)}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='roadmaps' element={<Roadmaps />} />
            <Route path='roadmaps/:url' element={<Roadmap />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}