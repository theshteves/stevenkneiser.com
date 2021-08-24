import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Calendly from '../components/calendly'
import construction from '../assets/img/construction.webp'

export default function IndexPage() {
  return (
    <Layout title="Hi, I'm Steven Kneiser">
      <figure className='py-8'>
        <h1 className='text-center'>
          stevenkneiser.com
          <br />
          <span className='font-thin italic bg-gradient-to-tr from-yellow-50 via-yellow-50 to-yellow-500 inline-block transform -translate-y-1'>
            &nbsp; &nbsp; under construction &nbsp;
          </span>
        </h1>

        <div className='my-8 text-9xl leading-none text-center'>
          🚧
          <div
            className='inline-block ml-12'
            style={{ animation: '4s elevate infinite alternate' }}
          >
            🏗
          </div>
          <br />
          <span className='inline-block transform rotate-3'>🚧🚧</span>
        </div>
      </figure>

      <div>
        <h2 className='text-xl leading-snug'>
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
              ...weee
              <span className='font-thin text-gray-400'>eeeeeeeeee</span>
              <span className='filter blur'>ee</span>
              💥
            </span>
          </span>
        </h2>

        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>👤 </div>
          <Link to='/about'>More /about me</Link>
        </figure>
        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>📆 </div>
          <Link to='/now'>What I’m doing /now</Link>
        </figure>
        <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>✍️ </div>
          <Link to='/blog'>Recent /blog writing</Link>
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
