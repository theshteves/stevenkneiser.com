import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

/*
export const query = graphql`
query($id: String!) {
  allMdx(filter: {id: { eq: $id}}) {
    nodes {
      frontmatter {
        date
        permalink
        title
      }
      timeToRead
      body
    }
  }
}
`


export default function Template({ data }) {
  const { frontmatter, timeToRead, body } = data.allMarkdownRemark.nodes[0]
  const { date, permalink, title } = frontmatter

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <h3>Read Time: { timeToRead }</h3>

      <pre>{JSON.stringify(body, null, 4)}</pre>
    </Layout>
  )
}
*/
