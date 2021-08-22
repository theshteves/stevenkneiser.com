import { env } from 'process'

import React from 'react'
import Helmet from 'react-helmet'

export default function Head() {
  const production = env.NODE_ENV === 'production'

  return (
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        httpEquiv='Content-Security-Policy'
        content='upgrade-insecure-requests'
      />

      {/*
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dekko&display=swap" rel="stylesheet" />
      */}

      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='../assets/ico/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='../assets/ico/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='../assets/ico/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='../assets/ico/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='../assets/ico/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='../assets/ico/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='../assets/ico/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='../assets/ico/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='../assets/ico/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='../assets/ico/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='../assets/ico/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='../assets/ico/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='../assets/ico/favicon-16x16.png'
      />
      <link rel='manifest' href='../assets/ico/manifest.json' />
      <meta name='msapplication-TileColor' content='#ded5c4' />
      <meta
        name='msapplication-TileImage'
        content='../assets/ico/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ded5c4' />
    </Helmet>
  )
}
