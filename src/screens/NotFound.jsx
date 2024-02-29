//
//! > By itsR4wand
//* (c) 2024
//

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className="max-w-3xl mx-auto min-h-[70vh] pt-16 px-6">
        <h1 className="font-bold text-5xl"><span className="text-sm text-[#646464]">404 Error</span> <br />Woops!</h1>
        <p className="text-[#646464] max-w-md mt-2">We can't seem to find the page you are looking for, we'll fix that soon but for now you can return to the home page</p>
        <Link to='/' className="mt-4 bg-[#202020] hover:bg-[#171717] text-white px-5 py-2.5 gap-2 flex items-center justify-center rounded-md sm:w-fit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" /></svg> Take me back</Link>
      </div>
    </>
  )
}

export default NotFound
