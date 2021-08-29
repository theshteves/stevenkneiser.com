import React from 'react'
import { Link } from 'gatsby'

import texture from '../assets/img/exclusive-paper.png'

export default function Preview({ node }) {
  const { frontmatter, excerpt, timeToRead } = node
  const { permalink, title, date, draft } = frontmatter

  return (
    <div
      className={
        timeToRead % 2
          ? timeToRead === 1
            ? 'self-center'
            : 'transform -rotate-2 self-center'
          : 'transform rotate-1 self-center'
      }
    >
      <div
        className={ draft ? 'my-80 postit bg-yellow-100' : 'my-80 postit bg-yellow-300' }
        style={{ backgroundImage: `url(${texture})` }}
      >
        <p className='my-1 text-left font-mono'>{date}</p>
        <p className='my-1 text-right font-mono -mb-8'>
          ({timeToRead}-min read)
        </p>

        <Link to={permalink}>
          <h2 className={draft ? 'text-3xl text-gray-500' : 'text-3xl text-blue-600' }>{title}</h2>
        </Link>
        <div className="text-left" dangerouslySetInnerHTML={{ __html: excerpt }} />

        { draft ? <p className='my-1 text-center font-mono font-bold'>[incomplete draft]</p> : null }
      </div>
    </div>
  )
}
