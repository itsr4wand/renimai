//
//! > By itsR4wand
//* (c) 2024
//

import NotFound from './NotFound.jsx'
import { useParams, useLocation } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'
import getJsonData from '../roadmaps'
import 'ldrs/squircle'

function Roadmap() {
  const location = useLocation() // Adjusted to maintain the order of hooks
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // set language
  const language = defaultLanguage
  const languageStrings = { en, de, ckb } // language codes
  const [jsonData, setJsonData] = useState(null)

  // Read the roadmaps
  useEffect(() => {
    getJsonData(language).then((data) => {
      setJsonData(data)
    })
  }, [language]) // Added language as a dependency to comply with rules of hooks

  if (!jsonData) {
    return <>Loading...</>
  }

  // Get the roadmap url
  const { url } = useParams()
  const roadmapDataArray = Array.isArray(jsonData) ? jsonData : Object.values(jsonData)
  // Check url
  const roadmapData = roadmapDataArray.find((data) => data.url === url)

  return (
    <>
      {roadmapData ?
        <>
          <div className="max-w-4xl mx-auto px-2 lg:px-0 pt-6 pb-12 flex flex-col items-center justify-center">
            <div className="min-w-full mb-6 md:mb-3">
              <Link to='/roadmaps' className="max-w-fit p-2 flex items-center justify-center gap-1 bg-[#202020] hover:bg-[#171717] text-white border-[1px] border-[#d4d4d8] rounded-md shadow">
                {language === 'ckb' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg> :
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg>}
                {languageStrings[language].roadmaps.backtoall}
              </Link>
            </div>
            <div className='p-2 bg-gray-100 mb-2 rounded-lg'>
              <img src={roadmapData.icon} className='w-16 h-16' alt={roadmapData.title} />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold mt-1'>{roadmapData.title}</h1>
            <p className='mt-2 text-[#646464]'>{roadmapData.description}</p>
          </div>
          <div className='grid place-items-center min-w-screen min-h-full bg-[#fafafa] py-16 border-t-[1px] border-[#d4d4d8]'>
            {roadmapData.body ?
              roadmapData.body === "../roadmaps/svg/flutter.svg" ? <>soon...</>
                : <embed src={roadmapData.body} type="image/svg+xml" className="w-full h-full" /> :
              <div className='grid place-items-center h-52 min-w-full'>
                <l-squircle size='37' stroke='5' stroke-length='0.15' bg-opacity='0.1' speed='0.9' color='oklch(var(--n))'></l-squircle>
              </div>}
          </div>
        </>
        : <NotFound />
      }
    </>
  )
}

export default Roadmap