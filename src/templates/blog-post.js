import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';

import Bio from '../components/bio';
import SEO from '../components/seo';

function BlogPostTemplate({ data, pageContext }) {
  const { mdx: post } = data;
  const { previous, next } = pageContext;
  const { title, description, date } = post.frontmatter;
  return (
    <>
      <SEO
        title={title}
        description={description || post.excerpt}
      />
      <article>
        <header>
          <hr />
          <h1>
            {title}
          </h1>
          <p>
            {date}
          </p>
        </header>
        {/* <MDXRenderer>{post.body}</MDXRenderer> */}
        <hr />
      </article>

      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <hr />
      <footer>
        <Bio />
      </footer>
    </>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    site: {
      siteMetadata: {
        title: PropTypes.string,
      },
    },
    mdx: PropTypes.shape(), // TODO: Make proper proptypes
    allMdx: PropTypes.shape(), // TODO: Make proper proptypes
  }).isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.shape(),
    previous: PropTypes.shape(),
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
      }
    }
  }
  `;
