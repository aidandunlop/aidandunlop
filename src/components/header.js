import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Tooltip from 'rc-tooltip';

import { scale } from '../utils/typography';
import Title from './title';
import Emoji from './emoji';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  @media print {
    display: none;
  }
`;

const StyledEmoji = styled.div`
  ${scale(0.6)}
  @media only screen and (min-width: 768px) {
    ${scale(1.2)}
  }
  cursor: pointer;
  margin-left: auto;
  text-shadow: 0px 0px 30px ${(props) => props.theme.toggleShadowColor};
  position: relative;
  p {
    margin: 0;
  }
`;
const Tip = styled.div`
  border-radius: 5%;
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.mainColor};
  padding: 6px 10px;

  ::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${(props) => props.theme.secondaryColor}
      transparent;
  }
`;
// TODO: move dark mode toggle to separate component
const renderEmoji = (themeContext) => {
  const { label, symbol } = themeContext.isDark
    ? { label: 'light mode', symbol: '🌝' } : { label: 'dark mode', symbol: '🌚' };
  return <Emoji label={label} symbol={symbol} />;
};

function DarkModeToggle() {
  const themeContext = useContext(ThemeContext);
  return (
    <Tooltip
      placement="bottom"
      trigger={['hover']}
      overlay={<Tip>toggle theme</Tip>}
      defaultVisible={false}
      destroyTooltipOnHide
      overlayStyle={{ position: 'absolute' }}
    >
      <StyledEmoji
        role="img"
        aria-label="toggle theme"
        onClick={() => themeContext.toggleDark()}
      >
        {renderEmoji(themeContext)}
      </StyledEmoji>
    </Tooltip>
  );
}

function Header() {
  return (
    <StyledHeader>
      <Title />
      <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
