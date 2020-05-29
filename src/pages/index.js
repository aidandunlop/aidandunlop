import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const Home = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  // TODO: make this MDX
  return (
    <>
      <SEO title="Home" />
      <div style={{ marginTop: rhythm(2) }}>
        <Bio />
      </div>
      <p>
        Feel free to check out my
        {' '}
        <Link to="/cv">CV</Link>
        .
      </p>
      <hr />
      <h3>Recent posts:</h3>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <small>{node.frontmatter.date}</small>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    site: {
      siteMetadata: {
        title: PropTypes.string,
      },
    },
    allMarkdownRemark: PropTypes.object, // TODO: Make proper proptypes
  }).isRequired,
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
