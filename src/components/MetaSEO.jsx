//
//! > By itsR4wand
//* (c) 2024
//
//! Component for setting SEO metadata for the page
//* This component generates meta tags for SEO purposes including Open Graph and Twitter metadata
//

// Importing necessary modules
import { Helmet } from 'react-helmet-async'
import Thumb from '../assets/imgs/thumb.png'
import PropTypes from 'prop-types';

// Defining the App component
export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={Thumb} />
      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={window.location.href} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={Thumb} />
    </Helmet>
  )
}

// Prop types validation
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}