import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Calendly from '../components/calendly'


export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-8xl">stevenkneiser.com</h1>

      <div className="m-8 text-9xl leading-none">
        🚧
        <div className="inline-block ml-12 animate-bounce">🏗</div>
        <br />
        🚧🚧
      </div>

      <h2 className="font-bold italic">under construction</h2>

      <ul>
        <li><Link to='/about'>⇒ /about</Link></li>
        <li><Link to='/links'>⇒ /links</Link></li>
        <li><Link to='/now'>⇒ /now ?</Link></li>
        <li>
          <p>
            ⇒{' '}
            <a href='https://creatorswhocode.com' target='_blank' rel='noreferrer'>
              CreatorsWhoCode
            </a>
            .com
            <br />
            (unsolicited career advice [for developers])
          </p>
        </li>
      </ul>


      <Calendly />
    </Layout>
  )
}
