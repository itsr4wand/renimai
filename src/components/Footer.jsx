//
//! > By itsR4wand
//* (c) 2024
//

import Logo from '../assets/imgs/logo.jpeg'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'

function Footer() {
  const [cookies] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // set user language
  const language = defaultLanguage
  const languageStrings = { en, de, ckb } // language codes

  return (
    <>
      <div className='bg-gradient-to-b from-white to-[#fcfcfc] py-8 lg:py-10 px-4 lg:px-0 border-t-[1px] border-[#d4d4d8]'>
        <footer className='max-w-4xl mx-auto flex flex-col items-start'>
          <ul className='flex gap-3'>
            <li><Link to='/' className='hover:underline font-medium'>{languageStrings[language].footer.nav.home}</Link></li>
            <li><Link to='/roadmaps' className='hover:underline font-medium'>{languageStrings[language].footer.nav.roadmaps}</Link></li>
            <li><Link to='/about' className='hover:underline font-medium'>{languageStrings[language].footer.nav.about}</Link></li>
            <li><Link to='/contact' className='hover:underline font-medium'>{languageStrings[language].footer.nav.contact}</Link></li>
          </ul>
          <div className='mt-8 min-w-full flex flex-col'>
            <div className='flex items-center'>
              <img src={Logo} alt='Renimai' className='w-8 h-8 rounded-md ltr:mr-2 rtl:ml-2' />
              <p className='text-md font-semibold'>{languageStrings[language].name}</p>
            </div>
            <p className='mt-1.5 text-[#646464] text-sm max-w-96'>{languageStrings[language].description}</p>
            <div className='mt-3 text-[#7d7c80] flex items-center text-sm'>
              <p>©{new Date().getFullYear()}. <span className='font-semibold text-[#666]'>{languageStrings[language].name}</span></p>
              <span className='mx-2.5'>‧</span>
              <ul className='flex items-center gap-1'>
                <Link className='hover:underline' to='/privacy'>{languageStrings[language].footer.subnav.privacy}</Link>
                <span>‧</span>
                <Link className='hover:underline' to='/terms'>{languageStrings[language].footer.subnav.terms}</Link>
                <span>‧</span>
                <Link className='hover:underline' to='/faq'>{languageStrings[language].footer.subnav.faq}</Link>
              </ul>
            </div>
          </div>
          <p className="flex items-center justify-center mt-10 min-w-full text-[#646464] text-sm">{languageStrings[language].footer.copyright}<a href="http://x.com/itsr4wand" className='ltr:ml-1 rtl:mr-1 hover:text-[#202020] hover:underline font-medium' target='_blank'>itsR4wand</a></p>
        </footer>
      </div>
    </>
  )
}



export default Footer