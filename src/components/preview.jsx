import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import texture from '../assets/img/exclusive-paper.png'

export default function Preview({ date, href, title, blurb, source, draft }) {
  const dayOfYear = date
    .toLocaleString('en-US', { dateStyle: 'long' })
    .split(',')[0]
  const currentYear = new Date().getFullYear()
  const year = date.getFullYear()

  const tiltStyle = (num) => {
    if (num % 3 === 0) {
      return 'transform self-center'
    }
    if ((num + 1) % 3 === 0) {
      return 'transform self-center rotate-2'
    }
    return 'transform self-center -rotate-2'
  }

  const cardType = () => {
    const classNames = ['my-80', 'postit']

    // Explicitly name TailwindCSS classes, so they don't get stripped from production builds
    const bgColors = {
      internal: draft ? 'bg-yellow-100' : 'bg-yellow-300',
      cwc: draft ? 'bg-green-100' : 'bg-green-300',
    }
    classNames.push(bgColors[source])

    return classNames.join(' ')
  }

  return (
    <div className={tiltStyle(title.length)}>
      <div
        className={cardType()}
        style={{ backgroundImage: `url(${texture})` }}
      >
        <p className='my-1 text-left font-mono transform -rotate-6 italic'>
          {dayOfYear},{' '}
          <span
            className={
              year === currentYear
                ? ''
                : 'inline-block rounded-lg px-1 text-yellow-800 italic'
            }
          >
            {year}
          </span>
        </p>

        {draft ? (
          <p className='mt-4 text-right font-mono'>🔒 draft in progress</p>
        ) : null}

        {source === 'internal' ? (
          <Link to={href}>
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
        ) : (
          <a href={href}>
            <h2
              className={
                draft
                  ? 'text-3xl text-gray-500 mt-4'
                  : 'text-3xl text-blue-700 mt-8'
              }
            >
              {title}
            </h2>
          </a>
        )}

        <div
          className='text-left'
          dangerouslySetInnerHTML={{ __html: blurb }}
        />
      </div>
    </div>
  )
}

Preview.propTypes = {
  date: PropTypes.node.isRequired, // Date object (TODO: simplify)
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  draft: PropTypes.bool.isRequired,
}
