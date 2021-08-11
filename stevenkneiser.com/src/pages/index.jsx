import * as React from 'react'

import Layout from '../components/layout'
import Calendly from '../components/calendly'
import * as indexStyles from '../styles/index.module.css'


export default function IndexPage() {
  return (
    <Layout>
      <h1>stevenkneiser.com</h1>

      <div className={indexStyles.construction}>
        🚧
        <span>🏗</span>
        <br />
        🚧🚧
      </div>

      <h2>
        <strong>
          <em>under construction</em>
        </strong>
      </h2>

      <a href='/about'>⇒ /about</a>
      <br />
      <br />
      <a href='/links'>⇒ /links</a>
      <br />
      <br />
      <a href='/now'>⇒ /now ?</a>
      <br />
      <br />

      <p>
        ⇒{' '}
        <a href='https://creatorswhocode.com' target='_blank' rel='noreferrer'>
          CreatorsWhoCode
        </a>
        .com
        <br />
        (unsolicited career advice [for developers])
      </p>

      <Calendly />
    </Layout>
  )
}
