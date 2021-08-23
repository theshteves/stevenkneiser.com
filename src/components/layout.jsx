import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'
import Footer from './footer'
import Head from './head'

export default function Layout({ children, title }) {
  return (
    <div id='layout' className='w-screen'>
      <Head title={title} />
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
  title: PropTypes.string,
}
