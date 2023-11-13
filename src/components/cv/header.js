import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Contact from './contact';
import HideOnWeb from './hide';
import Title from '../title';

const StyledHeader = styled.div`
  @media print {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Header() {
  const data = useStaticQuery(graphql`
  query CVHeaderQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }`);

  const { siteUrl } = data.site.siteMetadata;
  return (
    <StyledHeader>
      <HideOnWeb>
        <Title to={siteUrl} />
      </HideOnWeb>
      <Contact />
    </StyledHeader>
  );
}

export default Header;
