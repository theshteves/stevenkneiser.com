import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          permalink
          title
          date
          draft
        }
        timeToRead
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
  return (
    <Layout>
      <pre className='font-mono'>
        {JSON.stringify(data, null, 2)}
      </pre>
    </Layout>
  )
}
