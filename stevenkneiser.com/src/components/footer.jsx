import React from 'react'

import Embed from './ConvertKit/embed'
// import Register from './register'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-yellow-50 via-yellow-400 to-yellow-500 p-4 text-center z-40'>
      <h2 className='font-bold text-4xl'>
        Want the best
        <br />
        <span className='italic'>of the best?</span>
      </h2>
      <p className='w-full mx-auto text-black'>
        Every Sunday, I send a brief update with the most fascinating things
        that I&apos;ve uncovered around the web
        <br />
        <br />
        Subscribe now &{' '}
        <span className='font-bold'>
          I&apos;ll send you my Top-10 most-shared links of all time
        </span>
      </p>

      <Embed />
      <p className='italic font-extralight text-black mx-auto -mt-2 mb-8'>
        Absolutely no spam, ever.
        <br />
        Unsubscribe anytime.
      </p>
      {/* <Register /> */}
    </footer>
  )
}
