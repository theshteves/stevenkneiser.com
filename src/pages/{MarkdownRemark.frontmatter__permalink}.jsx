import PropTypes from 'prop-types'
import React from 'react'
import { graphql, Link } from 'gatsby'

// import Poke from '../components/Pageclip/poke'
import Layout from '../components/layout'
import TableOfContents from '../components/toc'

export const query = graphql`
  query ($id: String!) {
    allMarkdownRemark(filter: { id: { eq: $id } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          permalink
          title
          draft
        }
        excerpt
        timeToRead
        tableOfContents
        html
      }
    }
  }
`

export default function Template({ data }) {
  const { frontmatter, excerpt, timeToRead, tableOfContents, html } =
    data.allMarkdownRemark.nodes[0]
  const { date, title, draft } = frontmatter

  const meta = {
    title: `${title} - Steven Kneiser`,
    description: excerpt,
  }

  return (
    <Layout meta={meta}>
      <h1>{title}</h1>
      <div className='mb-16'>
        <p className='font-mono my-0'>
          Last updated {date}
          <br />
          {timeToRead}
          -min read
        </p>
      </div>

      {draft ? (
        <>
          <p className='font-bold'>
            This is a draft in progress
            <br />
            <em>so scroll at your own risk</em>
          </p>

          {/* <Poke /> */}

          <figure className='flex my-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
            <div className='px-4'>✍️ </div>
            <Link to='/blog'>Return to /blog</Link>
          </figure>

          <div className='text-9xl leading-none'>
            🚧
            <div
              className='inline-block ml-12'
              style={{ animation: '4s elevate infinite linear alternate' }}
            >
              🏗
            </div>
            <br />
            <span className='inline-block transform rotate-3'>🚧🚧</span>
          </div>

          <img
            src='/coffee-splatter-9.png'
            alt='Coffee Splatter 9'
            className='w-10/12'
          />
        </>
      ) : null}

      <article className='max-w-screen-md mx-auto'>
        {tableOfContents ? (
          <TableOfContents contents={tableOfContents} />
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <div className='max-w-screen-md mx-auto'>
        <figure className='flex mt-24 mb-8 text-2xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
          <div className='px-4'>✍️ </div>
          <Link to='/blog'>Return to /blog</Link>
        </figure>
      </div>
    </Layout>
  )
}

Layout.propTypes = {
  data: PropTypes.exact({
    nodes: PropTypes.arrayOf({
      frontmatter: PropTypes.object.isRequired,
      timeToRead: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

Layout.defaultProps = {}
