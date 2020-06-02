import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

const Wrapper = styled.div`
  padding-left: 10px;
  border-left: 2px solid ${(props) => props.theme.linkColor};
  margin-left: 6px;
  @media print {
    border: none;
  }
  `;

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  margin-bottom: 5px;
  transition: background-color 2s;
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  @media print {
    background-color: transparent;
    padding: 0px;
  }
  align-items: center;
  background-color: ${(props) => props.theme.shadowColor};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  transition: none;
  padding: 10px 15px;
  h4 {
    padding: 5px 0;
    margin-bottom: 0;
  }
  
  :focus {
    background-color: ${(props) => props.theme.shadowColor};
    outline-color: ${(props) => props.theme.linkColor};
  }
  :hover {
    background-color: ${(props) => props.theme.shadowHoverColor};
  }
`;

const StyledAccordionPanel = styled(AccordionItemPanel)`
  @media print {
    display: block;
  }
`;

const PlusMinusIcon = styled.div`
  @media print {
    display: none;
  }
  position: relative;
  width: 20px;
  height: 20px;
  
  :before,
  :after{
    border-radius: 10px;
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.secondaryColor};
    transition: transform 0.25s ease-out;
  }

  /* vertical */
  :before{
      top: 0;
      left: 50%;
      width: 4px;
      height: 100%;
      margin-left: -2px;
  }

  /* horizontal */
  :after{
      top: 50%;
      left: 0;
      width: 100%;
      height: 4px;
      margin-top: -2px;
  }
  
  ${({ expanded }) => expanded && `
    cursor: pointer;
    :before { 
      transform: rotate(90deg); 
    }
  `}
`;

const Subsection = ({ children, title }) => (
  <AccordionItem uuid={title}>
    <StyledAccordionItemHeading aria-level={4}>
      <StyledAccordionItemButton>
        <h4>
          {title}
        </h4>
        <AccordionItemState>
          {({ expanded }) => <PlusMinusIcon expanded={expanded} />}
        </AccordionItemState>
      </StyledAccordionItemButton>
    </StyledAccordionItemHeading>
    <StyledAccordionPanel>
      <Wrapper>
        <section>{children}</section>
      </Wrapper>
    </StyledAccordionPanel>
  </AccordionItem>
);

Subsection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Subsection;
