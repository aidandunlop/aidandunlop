import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';

// const siteTitle = data.site.siteMetadata.title;
const NotFoundPage = () => (
  <>
    <SEO title="404: Not Found" />
    <h1>Uh oh :( </h1>
    <p>
      This page doesn&apos;t exist - try going
      {' '}
      <Link to="/">Home</Link>
    </p>
  </>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
