import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'


export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      timeToRead
      fileAbsolutePath
      wordCount {
        words
        paragraphs
        sentences
      }
    }
  }
}
`

export default function DataPage({ data }) {
  return <Layout><pre className="font-mono">{JSON.stringify(data, null, 2)}</pre></Layout>
}
