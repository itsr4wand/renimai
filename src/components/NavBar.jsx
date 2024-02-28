//
//! > By itsR4wand
//* (c) 2024
//

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'
import GitHubButton from 'react-github-btn'

function NavBar() {
  const location = useLocation();
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'

  // get user language
  function getBrowserLanguageCode() {
    const language = navigator.languages ? navigator.languages[0] : navigator.language
    return language.slice(0, 2) // Extract first two characters
  }
  // set user language
  const language = getBrowserLanguageCode() || defaultLanguage

  // language codes
  const languageStrings = {
    en,
    de,
    ckb
  }

  const navRef = useRef(null);
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(navRef.current, {
      // Specify options here
      origin: "top",
      distance: "30px",
      duration: 2500,
      delay: 500,
      reset: true
    });
  }, []);

  // Function to add refs
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <div className={location.pathname === '/' ? 'bg-[#fcfcfc] md:px-3 pt-1 md:pt-4' : 'md:px-3 pt-1 md:pt-4'} ref={navRef}>
        <div className="flex justify-between items-center h-14 max-w-4xl mx-auto px-3 border-b-2 md:border-[1px] md:bg-white border-[#d4d4d8] md:rounded-lg">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">{languageStrings[language].renimai}</h2>
            <div className="hidden sm:block">
              <ul className="text-[#646464] text-sm flex gap-2">
                <li><Link to='/' className={location.pathname === '/' ? 'underline' : 'hover:underline'}>Home</Link></li>
                <li><Link to='/roadmaps' className={location.pathname === '/roadmaps' ? 'underline' : 'hover:underline'}>Roadmaps</Link></li>
                <li><Link to='/guides' className={location.pathname === '/guides' ? 'underline' : 'hover:underline'}>Guides</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <a href="/" className="rounded-md p-2 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="/" className="rounded-md p-2 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#202020" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#202020" strokeWidth="1.5" />
                <path d="M17.5078 6.5L17.4988 6.5" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="mt-1 sm:mt-2">
              <GitHubButton href="https://github.com/Rawandev-top/UltraSpeed" data-color-scheme="no-preference: light_high_contrast light: light_high_contrast dark: light_high_contrast" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Rawandev-top/UltraSpeed on GitHub">Star</GitHubButton>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
