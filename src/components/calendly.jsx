import React from 'react'
import { openPopupWidget } from 'react-calendly'

import * as calendlyStyles from './calendly.module.css'
import theshteves from '../assets/img/theshteves-transparent.webp'

export default function Calendlyt() {
  const onClick = () => openPopupWidget('https://calendly.com/kneiser/30min')

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
        onClick={onClick}
        onKeyDown={onClick}
        className={calendlyStyles.popup}
      >
        <img src={theshteves} alt='theshteves' />
      </button>

      {/*
      <div id="scheduler" style="background-color: #555"></div>
      <script defer type="text/javascript">
      window.addEventListener('DOMContentLoaded', function() {
        document.getElementById('theshteves').addEventListener('click', function() {
          Calendly.initInlineWidget({
            url: 'https://calendly.com/kneiser/30min',
            parentElement: document.getElementById('scheduler'),
            branding: false
          });
        });
      });
      </script>
      */}
    </>
  )
}
