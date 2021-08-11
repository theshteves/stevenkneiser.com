import * as React from 'react'

import Layout from '../components/layout'
import * as aboutStyles from '../styles/about.module.css'


//TODO: position as /start-here from / homepage

export default function AboutPage() {
  return (
    <Layout>
      <img src="/img/theshteves.webp" alt="profile picture" className={aboutStyles.theshteves} />

      <h2 id="me-in-10-seconds">Me in 10 seconds</h2>
      <ul><li>TODO quickbio</li></ul>
      <br />

      <h2 id="me-in-10-minutes">Me in 10 minutes</h2>
      <ul><li>TODO</li></ul>
      <br  />

      <p>Here’s <a href="/now">what I’m up to /now</a></p>
    </Layout>
  )
}
