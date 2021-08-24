import PropTypes from 'prop-types'
import React from 'react'

import magnifyingGlass from '../assets/img/magnifying-glass.png'

export default function TableOfContents({ contents }) {
  return (
    <div
      id='toc'
      className='group hidden xl:block fixed right-0 mr-24 z-10 transform hover:-translate-y-96 transition duration-300'
      style={{ bottom: '15%' }}
    >
      <img
        className='absolute top-0 left-0 w-90 h-90'
        style={{
          transform: 'scale(2.5) translate(24%, 22%)',
          zIndex: '-10',
          borderRadius: '29%',
        }}
        src={magnifyingGlass}
        alt='magnifying glass'
      />

      <p className='text-2xl font-bold text-center'>
        <span className='group-hover:hidden'>
          Hover here
          <br />
          for{' '}
        </span>
        Table of Contents
      </p>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </div>
  )
}

TableOfContents.Proptypes = {
  contents: PropTypes.element.isRequired,
}
