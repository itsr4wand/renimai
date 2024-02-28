//
//! > By itsR4wand
//* (c) 2024
//

import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Logo from '../assets/imgs/logo.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
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
      <div className="bg-gradient-to-b from-white to-[#fcfcfc] py-8 lg:py-10 px-4 lg:px-0 border-t-[1px] border-[#d4d4d8]" ref={addToRefs}>
        <footer className="max-w-4xl mx-auto flex flex-col items-start">
          <ul className="flex gap-3" ref={addToRefs}>
            <Link to='/roadmaps' className='hover:underline font-medium'>Roadmaps</Link>
            <Link to='/guides' className='hover:underline font-medium'>Guides</Link>
            <Link to='/about' className='hover:underline font-medium'>About</Link>
            <Link to='/contact' className='hover:underline font-medium'>Contact</Link>
            <a href='https://github.com/' className='hover:underline font-medium'>GitHub</a>
          </ul>
          <div className="mt-8 flex flex-col">
            <div className="flex items-center" ref={addToRefs}>
              <img src={Logo} alt="" className="w-8 h-8 rounded-md ltr:mr-2 rtl:ml-2" />
              <p className="text-md"><span className="font-semibold">Renimai</span> by <a className="bg-[#202020] text-white py-1 px-2 font-bold rounded-md hover:translate-y-[-1.5px] transition-transform" href="https://x.com/itsr4wand">itsR4wand</a></p>
            </div>
            <p className="mt-1.5 text-[#646464] text-sm max-w-96" ref={addToRefs}>Renimai is a website designed to teach beginners programming in the best way.</p>
            <div className="mt-3 text-[#7d7c80] flex items-center text-sm" ref={addToRefs}>
              <p>©2024. <span className="font-semibold">Renimai</span></p>
              <span className="mx-2.5">‧</span>
              <ul className="flex items-center gap-1">
                <Link to='/'></Link>
                <li className='hover:underline'>Privacy</li>
                <span>‧</span>
                <li className='hover:underline'>Terms</li>
                <span>‧</span>
                <li className='hover:underline'>FAQs</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}



export default Footer