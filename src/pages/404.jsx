import * as React from 'react'
import { Link } from 'gatsby'

import * as notFoundStyles from '../styles/404.module.css'

export default function NotFoundPage() {
  return (
    <div className={notFoundStyles.notFound}>
      <div className='noise fullscreen' />
      <div className='overlay fullscreen' />
      <div className='terminal'>
        <h1>
          Error <span className='errorcode'>404</span>
        </h1>
        <p className='output'>
          The page you&apos;re looking for
          <br />
          might have been removed,
          <br />
          had its name changed,
          <br />
          or is temporarily unavailable
        </p>
        <p className='output'>
          Please try to <a href='javascript:history.back()'>go back</a>
          <br />
          or <Link to='/'>return to the homepage</Link>
        </p>
        <p className='output'>Good luck</p>
      </div>
    </div>
  )
}