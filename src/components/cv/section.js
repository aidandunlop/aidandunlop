import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion } from 'react-accessible-accordion';

const StyledTitle = styled.h3`
  color: ${(props) => props.theme.linkColor};
`;

const SectionWrapper = styled.div`
  @media print {
    display: ${(props) => (props.skipPDF ? 'none' : 'block')};

  }
  ul {
    margin-bottom: 0;
    list-style-type: circle;
  }
  li {
    margin-bottom: 0.1rem;
  }
  div {
    margin-left: ${(props) => (props.isSingle ? '10px' : '0')};
  }
`;

const Section = ({
  children, noHR, preExpanded, isSingle, skipPDF, title, useAccordion,
}) => {
  const wrappedChildren = useAccordion ? (
    <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={[preExpanded]}>
      {children}
    </Accordion>
  ) : <>{children}</>;
  return (
    <SectionWrapper skipPDF={skipPDF} isSingle={isSingle}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {wrappedChildren}
      {!noHR && <hr />}
    </SectionWrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  noHR: PropTypes.bool,
  preExpanded: PropTypes.string,
  isSingle: PropTypes.bool,
  skipPDF: PropTypes.bool,
  title: PropTypes.string,
  useAccordion: PropTypes.bool,
};

Section.defaultProps = {
  noHR: false,
  preExpanded: '',
  isSingle: false,
  skipPDF: false,
  title: '',
  useAccordion: false,
};
export default Section;
