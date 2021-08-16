import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'


export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        permalink
        title
        date
      }
      excerpt
      timeToRead
    }
  }
}
`

export default function BlogPage({ data }) {
  const { nodes } = data.allMarkdownRemark
  console.log(nodes)

  return (
    <Layout>
      <h1>Most Recent</h1>

      <ul>
        {nodes.map(({
          frontmatter: { permalink, title, date },
          excerpt,
          timeToRead
        }) => (
          <li key={permalink} className="my-24">
            <Link to={permalink}><h2 className="text-4xl">{title}</h2></Link>
            <h3 className="-mt-8 -mb-4">{date}</h3>

            <p>{excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
