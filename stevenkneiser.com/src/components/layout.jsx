import PropTypes from 'prop-types'
import React from 'react'

import NavBar from './navbar'

export default function Layout({ children }) {
  return (
    <div id="layout">
      <NavBar />

      <div className="grid grid-cols-3 gap-x-4 justify-between">
        <div id="leftbar"></div>
        <div id="main" className="">{children}</div>
        <div id="rightbar"></div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
}
