import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Preview from '../components/preview'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          permalink
          title
          date(formatString: "MMMM Do, YYYY")
          draft
        }
        excerpt(format: HTML)
        timeToRead
      }
    }
  }
`

export default function BlogPage({ data }) {
  const { nodes } = data.allMarkdownRemark

  const recentTitles = nodes
    .slice(1, 4)
    .map((node) => ` ${node.frontmatter.title}`)
  const meta = {
    title: 'Blog - Steven Kneiser',
    description: `The blog of Steven Kneiser:${recentTitles}, & more`,
  }

  return (
    <Layout meta={meta}>
      <h1>Most Recent</h1>

      <div className='mt-16 flex flex-wrap justify-evenly content-around items-center'>
        {nodes.map((node) => (
          <Preview key={node.frontmatter.permalink} node={node} />
        ))}
      </div>
    </Layout>
  )
}
