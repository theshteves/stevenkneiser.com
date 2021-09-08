import * as React from 'react'
import { Link } from 'gatsby'

import * as notFoundStyles from '../styles/404.module.css'

export default function NotFoundPage() {
  const goBack = () => {
    const history = typeof window !== 'undefined' ? window.history : '' // React workaround to access window
    history.back()
  }

  return (
    <div className={notFoundStyles.notFound}>
      <div className={notFoundStyles.noise} />
      <div className={notFoundStyles.overlay} />
      <div className={notFoundStyles.terminal}>
        <h1>
          Error <span className={notFoundStyles.errorcode}>404</span>
        </h1>
        <p className={notFoundStyles.output}>
          The page you&apos;re looking for
          <br />
          might have been removed,
          <br />
          had its name changed,
          <br />
          or is temporarily unavailable
        </p>
        <p className={notFoundStyles.output}>
          Please try to{' '}
          <button type='button' onClick={goBack} onKeyDown={goBack}>
            go back
          </button>
          <br />
          or <Link to='/'>return to the homepage</Link>
        </p>
        <p className={notFoundStyles.output}>Good luck</p>
      </div>
    </div>
  )
}
