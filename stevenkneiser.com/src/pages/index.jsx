import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Calendly from '../components/calendly'
import construction from '../images/construction.webp'


export default function IndexPage() {
  return (
    <Layout>
      <figure className="bg-gradient-to-tr from-yellow-50 via-yellow-50 to-yellow-500 py-8">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center">stevenkneiser.com<br /><span className="font-thin italic">under construction</span></h1>

        <div className="my-8 text-9xl leading-none text-center">
          🚧
          <div className="inline-block ml-12 animate-bounce">🏗</div>
          <br />
          <span className="inline-block transform rotate-3">🚧🚧</span>
        </div>
      </figure>

      <h2 className="leading-snug pb-32">Welcome to my new little home <span className="inline-block w-80 text-right">...on <span className="inline-block transform translate-y-4 rotate-12">...the </span><span className="inline-block transform translate-y-14 rotate-45">...internet</span><span className="inline-block transform translate-y-48 rotate-90 translate-x-20">...weee<span className="font-thin text-gray-400">eeeeeeeeee</span></span></span></h2>

      <ul>
        <li><Link to='/about'>⇒ /about</Link></li>
        <li>⇒ /blog (coming soon)</li>
        <li>⇒ /now (coming <em>very</em> soon)</li>
        <li>
          <p>
            ⇒{' '}
            <a href='https://creatorswhocode.com' target='_blank' rel='noreferrer'>
              CreatorsWhoCode
            </a>
            .com
            <br />
            (unsolicited career advice for developers)
          </p>
        </li>
      </ul>

      <img src={construction} alt="construction work" className="m-auto p-12" />

      <Calendly />
    </Layout>
  )
}
