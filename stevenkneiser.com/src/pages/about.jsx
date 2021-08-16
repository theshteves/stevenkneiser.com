import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import theshteves from '../assets/img/theshteves-transparent.webp'
import fart from '../assets/fart.mp3'
import coffee from '../assets/img/coffee/coffee-splatter-6.png'
import coffee2 from '../assets/img/coffee/coffee-splatter-7.png'


// TODO: position as /start-here from / homepage
export default function AboutPage() {
  const play = (e) => {
    document.getElementById('best-sfx').play();
  }

  return (
    <Layout>
      <p className="italic">Like me,<br />this page is a work-in-progress</p>

      <h2 id='me-in-10-seconds'>Me in 10 seconds</h2>
      <img src={coffee} alt="Coffee Splatter 6" className="w-1/4" />

      <h2 id='me-in-10-minutes'>Me in 10 minutes</h2>
      <img src={coffee2} alt="Coffee Splatter 7" className="w-1/2" />


      <figure className='flex my-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
        <div className='px-4'>📆 </div>
        <Link to='/now'>What I’m up to /now</Link>
      </figure>

      <img src={theshteves} className="mx-auto absolute top-16 right-0 block transform rotate-12 w-1/2 md:w-2/5 opacity-80 z-0" onClick={play} onMouseOver={play} />
      <audio id="best-sfx"><source src={fart} type="audio/mpeg" /></audio>
    </Layout>
  )
}
