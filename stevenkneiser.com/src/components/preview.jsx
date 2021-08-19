import React from 'react'
import { Link } from 'gatsby'

import texture from '../assets/img/exclusive-paper.png'


export default function Preview({ node }) {
  const { frontmatter, excerpt, timeToRead } = node
  const { permalink, title, date } = frontmatter

  return (
    <div className={ timeToRead % 2
      ? (timeToRead === 1 ? 'self-center' : 'transform -rotate-2 self-center' )
      : 'transform rotate-1 self-center'
    }>
      <div className="my-80 postit bg-yellow-300" style={{ backgroundImage: `url(${texture})` }} >
        <p className="my-1 text-left font-mono">{date}</p>
        <p className="my-1 text-right font-mono -mt-8">({timeToRead} { timeToRead === 1 ? 'minute' : 'minutes' })</p>

        <Link to={permalink}><h2 className="text-3xl text-blue-700">{title}</h2></Link>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>
    </div>
  )
}
