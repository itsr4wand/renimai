//
//! > By itsR4wand
//* (c) 2024
//

// Importing necessary modules
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import en from '../language/en.json'
import de from '../language/de.json'
import ckb from '../language/ckb.json'


// Defining the App component
export default function NavBar() {
  // Using cookies to get the language preference
  const [cookies, setCookie] = useCookies(['language'])
  const defaultLanguage = cookies.language || 'en'
  // Setting the language to the user's preference
  const language = defaultLanguage
  // Defining the language strings
  const languageStrings = { en, de, ckb } // language codes

  // change language
  const changeLanguage = (newLanguage) => {
    // set new language to cookie
    setCookie('language', newLanguage, { path: '/' })
    // if website language changed to ckb then reload page
    if (newLanguage === 'ckb' || ['en', 'de'].includes(newLanguage)) {
      window.location.reload()
    }
  }

  return (
    <>
      <div className={location.pathname === '/' ? 'bg-[#fcfcfc] md:px-3 pt-1 md:pt-4' : 'md:px-3 pt-1 md:pt-4'}>
        <div className='flex justify-between items-center h-14 max-w-4xl mx-auto px-3 border-b-2 md:border-[1px] md:bg-white border-[#d4d4d8] md:rounded-lg'>
          {location.pathname === '' ?
            <h2 className='text-xl font-semibold' title={languageStrings[language].name}>{languageStrings[language].name}</h2> :
            <Link to='/' className='text-xl font-semibold' title={languageStrings[language].name}>{languageStrings[language].name}</Link>
          }
          <div className='flex items-center'>
            <a href='https://github.com/itsr4wand' className='rounded-md p-2 hover:bg-gray-100' title='GitHub'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 24 24' fill='none'>
                <path d='M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17' stroke='#202020' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                <path d='M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22' stroke='#202020' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </a>
            <a href='https://instagram.com/itsr4wand' className='rounded-md p-2 hover:bg-gray-100' title='Instagram'>
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 24 24' fill='none'>
                <path d='M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z' stroke='#202020' strokeWidth='1.5' strokeLinejoin='round' />
                <path d='M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z' stroke='#202020' strokeWidth='1.5' />
                <path d='M17.5078 6.5L17.4988 6.5' stroke='#202020' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </a>
            <div className='group relative'>
              <button className='hover:bg-gray-100 text-[#202020] storke-[#202020] p-2 flex items-center justify-center rounded-md' title='Language'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'><path strokeLinecap='round' strokeLinejoin='round' d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802' /></svg>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-3 h-3'><path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' /></svg>
              </button>
              <nav tabIndex='0' className='border-[1px] border-[#d4d4d8] bg-white invisible rounded w-52 absolute ltr:right-0 rtl:left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1'>
                <ul className='py-1'>
                  <li className={`${language === 'en' ? 'bg-gray-100' : ''} px-4 py-2 hover:bg-gray-100 hover font-medium text-left flex items-center gap-1`} dir='ltr' onClick={() => changeLanguage('en')} title='Change to English'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 512 512'><mask id='circleFlagsUk0'><circle cx={256} cy={256} r={256} fill='#fff'></circle></mask><g mask='url(#circleFlagsUk0)'><path fill='#eee' d='m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z'></path><path fill='#0052b4' d='M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z'></path><path fill='#d80027' d='M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z'></path></g></svg> English</li>
                  <li className={`${language === 'de' ? 'bg-gray-100' : ''} px-4 py-2 hover:bg-gray-100 hover font-medium text-left flex items-center gap-1`} dir='ltr' onClick={() => changeLanguage('de')} title='Wechseln Sie zu Deutsch'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 64 64'><path fill='#3e4347' d='M31.9 2C18.8 2 7.7 10.4 3.6 22h56.6C56.1 10.4 45 2 31.9 2'></path><path fill='#ffe62e' d='M31.9 62c13.1 0 24.2-8.3 28.3-20H3.6c4.1 11.7 15.2 20 28.3 20'></path><path fill='#ed4c5c' d='M3.6 22c-1.1 3.1-1.7 6.5-1.7 10s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z'></path></svg> Deutsch</li>
                  <li className={`${language === 'ckb' ? 'bg-gray-100' : ''} px-4 py-2 hover:bg-gray-100 hover font-medium text-right flex items-center gap-1`} dir='rtl' onClick={() => changeLanguage('ckb')} title='گۆڕین بۆ کوردی'><svg width='1em' height='1em' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='m481.5 175.5h-167a3113.1 3113.1 0 0 0 6.5-17 382.37 382.37 0 0 1-15.5 17h-20a189.39 189.39 0 0 0 3.5-31 34931 34931 0 0 0-14.5 31h-13a2258.3 2258.3 0 0 0-6.5-38 45851 45851 0 0 1-5.5 38h-13a507307 507307 0 0 1-16.5-33 3732.5 3732.5 0 0 1 5.5 33h-20a343.96 343.96 0 0 0-17-15.5 342.98 342.98 0 0 1 8 15.5h-167c22.526-62.359 63.526-108.19 123-137.5 55.727-25.088 113.06-29.422 172-13 65.673 21.35 114.51 62.517 146.5 123.5a190.41 190.41 0 0 1 10.5 27z' fill='#e64c3b' opacity='.996' /><path d='m261.5 175.5c1.328 6.629 2.662 13.296 4 20a134.5 134.5 0 0 0 9-20c4.785-10.243 9.618-20.576 14.5-31a189.39 189.39 0 0 1-3.5 31 1703.3 1703.3 0 0 0-2.5 26 274.71 274.71 0 0 0 22.5-26 382.37 382.37 0 0 0 15.5-17 3113.1 3113.1 0 0 1-6.5 17 228.96 228.96 0 0 0-16.5 37 804.41 804.41 0 0 1 50.5-30.5l-40 44a1709.5 1709.5 0 0 1 56-13 1826.3 1826.3 0 0 0-49 30 4417.4 4417.4 0 0 0 57 4 1724 1724 0 0 0-56 14.5 835.94 835.94 0 0 0 53 19c-1.765 0.961-3.765 1.295-6 1a1652 1652 0 0 1-44-2c-2.466-1.134-5.133-1.301-8-0.5 0.544 0.717 1.211 1.217 2 1.5a1985 1985 0 0 1 44 33.5l-55-19a608.35 608.35 0 0 0 30 40.5c1.184 1.963 2.017 3.963 2.5 6a72.484 72.484 0 0 0-8.5-6 437.88 437.88 0 0 0-38-28.5 288.52 288.52 0 0 1 10 28.5 153.33 153.33 0 0 1 7.5 25 257.26 257.26 0 0 0-18.5-25 434.9 434.9 0 0 0-14.5-21c-0.821 7.179-0.655 14.179 0.5 21 0.167 11.671 0 23.338-0.5 35a2146.4 2146.4 0 0 1-11.5-35 634.78 634.78 0 0 1-6.5-19 123.65 123.65 0 0 0-5.5 19 704.36 704.36 0 0 0-10.5 36 649.49 649.49 0 0 1-1.5-36c0.166-7.341 0-14.674-0.5-22a381.69 381.69 0 0 0-13.5 22 237.52 237.52 0 0 0-17.5 26 160.58 160.58 0 0 1 6.5-26 665.83 665.83 0 0 1 8-28l-1-1a31149 31149 0 0 1-34 29 46.198 46.198 0 0 0-8.5 7c0.579-2.492 1.746-4.825 3.5-7a2832.4 2832.4 0 0 1 27-41.5 1811.9 1811.9 0 0 0-53 21l44-37a9381.4 9381.4 0 0 0-58 5 2011.9 2011.9 0 0 1 55-23 2235.9 2235.9 0 0 0-58-12c19.632-2.33 39.299-4.33 59-6a1882.8 1882.8 0 0 0-51-28 4283.8 4283.8 0 0 0 57 10 1101.1 1101.1 0 0 0-39-40 1513.5 1513.5 0 0 1 50 26.5c-4.748-11.836-10.414-23.502-17-35a342.98 342.98 0 0 0-8-15.5 343.96 343.96 0 0 1 17 15.5 275.73 275.73 0 0 0 23.5 25 98.35 98.35 0 0 0-3.5-25 3732.5 3732.5 0 0 0-5.5-33 507307 507307 0 0 0 16.5 33 285.31 285.31 0 0 0 10.5 20 68.944 68.944 0 0 0 2.5-20 45851 45851 0 0 0 5.5-38 2258.3 2258.3 0 0 1 6.5 38z' fill='#fbd11b' /><path d='m29.5 175.5h167c6.586 11.498 12.252 23.164 17 35a1513.5 1513.5 0 0 0-50-26.5 1101.1 1101.1 0 0 1 39 40 4283.8 4283.8 0 0 1-57-10 1882.8 1882.8 0 0 1 51 28 1766.8 1766.8 0 0 0-59 6 2235.9 2235.9 0 0 1 58 12 2011.9 2011.9 0 0 0-55 23 9381.4 9381.4 0 0 1 58-5l-44 37a1811.9 1811.9 0 0 1 53-21 2832.4 2832.4 0 0 0-27 41.5h-151c-14.562-39.902-18.062-80.902-10.5-123 2.222-12.816 5.722-25.149 10.5-37z' fill='#fffefe' opacity='.997' /><path d='M205.5 175.5h20a98.35 98.35 0 013.5 25 275.733 275.733 0 01-23.5-25z' fill='#fffdf9' /><path d='m236.5 175.5h13a68.944 68.944 0 0 1-2.5 20 285.31 285.31 0 0 1-10.5-20z' fill='#fffdf5' /><path d='m261.5 175.5h13a134.5 134.5 0 0 1-9 20c-1.338-6.704-2.672-13.371-4-20zm24 0h20a274.71 274.71 0 0 1-22.5 26c0.763-8.636 1.597-17.303 2.5-26z' fill='#fffefa' /><path d='m314.5 175.5h167c14.562 39.902 18.062 80.902 10.5 123-2.222 12.816-5.722 25.149-10.5 37h-149a608.35 608.35 0 0 1-30-40.5l55 19a1985 1985 0 0 0-44-33.5c1.765-0.961 3.765-1.295 6-1 14.657 0.862 29.324 1.529 44 2 2.466 1.134 5.133 1.301 8 0.5-0.544-0.717-1.211-1.217-2-1.5a835.94 835.94 0 0 1-53-19 1724 1724 0 0 1 56-14.5 4417.4 4417.4 0 0 1-57-4 1826.3 1826.3 0 0 1 49-30 1709.5 1709.5 0 0 0-56 13l40-44a804.41 804.41 0 0 0-50.5 30.5 228.96 228.96 0 0 1 16.5-37z' fill='#fffefe' opacity='.997' /><path d='M319.5 279.5c-2.235-.295-4.235.039-6 1-.789-.283-1.456-.783-2-1.5 2.867-.801 5.534-.634 8 .5z' fill='#fee990' /><path d='M369.5 280.5c.789.283 1.456.783 2 1.5-2.867.801-5.534.634-8-.5 2.235.295 4.235-.039 6-1z' fill='#feefb2' /><path d='m212.5 335.5h-27a31149 31149 0 0 0 34-29l1 1a665.83 665.83 0 0 0-8 28zm114 0h-28a288.52 288.52 0 0 0-10-28.5 437.88 437.88 0 0 1 38 28.5z' fill='#fffefb' /><path d='M237.5 335.5h-14a381.692 381.692 0 0113.5-22c.5 7.326.666 14.659.5 22z' fill='#fffdf9' /><path d='M287.5 335.5h-14c-1.155-6.821-1.321-13.821-.5-21a434.9 434.9 0 0114.5 21z' fill='#fffdf6' /><path d='m261.5 335.5h-12a123.65 123.65 0 0 1 5.5-19 634.78 634.78 0 0 0 6.5 19z' fill='#fffdf5' /><path d='M29.5 335.5h151c-1.754 2.175-2.921 4.508-3.5 7a46.198 46.198 0 018.5-7h27a160.581 160.581 0 00-6.5 26 237.519 237.519 0 0117.5-26h14a649.489 649.489 0 001.5 36 704.36 704.36 0 0110.5-36h12a2146.38 2146.38 0 0011.5 35c.5-11.662.667-23.329.5-35h14a257.26 257.26 0 0118.5 25 153.331 153.331 0 00-7.5-25h28a72.484 72.484 0 018.5 6c-.483-2.037-1.316-4.037-2.5-6h149c-22.467 62.306-63.467 108.139-123 137.5-56.832 25.473-115.166 29.473-175 12C118.941 463.654 71.107 422.821 40 362.5a190.338 190.338 0 01-10.5-27z' fill='#29a85d' opacity='.998' /></svg> کوردی</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}