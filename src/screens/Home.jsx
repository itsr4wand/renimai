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
import { LoremIpsum, Avatar, fullname, username } from "react-lorem-ipsum"

function Home() {
  const [roadmapData, setRoadmapsData] = useState(null)
  const [cookies, setCookie] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // get user language
  function getBrowserLanguageCode() {
    const language = navigator.languages ? navigator.languages[0] : navigator.language
    return language.slice(0, 2) // Extract first two characters

    // ['de', 'en', 'ckb'].includes(getBrowserLanguageCode()) ? getBrowserLanguageCode() :
  }
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
      <div className='pt-6 bg-gradient-to-b from-[#fcfcfc] to-white'>
        <div className='px-2 py-12 min-h-72 text-center flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-balance' dangerouslySetInnerHTML={{ __html: languageStrings[language].home.hero.title }}></h1>
          <p className='max-w-md mx-auto text-[#646464] mt-2 mb-4 text-balance'>{languageStrings[language].home.hero.description}</p>
          <Link to='/roadmaps' className='hover:translate-y-[-1.5px] transition-transform bg-[#202020] hover:bg-[#171717] text-white px-5 py-2.5 gap-2 flex items-center justify-center rounded-md'>{languageStrings[language].home.hero.btn}
            {language === 'ckb' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" /></svg> :
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' /></svg>}
          </Link>
          {/* <Atropos rotateXMax={5} rotateYMax={5} shadow={false} className='shadow-2xl w-full max-w-4xl mx-auto mt-8'>
            <img className='border-2 rounded-md' src='https://preview.cruip.com/gray/images/hero-image.png' alt={languageStrings[language].renimai} />
          </Atropos> */}
        </div>
      </div>
      <div className='bg-[#fafafa] min-h-80 py-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl font-bold'>Popular Roadmaps</h2>
            <p className='mt-1 text-[#646464]'>Most used Roadmaps on Renimai</p>
          </div>
          {roadmapData ?
            <div className='px-3 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {Object.values(roadmapData)
                .filter(data => data.type === 'recommed')
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
          <Link to='/roadmaps' className='mt-6 m-auto hover:translate-y-[-1.5px] transition-transform bg-[#202020] hover:bg-[#171717] text-white max-w-48 px-5 py-2.5 gap-2 flex items-center justify-center rounded-md'>More Roadmaps <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941' /></svg></Link>
        </div>
      </div>
      <div className='min-h-80 px-3 lg:px-0 py-6 md:py-12 max-w-4xl mx-auto'>
        <div className='flex flex-col'>
          <h2 className='text-3xl md:text-4xl font-bold'>Loved By Developers</h2>
          <p className='mt-1 text-[#646464]'>Many people started coding because of our simple and easy roadmaps😊</p>
        </div>
        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
          {
            Array.apply(null, { length: 9 }).map((e, i) => (
              <div className='bg-[#f6f6f6] border-2 border-[#d4d4d8] rounded-md p-4 hover:translate-y-[-3px] transition-transform'>
                <div className='flex items-center'>
                  <div className='flex gap-2'>
                    <Avatar gender="female" className='h-12 w-12 rounded-md' />
                    <div className="user flex flex-col">
                      <h3 className='text-[#181819] text-lg font-semibold capitalize'>{fullname('female')}</h3>
                      <a href={`/@${username()}`} target='_blank' className='text-[#7d7c80] text-sm'>{`@${username()}`}</a>
                    </div>
                  </div>
                  <p className='ltr:ml-auto rtl:mr-auto text-[#f59f00] flex items-center gap-0.5'><svg xmlns='http://www.w3.org/2000/svg' fill='#f59f00' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'><path strokeLinecap='round' strokeLinejoin='round' d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z' /></svg> 8.6/10</p>
                </div>
                <p className='mt-2'><LoremIpsum avgWordsPerSentence={4} avgSentencesPerParagraph={4} /></p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-gradient-to-b from-[#fcfcfc] to-white py-20 border-t-[1px] border-[#d4d4d8]'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <h2 className='mt-2 text-3xl md:text-4xl font-extrabold text-balance'>Try Renimai For Free</h2>
            <p className='text-[#646464] mt-2 mb-4 text-center'>Explore our free simple and easy roadmaps</p>
            <Link to='/roadmaps' className='hover:translate-y-[-1.5px] transition-transform bg-[#202020] hover:bg-[#171717] text-white px-5 py-2.5 gap-2 flex items-center justify-center rounded-md'>Get Started <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' /></svg> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
