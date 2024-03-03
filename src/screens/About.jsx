//
//! > By itsR4wand
//* (c) 2024
//

// Importing necessary modules
import Me from '../assets/imgs/me.webp'
import SEO from '../components/MetaSEO.jsx'

// Defining the NotFoundScreen component
export default function NotFoundScreen() {
  // Rendering the component
  return (
    <>
      <SEO
        title='About us - Renimai'
        description='HI👋, iam Rawand. I made roadmap.sh to help developers learn and grow better.' />
      <div className='max-w-4xl mx-auto px-2 lg:px-0 pt-6 pb-12 flex flex-col'>
        <div className="min-w-full flex items-center gap-2">
          <img src={Me} alt="itsr4wand" className='h-24 w-24' title="itsr4wand" />
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold">HI👋, iam Rawand</h1>
            <p className="text-[#646464] text-sm">I made Renimai to help developers learn and grow better.</p>
          </div>
        </div>
        soon...
      </div>
    </>
  )
}