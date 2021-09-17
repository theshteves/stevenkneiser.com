import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Preview from '../components/preview'

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          permalink
          title
          draft
        }
        excerpt(format: HTML)
        timeToRead
      }
    }

    allCwc(sort: { fields: date, order: DESC }) {
      nodes {
        date
        url
        title
        excerpt
      }
    }
  }
`

export default function BlogPage({ data }) {
  // Merge all content, sorted by date
  const personalBlog = data.allMarkdownRemark.nodes.map((node) => ({
    date: new Date(`${node.frontmatter.date} 16:00`),
    href: node.frontmatter.permalink,
    title: node.frontmatter.title,
    blurb: node.excerpt,
    source: 'internal',
    draft: node.frontmatter.draft,
  }))
  const cwcBlog = data.allCwc.nodes.map((node) => ({
    date: new Date(`${node.date} 16:00`),
    href: node.url,
    title: node.title,
    blurb: `<p>${node.excerpt}</p>`,
    source: 'cwc',
    draft: false,
  }))
  const previews = personalBlog.concat(cwcBlog).sort((a, b) => b.date - a.date)

  const recentTitles = personalBlog
    .slice(1, 4) // Get 3  most recent (exluding /now)
    .map((preview) => ` ${preview.title}`)
  const meta = {
    title: 'Blog - Steven Kneiser',
    description: `The blog of Steven Kneiser:${recentTitles}, & more`,
  }

  return (
    <Layout meta={meta}>
      <h1>Most Recent</h1>

      <div className='mt-16 flex flex-wrap justify-evenly content-around items-center'>
        {previews.map(({ date, href, title, blurb, source, draft }) => (
          <Preview
            key={href}
            date={date}
            href={href}
            title={title}
            blurb={blurb}
            source={source}
            draft={draft}
          />
        ))}
      </div>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        nodes: PropTypes.arrayOf([
          PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              permalink: PropTypes.string,
              title: PropTypes.string,
              draft: PropTypes.string,
            }),
            excerpt: PropTypes.string,
            timeToRead: PropTypes.number,
          }),
        ]),
      }),
    }),
    PropTypes.shape({
      allCwc: PropTypes.shape({
        nodes: PropTypes.arrayOf([
          PropTypes.shape({
            date: PropTypes.string,
            url: PropTypes.string,
            title: PropTypes.string,
            excerpt: PropTypes.string,
          }),
        ]),
      }),
    }),
  ]).isRequired,
}
