import React from 'react';
import styled, { withTheme } from 'styled-components';
import Header from './header';
import { rhythm } from '../utils/typography';
import { GlobalStyle } from '../utils/theme';

const GlobalWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(41)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  
  @media print {
    padding: ${rhythm(0.7)} 0;
  }
`;

const Layout = withTheme((props) => {
  const { theme, children } = props;
  return (
    <GlobalWrapper>
      <GlobalStyle theme={theme} />
      <Header />
      <main>{children}</main>
    </GlobalWrapper>
  );
});

export default Layout;
