import React from 'react'

import magnifyingGlass from '../assets/img/magnifying-glass.png'

export default function TableOfContents({ contents }) {
  return (
    <div id="toc" className="group hidden xl:block fixed right-0 mr-24 z-10 -bottom-56 transform hover:-translate-y-96 transition duration-300">
      <img className="absolute top-0 left-0" style={{ transform: "scale(2.5) translate(24%, 22%)", zIndex: "-10" }} src={magnifyingGlass} alt="magnifying glass" />

      <p className="text-2xl font-bold text-center"><span className="group-hover:hidden">Hover here for the<br /></span>Table of Contents</p>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </div>
  )
}
