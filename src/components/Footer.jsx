//
//! > By itsR4wand
//* (c) 2024
//

import Logo from '../assets/imgs/logo.jpeg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-gradient-to-b from-white to-[#fcfcfc] py-8 lg:py-10 px-4 lg:px-0 border-t-[1px] border-[#d4d4d8]'>
        <footer className='max-w-4xl mx-auto flex flex-col items-start'>
          <ul className='flex gap-3'>
            <li><Link to='/' className='hover:underline font-medium'>Home</Link></li>
            <li><Link to='/roadmaps' className='hover:underline font-medium'>Roadmaps</Link></li>
            <li><Link to='/about' className='hover:underline font-medium'>About</Link></li>
            <li><Link to='/contact' className='hover:underline font-medium'>Contact</Link></li>
          </ul>
          <div className='mt-8 min-w-full flex flex-col'>
            <div className='flex items-center'>
              <img src={Logo} alt='Renimai' className='w-8 h-8 rounded-md ltr:mr-2 rtl:ml-2' />
              <p className='text-md font-semibold'>Renimai</p>
            </div>
            <p className='mt-1.5 text-[#646464] text-sm max-w-96'>Renimai is a website designed to teach beginners programming in the best way.</p>
            <div className='mt-3 text-[#7d7c80] flex items-center text-sm'>
              <p>©2024. <span className='font-semibold text-[#666]'>Renimai</span></p>
              <span className='mx-2.5'>‧</span>
              <ul className='flex items-center gap-1'>
                <Link className='hover:underline' to='/privacy'>Privacy</Link>
                <span>‧</span>
                <Link className='hover:underline' to='/terms'>Terms</Link>
                <span>‧</span>
                <Link className='hover:underline' to='/faq'>FAQs</Link>
              </ul>
            </div>
          </div>
          <p className="flex items-center justify-center mt-10 min-w-full text-[#646464] text-sm">Made with ❤ by<a href="http://x.com/itsr4wand" className='ltr:ml-1 ltr:mr-1 hover:text-[#202020] font-medium' target='_blank'>itsR4wand</a></p>
        </footer>
      </div>
    </>
  )
}



export default Footer