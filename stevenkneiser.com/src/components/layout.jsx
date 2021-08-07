import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
}
