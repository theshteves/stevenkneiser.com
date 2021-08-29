import React from 'react'
import Helmet from 'react-helmet'

export default function Poke() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://s.pageclip.co/v1/pageclip.css" media="screen" />
      </Helmet>

      <form action="https://send.pageclip.co/DCGdugvSRZScBBtN3Ujw48L8mEI1kqqU/skcom-poke" className="pageclip-form" method="post">

        {/* TODO: set desired fields */}
        <input type="text" name="name" placeholder="Roscoe Jones" />
        <input type="email" name="email" placeholder="roscoe@example.com" />

        <button type="submit" className="pageclip-form__submit">
          <span>👉 Poke me to hurry up & finish this draft 🗣</span>
        </button>
      </form>

      <script defer src="https://s.pageclip.co/v1/pageclip.js" charSet="utf-8"></script>
    </>
  )
}
