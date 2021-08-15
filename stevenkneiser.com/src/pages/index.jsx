import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Calendly from '../components/calendly'
import construction from '../assets/img/construction.webp'


export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <link rel="apple-touch-icon" sizes="57x57" href="../assets/ico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="../assets/ico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="../assets/ico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="../assets/ico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="../assets/ico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="../assets/ico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="../assets/ico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="../assets/ico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../assets/ico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="../assets/ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../assets/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="../assets/ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../assets/ico/favicon-16x16.png" />
        <link rel="manifest" href="../assets/ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ded5c4" />
        <meta name="msapplication-TileImage" content="../assets/ico/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ded5c4" />
      </Helmet>

      <figure className='bg-gradient-to-tr from-yellow-50 via-yellow-50 to-yellow-500 py-8'>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl text-center'>
          stevenkneiser.com
          <br />
          <span className='font-thin italic'>under construction</span>
        </h1>

        <div className='my-8 text-9xl leading-none text-center'>
          🚧
          <div className='inline-block ml-12 animate-bounce'>🏗</div>
          <br />
          <span className='inline-block transform rotate-3'>🚧🚧</span>
        </div>
      </figure>

      <h2 className='leading-snug pb-32'>
        Welcome to my new little home{' '}
        <span className='inline-block w-80 text-right'>
          ...on{' '}
          <span className='inline-block transform translate-y-4 rotate-12'>
            ...the{' '}
          </span>
          <span className='inline-block transform translate-y-14 rotate-45'>
            ...internet
          </span>
          <span className='inline-block transform translate-y-48 rotate-90 translate-x-20'>
            ...weee<span className='font-thin text-gray-400'>eeeeeeeeee</span>
            <span className='filter blur'>ee</span>💥
          </span>
        </span>
      </h2>

      <p>
        <Link to='/about'>⇒ /about</Link>
      </p>
      <p>⇒ /blog (coming soon)</p>
      <p>
        ⇒ /now (coming <em>very</em> soon)
      </p>

      {/*
        <p>
          ⇒{' '}
          <a href='https://creatorswhocode.com' target='_blank' rel='noreferrer'>
            CreatorsWhoCode
          </a>
          .com
          <br />
          (unsolicited career advice for developers)
        </p>
        */}

      <img src={construction} alt='construction work' className='m-auto p-12' />

      <Calendly />
    </Layout>
  )
}
