import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function Head({ meta }) {
  const { title, description } = meta
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'headline': title,
    'description': description,
    'url': 'stevenkneiser.com',
  }

  return (
    <Helmet>
      <html lang='en' />
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        httpEquiv='Content-Security-Policy'
        content='upgrade-insecure-requests'
      />

      {/* General metadata */}
      <title>{title}</title>
      <meta name='twitter:title' content={title} />
      <meta property='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='twitter:description' content={description} />
      <meta property='og:description' content={description} />

      <script type='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>

      {/*
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dekko&display=swap" rel="stylesheet" />
      */}

      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/ico/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/ico/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/ico/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/ico/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/ico/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/ico/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/ico/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/ico/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/ico/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/ico/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/ico/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/ico/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/ico/favicon-16x16.png'
      />

      <link rel='manifest' href='/manifest.json' />
      <meta name='theme-color' content='#78350F' />
      {/* <meta name='theme-color' content='#ded5c4' /> */}

      <meta name='msapplication-TileColor' content='#78350F' />
      {/* <meta name='msapplication-TileColor' content='#ded5c4' /> */}
      <meta name='msapplication-TileImage' content='/ico/ms-icon-144x144.png' />
    </Helmet>
  )
}

Head.propTypes = {
  meta: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}
