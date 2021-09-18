import PropTypes from 'prop-types'
import React from 'react'

import magnifyingGlass from '../assets/img/magnifying-glass.png'

export default function TableOfContents({ contents }) {
  return (
    <div
      id='toc'
      className='group fixed right-0 -bottom-64 z-10 transform hover:-translate-y-96 transition duration-300 translate-x-1/2 translate-y-0' // xl:block
      style={{
        display: 'none !important',
        height: '800px',
        width: '1014px',
      }}
    >
      <img
        className='absolute top-0 left-0 w-full h-full'
        style={{
          transform: '',
          zIndex: '-10',
          borderRadius: '29%',
        }}
        src={magnifyingGlass}
        alt='magnifying glass'
      />

      <p className='text-2xl font-bold text-center overflow-hidden'>
        <span className='group-hover:hidden'>Hover here for </span>
        <br />
        Table of Contents
      </p>
      <div
        className='absolute left-0 w-80 overflow-hidden'
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </div>
  )
}

TableOfContents.propTypes = {
  contents: PropTypes.element.isRequired,
}
