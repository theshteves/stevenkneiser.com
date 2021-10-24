import * as React from 'react'
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
        Well{' '}
        <span className='inline-block transform rotate-12 translate-y-8 text-yellow-800 italic animate-pulse'>
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
      <p className='italic'>
        Like me,
        <br />
        this page is a work-in-progress
      </p>

      <h2 id='me-in-10-minutes'>Me in 10 minutes</h2>
      <img src={coffee} alt='Coffee Splatter 7' className='w-1/2' />

      <p>
        You can also find me on{' '}
        <a href='https://twitter.com/theshteves'>Twitter</a>
        <br />
        or write me a note at{' '}
        <a href='mailto:steven@stevenkneiser.com'>steven@stevenkneiser.com</a>
      </p>

      <figure className='flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
        <div className='px-4'>📆 </div>
        <Link to='/now'>What I’m doing /now</Link>
      </figure>
    </Layout>
  )
}
