import React from 'react'

import Layout from '../components/layout'
import celebration from '../assets/img/office-party.gif'

export default function ThanksPage() {
  const meta = {
    title: 'Thanks - Steven Kneiser',
    description: `Welcome to the newsletter! Every Sunday, I send a brief summary of the most fascinating stuff I find around the web (e.g. the future of work, software, business, etc).`,
  }

  return (
    <Layout meta={meta}>
      <h1>🥳 Woo-hoo! 🎉</h1>
      <p>
        Welcome to the club
      </p>
      <img src={celebration} alt='happy dance' />
      {/*
      <p>
        Many people soak up information, but few commit to actually making a change. I’m going to hold you accountable. But don’t worry, what I’ll be teaching you over the next few weeks is totally doable.
      </p>
      */}

      <h2 className='animate-bounce'>Check your email!</h2>
      <p>
        Be patient with my tiny servers who are very hard at work preparing your email. They&apos;re stacked shoulder-to-shoulder in a crowded data center in the cloud at very cold temperatures so that they do not overheat after giving it their all. They&apos;re about to seal it in a digital envelope of the finest digital paper that digital money can buy. After that, they&apos;ll stamp it with love (& presumably bitcoin) before placing it gently in the digital mailbox. They do not rush perfection. so it may take a few extra milliseconds.
      </p>

      <h2 className='animate-bounce'>Check your email!</h2>
      <p className='text-8xl'>💌</p>
      <p className='inline-block transform rotate-3'>
        Day #1 just kicked off
      </p>
    </Layout>
  )
}
