//
//! > By itsR4wand
//* (c) 2024
//

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import roadmapsData from '../roadmaps'
import 'ldrs/squircle'
import NotFound from './NotFound.jsx'

function Roadmap() {
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  const [language] = useState(defaultLanguage)

  if (!roadmapsData) {
    return <div className='grid place-items-center h-52 min-w-full'><l-squircle size='37' stroke='5' stroke-length='0.15' bg-opacity='0.1' speed='0.9' color='oklch(var(--n))'></l-squircle></div>;
  }

  // Get the roadmap roadmapURL
  const { roadmapURL } = useParams()
  const roadmapDataArray = Array.isArray(roadmapsData) ? roadmapsData : Object.values(roadmapsData)
  // Check roadmapURL
  const roadmapData = roadmapDataArray.find((data) => data.roadmapURL === roadmapURL)

  // If roadmapURL is not found
  if (!roadmapData) {
    return <NotFound />;
  }

  return (
    <>
      {/* hero */}
        <div className="px-2 lg:px-0 py-12 flex flex-col items-center justify-center border-b-[1px] border-[#d4d4d8]">
          <div className='p-2 bg-gray-100 mb-2 rounded-lg'>
            <img src={roadmapData.icon} className='w-16 h-16' alt={roadmapData.title} />
          </div>
          <h1 className='text-3xl md:text-4xl font-bold mt-1'>{roadmapData.title}</h1>
          <p className='mt-2 text-[#646464]'>{roadmapData.description}</p>
        </div>
      <div className='grid place-items-center min-w-screen min-h-full bg-[#fafafa] py-16'>
        {roadmapData.body ? <img src={roadmapData.body} alt={roadmapData.title} oncontextmenu='return false;' /> : <div className='grid place-items-center h-52 min-w-full'><l-squircle size='37' stroke='5' stroke-length='0.15' bg-opacity='0.1' speed='0.9' color='oklch(var(--n))'></l-squircle></div>}
      </div>

    </>
  )
}

export default Roadmap
