//
//! > By itsR4wand
//* (c) 2024
//

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'
import getRoadmapsData from '../roadmaps'
import 'ldrs/squircle'

function Roadmaps() {
  const [roadmapData, setRoadmapsData] = useState(null)
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // set user language
  const language = defaultLanguage
  const languageStrings = { en, de, ckb } // language codes

  // read the roadmaps
  useEffect(() => {
    getRoadmapsData(language).then((data) => {
      setRoadmapsData(data)
    })
  }, [language])

  return (
    <>
      <div className="max-w-4xl mx-auto px-3 lg:px-0">
        <div className="flex flex-col pt-12">
          <h2 className='text-3xl md:text-4xl font-bold'>{languageStrings[language].roadmaps.hero.title}</h2>
          <p className='mt-1 text-[#646464]'>{languageStrings[language].roadmaps.hero.text}</p>
        </div>
        <div className="my-12">
          {roadmapData ?
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {Object.values(roadmapData)
                .map((data, index) => (
                  // roadmaps section grid item
                  <Link to={`/roadmaps/${data.url}`} key={index} className='border-2 border-[#d4d4d8] bg-[#f6f6f6] min-w-24 min-h-32 rounded-md p-4 hover:translate-y-[-3px] transition-transform'>
                    <div className='p-2 bg-gray-200 w-10 h-10 mb-1 rounded-md'>
                      <img src={data.icon} alt={data.title} />
                    </div>
                    <h3 className='text-[#181819] text-xl font-semibold capitalize'>{data.title}</h3>
                    <p className='text-[#7d7c80]'>{data.description}</p>
                  </Link>
                ))}
            </div>
            : <div className='grid place-items-center min-h-40 min-w-full'>
              <l-squircle
                size='37'
                stroke='5'
                stroke-length='0.15'
                bg-opacity='0.1'
                speed='0.9'
                color='black'
              ></l-squircle>
            </div>}
          <div className="flex items-center min-w-full min-h-12 mt-3">
            <Link to='/add-roadmap' className="text-[#20202] text-lg min-w-full font-semibold border-dashed border-2 border-[#d4d4d8] bg-[#f6f6f6] rounded-md p-3 hover:translate-y-[-3px] transition-transform">{languageStrings[language].roadmaps.addroadmap}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roadmaps
