import * as React from 'react'

import * as calendlyStyles from './calendly.module.css'
import theshteves from '../images/theshteves-transparent.webp'


export default function Calendly() {
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
        onClick="Calendly.showPopupWidget('https://calendly.com/kneiser/30min');return false;"
        onKeyDown="Calendly.showPopupWidget('https://calendly.com/kneiser/30min');return false;"
      >
        <img
          src={theshteves}
          alt='theshteves'
          className={calendlyStyles.popup}
        />
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
