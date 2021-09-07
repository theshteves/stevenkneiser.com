import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'
import Footer from './footer'
import Head from './head'

import background from '../assets/img/notebook-dark.png'

export default function Layout({ children, title }) {
  return (
    <div
      id='layout'
      className='w-screen bg-yellow-50'
      style={{ backgroundImage: `url(${background})` }}
    >
      <Head title={title} />
      <NavBar />

      <main className='p-4 pt-20 min-h-screen md:container md:mx-auto'>
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

Layout.defaultProps = {
  title: 'stevenkneiser.com',
}
