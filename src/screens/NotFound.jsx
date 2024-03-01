//
//! > By itsR4wand
//* (c) 2024
//

import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'

function NotFound() {
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // set user language
  const language = defaultLanguage
  const languageStrings = { en, de, ckb } // language codes

  return (
    <>
      <div className="max-w-3xl mx-auto min-h-[70vh] pt-16 px-6">
        <h1 className="font-bold text-5xl"><span className="text-sm text-[#646464]">{languageStrings[language].error404.subtitle}</span><br />{languageStrings[language].error404.title}</h1>
        <p className="text-[#646464] max-w-md mt-2">{languageStrings[language].error404.text}</p>
        <Link to='/' className="mt-4 bg-[#202020] hover:bg-[#171717] text-white px-5 py-2.5 gap-2 flex items-center justify-center rounded-md sm:w-fit">
          {language === 'ckb' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg>}
          {languageStrings[language].error404.btn}
        </Link>
      </div>
    </>
  )
}

export default NotFound
