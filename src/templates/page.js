import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class PageTemplate extends React.Component {
  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark

    return (
      <>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(0.5),
              }}
            >
              {post.frontmatter.title}
            </h1>
          </header>
          <hr/>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </article>
      </>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
    }
  }
`
