import React from 'react'
import { graphql, Link } from 'gatsby'

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
        timeToRead
        tableOfContents
        html
      }
    }
  }
`

export default function Template({ data }) {
  const { frontmatter, timeToRead, tableOfContents, html } =
    data.allMarkdownRemark.nodes[0]
  const { date, permalink, title, draft } = frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <div className='mb-16'>
        <p className='font-mono my-0'>
          Last updated {date}
          <br />
          {timeToRead}
          -min read
        </p>
      </div>

      { draft ? 
        <>
          <blockquote className="-mt-8 font-mono text-center">
            <p>This is an incomplete draft<br /><em>so browse at your own risk</em><br /></p><p className="text-8xl">☢️</p>
          </blockquote>

          <figure className='flex mb-16 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
            <div className='px-4'>✍️ </div>
            <Link to="/blog">Return to /blog</Link>
          </figure> 

          <img src="/coffee-splatter-9.png" alt="Coffee Splatter 9" className="w-10/12" />
        </>
      : null }

      { tableOfContents ? <TableOfContents contents={tableOfContents} /> : null }

      {/* TODO: ToC
      <div className="postit bg-yellow-300">
        <h2>Table of Contents</h2>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
      </div>
      */}

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <figure className='flex mt-24 mb-8 text-4xl bg-gradient-to-bl from-yellow-50 via-yellow-50 to-yellow-300 w-max p-4 rounded items-center'>
        <div className='px-4'>✍️ </div>
        <Link to='/blog'>Return to /blog</Link>
      </figure>
    </Layout>
  )
}
