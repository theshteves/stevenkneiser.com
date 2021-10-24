import React from 'react'

import Embed from './ConvertKit/embed'
// import Register from './register'

export default function Footer() {
  return (
    <footer className='mt-8 bg-gradient-to-b from-yellow-50 via-yellow-400 to-yellow-500 p-4 text-center z-40'>
      <h2 className='text-4xl md:text-6xl'>
        Want the best
        <br />
        <span className='italic'>...of the best?</span>
      </h2>
      <p className='w-full mx-auto text-black'>
        Every Sunday, I send a brief summary
        <span className='md:hidden'>
          <br />
        </span>{' '}
        of the most fascinating stuff
        <span className='md:hidden'>
          <br />
        </span>{' '}
        I find around the web
        <br />
        <br />
        Enter your email
        <span className='md:hidden'>
          <br />
        </span>{' '}
        &{' '}
        <span className='font-bold'>
          I&apos;ll send you my Top 11
          <span className='md:hidden'>
            <br />
          </span>{' '}
          &quot;most shared&quot; links of all time
        </span>
      </p>

      <Embed />

      <p className='italic font-light text-black mx-auto -mt-1 mb-8'>
        Absolutely no spam, ever
        <br />
        Unsubscribe anytime
      </p>

      <p className='w-full mx-auto font-light text-black hidden'>
        &#8220; I&apos;ve said it a million times but
        <span className='md:hidden'>
          <br />
        </span>{' '}
        <span className='font-bold'>I would buy stock in Steven</span> if I
        could &#8221;
        <span className='md:hidden'>
          <br />
        </span>{' '}
        &mdash;anonymous
      </p>
      {/* <Register /> */}
    </footer>
  )
}
