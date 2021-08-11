import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'


export default function DataPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
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
  `)
  console.log(data)

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}
