import React, { useState, useEffect } from 'react'
import { PopupModal } from 'react-calendly'

import * as calendlyStyles from './calendly.module.css'
import theshteves from '../assets/img/theshteves-transparent.webp'

export default function Calendly({ pageSettings, utm, prefill }) {
  const [isOpen, setOpen] = useState(false)
  const [root, setRoot] = useState(null)

  useEffect(() => {
    // In Gatsby, we need to wait for the document to be available
    if (typeof document !== 'undefined') {
      setRoot(document.getElementById('___gatsby'))
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setOpen(!isOpen)
    }
  }

  return (
    <>
      <link
        href='https://assets.calendly.com/assets/external/widget.css'
        rel='stylesheet'
      />
      <script
        defer
        type='text/javascript'
        src='https://assets.calendly.com/assets/external/widget.js'
      />

      <button
        type='button'
        onClick={() => setOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={calendlyStyles.popup}
      >
        <img src={theshteves} alt='theshteves' />
      </button>
      {root && (
        <PopupModal
          url='https://calendly.com/kneiser/30min'
          pageSettings={pageSettings}
          utm={utm}
          prefill={prefill}
          onModalClose={() => setOpen(false)}
          open={isOpen}
          rootElement={root}
        />
      )}
    </>
  )
}
