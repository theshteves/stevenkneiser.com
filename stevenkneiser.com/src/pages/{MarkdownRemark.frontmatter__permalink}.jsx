import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'


export const query = graphql`
query($id: String!) {
  allMarkdownRemark(filter: {id: { eq: $id}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        permalink
        title
      }
      timeToRead
      html
    }
  }
}

`


export default function Template({ data }) {
  const { frontmatter, timeToRead, html } = data.allMarkdownRemark.nodes[0]
  const { date, permalink, title } = frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{date}<br />{ timeToRead }-min read</h2>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
