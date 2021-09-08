import React from 'react'
import { Link } from 'gatsby'

import texture from '../assets/img/exclusive-paper.png'

export default function Preview({ node }) {
  const { frontmatter, excerpt, timeToRead } = node
  const { permalink, title, date, draft } = frontmatter
  const dayOfYear = date.split(',')[0]
  const year = date.slice(-4)

  const tiltClassName = (num) => {
    if (num === 1) {
      return 'transform self-center'
    }
    if (num % 2) {
      return 'transform -rotate-2 self-center'
    }
    return 'transform rotate-1 self-center'
  }

  return (
    <div className={tiltClassName(timeToRead)}>
      <div
        className={
          draft ? 'my-80 postit bg-yellow-100' : 'my-80 postit bg-yellow-300'
        }
        style={{ backgroundImage: `url(${texture})` }}
      >
        <p className='my-1 text-left font-mono transform -rotate-6 italic'>
          {dayOfYear},{' '}
          <span
            className={
              year === '2021'
                ? ''
                : 'inline-block rounded-lg px-1 text-white bg-yellow-600 italic'
            }
          >
            {year}
          </span>
        </p>

        {draft ? (
          <p className='mt-4 text-right font-mono'>🔒 draft in progress</p>
        ) : null}

        <Link to={permalink}>
          <h2
            className={
              draft
                ? 'text-3xl text-gray-500 mt-4'
                : 'text-3xl text-blue-700 mt-8'
            }
          >
            {title}
          </h2>
        </Link>

        <div
          className='text-left'
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  )
}
