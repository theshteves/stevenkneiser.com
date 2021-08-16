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
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='../assets/ico/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='../assets/ico/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='../assets/ico/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='../assets/ico/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='../assets/ico/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='../assets/ico/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='../assets/ico/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='../assets/ico/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../assets/ico/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='../assets/ico/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../assets/ico/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='../assets/ico/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='../assets/ico/favicon-16x16.png'
        />
        <link rel='manifest' href='../assets/ico/manifest.json' />
        <meta name='msapplication-TileColor' content='#ded5c4' />
        <meta
          name='msapplication-TileImage'
          content='../assets/ico/ms-icon-144x144.png'
        />
        <meta name='theme-color' content='#ded5c4' />
      </Helmet>

      <figure className='py-8'>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl text-center'>
          stevenkneiser.com
          <br />
          <span className='font-thin italic bg-gradient-to-tr from-yellow-50 via-yellow-50 to-yellow-500 inline-block transform -translate-y-1'>&nbsp; &nbsp; under construction &nbsp;</span>
        </h1>

        <div className='my-8 text-9xl leading-none text-center'>
          🚧
          <div className='inline-block ml-12' style={{ animation: "4s elevate infinite alternate" }}>🏗</div>
          <br />
          <span className='inline-block transform rotate-3'>🚧🚧</span>
        </div>
      </figure>

      <div>
        <h2 className='leading-snug'>
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

        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>👤 </div>
          <Link to='/about'>More /about me</Link>
        </figure>
        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>✍️ </div>
          <Link to='/blog'>Recent /blog writing</Link>
        </figure>
        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>📆 </div>
          <Link to='/now'>What I’m up to /now</Link>
        </figure>

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
      </div>

      <img src={construction} alt='construction work' className='m-auto p-12' />

      <Calendly />
    </Layout>
  )
}
