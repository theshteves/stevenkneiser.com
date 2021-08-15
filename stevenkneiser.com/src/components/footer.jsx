import React from 'react'

import Embed from './ConvertKit/embed'
//import Register from './register'


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-red-500 p-12 text-center">
      <h2 className="font-bold">Get my favorite links of all-time</h2>

      <Embed title="" cta="" />
      {/* <Register /> */}
    </footer>
  )
}
