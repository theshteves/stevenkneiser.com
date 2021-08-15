import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'
import Footer from './footer'


export default function Layout({ children }) {
  return (
    <div id="layout" className="w-screen">
      <NavBar />

      <main className='md:container md:mx-auto p-4 pt-20 min-h-screen'>
        {children}
      </main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
