//
//! > By itsR4wand
//* (c) 2024
//

import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  )
}