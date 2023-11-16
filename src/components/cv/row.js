import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowWrapper = styled.div`
  @media print {
    display: ${(props) => (props.$skipPDF ? 'none' : 'block')};
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

function Section({
  children, skipPDF, title,
}) {
  return (
    <RowWrapper $skipPDF={skipPDF}>
      <h1>{title}</h1>
      {children}
    </RowWrapper>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  skipPDF: PropTypes.bool,
  title: PropTypes.string,
};

Section.defaultProps = {
  skipPDF: false,
  title: '',
};
export default Section;
