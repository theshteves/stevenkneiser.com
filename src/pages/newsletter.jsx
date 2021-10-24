import React from 'react'

import Layout from '../components/layout'
import Embed from '../components/ConvertKit/embed'

export default function NewsletterPage() {
  // const url = typeof window !== 'undefined' ? window.location.href : ''
  const meta = {
    title: 'Newsletter - Steven Kneiser',
    description: `Join us. Every Sunday, I send a brief summary of the most fascinating stuff I find around the web (e.g. the future of work, software, business, etc).`,
  }

  return (
    <Layout meta={meta}>
      <h1>
        Hear &quot;what&apos;s new&quot;
        <br />
        every week
      </h1>

      <p>
        Every Sunday, I send a brief summary
        <span className='md:hidden'>
          <br />
        </span>{' '}
        of the most fascinating stuff
        <span className='md:hidden'>
          <br />
        </span>{' '}
        I find around the web
      </p>
      <br />

      <Embed className='mx-0' />
    </Layout>
  )
}
