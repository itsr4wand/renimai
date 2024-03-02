//
//! > By itsR4wand
//* (c) 2024
//

import { useEffect } from 'react';

const DocumentMeta = ({ title, description }) => {
  useEffect(() => {
    // Set the document title
    document.title = title;

    // Remove existing meta tags added by DocumentMeta
    const existingMetaTags = document.querySelectorAll('meta[data-react-meta="true"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Create and append new description meta tag
    const descriptionMeta = document.createElement('meta');
    descriptionMeta.name = 'description';
    descriptionMeta.content = description;
    descriptionMeta.setAttribute('data-react-meta', 'true'); // Unique identifier
    document.head.appendChild(descriptionMeta);

  }, [title, description]);

  return null;
};

export default DocumentMeta;
