import React from 'react'
import { Link } from 'gatsby'

import texture from '../assets/img/exclusive-paper.png'

export default function Preview({ node }) {
  const { frontmatter, excerpt, timeToRead } = node
  const { permalink, title, date, draft } = frontmatter
  const dayOfYear = date.split(',')[0]
  const year = date.slice(-4)

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
          <p className='mt-4 text-center font-mono'>[draft in progress]</p>
        ) : null}

        <Link to={permalink}>
          <h2
            className={
              draft
                ? 'text-3xl text-gray-500 mt-0'
                : 'text-3xl text-blue-700 mt-4'
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
