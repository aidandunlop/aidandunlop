import React, { useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { useStyledDarkMode, ThemeSetting } from 'gatsby-styled-components-dark-mode';

import Header from './header';
import { rhythm } from '../utils/typography';
import { GlobalStyle } from '../utils/theme';

import 'fontsource-bungee';

const GlobalWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(40)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  
  @media print {
    padding: ${rhythm(0.7)} ${rhythm(1.4)};
    max-width: ${rhythm(50)};
  }
`;

const Layout = withTheme((props) => {
  const { theme, children } = props;
  const { changeThemeSetting } = useStyledDarkMode();

  useEffect(() => changeThemeSetting(ThemeSetting.SYSTEM), []);

  return (
    <GlobalWrapper>
      <GlobalStyle theme={theme} />
      <Header />
      <main>{children}</main>
    </GlobalWrapper>
  );
});

export default Layout;
