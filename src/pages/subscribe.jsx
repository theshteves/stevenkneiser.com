import React from 'react'

import Layout from '../components/layout'
import Embed from '../components/ConvertKit/embed'

export default function NewsletterPage() {
  const url = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Layout>
      <h1>
        A personal note
        <br />
        from me to you
        <br />
        every week
      </h1>

      <Embed className='mx-0' />
    </Layout>
  )
}
