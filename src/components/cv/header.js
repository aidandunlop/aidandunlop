import React from 'react';
import styled from 'styled-components';

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

const Header = () => (
  <StyledHeader>
    <HideOnWeb>
      <Title />
    </HideOnWeb>
    <Contact />
  </StyledHeader>
);

export default Header;
