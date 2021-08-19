import React from 'react'

import Embed from './ConvertKit/embed'
// import Register from './register'


export default function Footer() {
  return (
    <footer className='mt-8 bg-gradient-to-b from-yellow-50 via-yellow-400 to-yellow-500 p-4 text-center z-40'>
      <h2 className='font-bold text-4xl'>
        Want the best
        <br />
        <span className='italic'>...of the best?</span>
      </h2>
      <p className='w-full mx-auto text-black'>
        Enter your email &{' '}
        <span className='font-bold'>
          I&apos;ll send you my Top 10 &quot;most shared&quot; links of all time
        </span>
        <br /><br />
        Every Sunday, I send a brief summary of the most fascinating things I notice around the web
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
