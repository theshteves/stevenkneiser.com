import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

export default function MdxPage() {
  const data = useStaticQuery(graphql`
    query MarkdownQuery {
      allMdx {
        nodes {
          slug
          frontmatter {
            permalink
            title
            svg
          }
          timeToRead
        }
      }
    }
  `)

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

/*
import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
*/
