import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'
import Footer from './footer'
import Head from './head'

import background from '../assets/img/notebook-dark.png'

export default function Layout({ children, meta }) {
  return (
    <div
      id='layout'
      className='w-screen bg-yellow-50'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Head meta={meta} />
      <NavBar />

      <main className='p-4 pt-20 min-h-screen md:container md:mx-auto'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  meta: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}
