//
//! > By itsR4wand
//* (c) 2024
//

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'
// import Atropos from 'atropos/react'
import roadmapsData from '../roadmaps'
import 'ldrs/squircle'

function Home() {
  const [cookies, setCookie] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'

  // get user language
  function getBrowserLanguageCode() {
    const language = navigator.languages ? navigator.languages[0] : navigator.language
    return language.slice(0, 2) // Extract first two characters
  }
  // set user language
  const language = ["de", "en", "ar"].includes(getBrowserLanguageCode()) ? getBrowserLanguageCode() : defaultLanguage;

  // language codes
  const languageStrings = {
    en,
    de,
    ckb
  }

  // change language
  const changeLanguage = (newLanguage) => {
    // set new language to cookie
    setCookie('language', newLanguage, { path: '/' })
    // if website language changed then reload page
    window.location.reload()
  }

  const revealRefs = useRef([]);
  useEffect(() => {
    // Initialize ScrollReveal for each ref with incremental distance
    revealRefs.current.forEach((ref, index) => {
      ScrollReveal().reveal(ref, {
        // Increment distance for each child
        origin: "top",
        distance: `${30 + (index * 5)}px`,
        duration: 2500,
        delay: 500 + (index * 100) // Also increment delay for a staggered effect
      });
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
      <div className='pt-6 bg-gradient-to-b from-[#fcfcfc] to-white'>
        <div className='px-2 py-12 min-h-72 text-center flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-balance' ref={addToRefs}>Learn <span className='underline'>Programming</span><br className='hidden sm:block' /> easy with Renimai!</h1>
          <p className='max-w-md mx-auto text-[#646464] mt-2 mb-4 text-balance' ref={addToRefs}>Explore our free learning roadmap and save time searching</p>
          <div className='flex items-center gap-2' ref={addToRefs}>
            <Link to='/roadmaps' className='hover:translate-y-[-1.5px] transition-transform bg-[#202020] hover:bg-[#171717] text-white px-5 py-2.5 gap-2 flex items-center justify-center rounded-md'>Get Started <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25' /></svg> </Link>
            <span className='px-2 pt-2'></span>
          </div>
          {/* <Atropos rotateXMax={5} rotateYMax={5} shadow={false} className='shadow-2xl w-full max-w-4xl mx-auto mt-8'>
            <img className='border-2 rounded-md' src='https://preview.cruip.com/gray/images/hero-image.png' alt={languageStrings[language].renimai} />
          </Atropos> */}
        </div>
      </div>
      <div className='bg-[#fafafa] min-h-80 py-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl font-bold' ref={addToRefs}>Popular Roadmaps</h2>
            <p className='mt-1 text-[#646464]' ref={addToRefs}>Most used Roadmaps on Renimai</p>
          </div>
          {roadmapsData ?
            <div className='px-3 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {Object.values(roadmapsData)
                .filter(data => data.type === 'recommed')
                .map((data, index) => (
                  // roadmaps section grid item
                  <Link to={`/roadmaps/${data.roadmapURL}`} key={index} className='border-2 bg-[#f6f6f6] min-w-24 min-h-32 rounded-md p-4 hover:translate-y-[-3px] transition-transform' ref={addToRefs}>
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
        </div>
      </div>
      <div className="min-h-80 px-3 lg:px-0 py-6 md:py-12 max-w-4xl mx-auto">
        <div className='flex flex-col'>
          <h2 className='text-3xl md:text-4xl font-bold' ref={addToRefs}>Guides</h2>
          <p className='mt-1 text-[#646464]' ref={addToRefs}>Programming topics, tools and technical problems simply explained</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <Link className="flex items-center border-2 bg-[#f6f6f6] min-w-full rounded-md p-4 hover:translate-y-[-3px] transition-transform" ref={addToRefs}>
            <h3 className='text-[#181819] text-xl font-semibold capitalize'>Title</h3>
            <p className='text-[#7d7c80] ltr:ml-auto rtl:mr-auto'>date</p>
          </Link>
          <Link className="flex items-center border-2 bg-[#f6f6f6] min-w-full rounded-md p-4 hover:translate-y-[-3px] transition-transform" ref={addToRefs}>
            <h3 className='text-[#181819] text-xl font-semibold capitalize'>Title</h3>
            <p className='text-[#7d7c80] ltr:ml-auto rtl:mr-auto'>date</p>
          </Link>
          <Link className="flex items-center border-2 bg-[#f6f6f6] min-w-full rounded-md p-4 hover:translate-y-[-3px] transition-transform" ref={addToRefs}>
            <h3 className='text-[#181819] text-xl font-semibold capitalize'>Title</h3>
            <p className='text-[#7d7c80] ltr:ml-auto rtl:mr-auto'>date</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
