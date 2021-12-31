import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import coffee from '../assets/img/coffee/coffee-splatter-7.png'
import sfx from '../assets/fart.mp3'
import theshteves from '../assets/img/theshteves-transparent.webp'

export default function AboutPage() {
  const meta = {
    title: 'About - Steven Kneiser',
    description: `Hi, I'm Steven Kneiser. I help new developers 💃🕺 STAND OUT. Like me, this page is a work-in-progress`,
  }

  const play = () => {
    document.getElementById('best-sfx').play()
  }

  return (
    <Layout meta={meta}>
      <h1>Who am I?</h1>
      <p>
        Well then...{' '}
        <span className='inline-block transform rotate-12 translate-x-2 translate-y-7 text-yellow-800 italic animate-pulse'>
          allow me to introduce myself
        </span>
      </p>
      <button type='button' onClick={play} onKeyDown={play}>
        <img
          src={theshteves}
          className='mx-auto md:absolute top-16 right-16 block transform rotate-12 w-full md:w-2/5 opacity-80 z-10'
          alt='theshteves'
        />
        <audio id='best-sfx'>
          <track src='../assets/sfx.vtt' kind='captions' srcLang='en' />
          <source src={sfx} type='audio/mpeg' />
        </audio>
      </button>

      <h2 id='me-in-10-seconds'>Me in 10 seconds</h2>
      {/*
      <p>
        To numbers-people, I&apos;m the most socialable, extroverted person
        they&apos;ve met. To people-people, I&apos;m the most serious, numerical
        person they&apos;ve met.
        <br />
        I&apos;m an unreasonably optimistic & curious solutionist. citizen of
        the internet. I believe we live in the most opportune moment in history
        & work tirelessly to prove myself worthy of that ancestral debt.
      </p>
    */}
      <p>
        In my daily work,
        <br />
        <strong>I write software <span className='italic'>...AND sell it</span></strong>
      </p>
      <br />

      <p>
        In my free time,
        <br />
        <strong>
          I help new developers
          <br />
          <span className='text-4xl inline-block transform -rotate-3'>💃 𝕊𝕋𝔸ℕ𝔻 &nbsp;🕺 𝕆𝕌𝕋</span>
        </strong>
      </p>
      <br />
      <br />

      <p className='ml-8'>
        <i>&quot;The best way to predict the future<span className='sm:hidden'><br /></span> is to build it.&quot;</i>
      </p>
      <p>Let&apos;s get to work.</p>

      <figure className='ml-8 flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
        <div className='px-4'>📆 </div>
        <Link to='/now'>What I’m doing /now</Link>
      </figure>
      <br />
      <br />



      <h2 id='me-in-10-minutes'>Me in 10 minutes</h2>
      <p>&lt; Coming Soon... &gt;</p>
      <br />

      <p className='italic'>Like me, this page is a work-in-progress</p>
      <img src={coffee} alt='Coffee Splatter 7' className='w-1/2' />

      <p>
        You can also find me on{' '}
        <a href='https://twitter.com/theshteves'>Twitter</a>
        <br />
        or write me a note at{' '}
        <a href='mailto:steven@stevenkneiser.com'>steven@stevenkneiser.com</a>
      </p>

      <figure className='ml-8 flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
        <div className='px-4'>📆 </div>
        <Link to='/now'>What I’m doing /now</Link>
      </figure>
      <br />


    </Layout>
  )
}
