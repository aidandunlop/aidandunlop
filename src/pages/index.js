import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import CV from './cv.mdx';

function Home() {
  return (
    <>
      <SEO title="Home" />
      <CV />
    </>
  );
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
