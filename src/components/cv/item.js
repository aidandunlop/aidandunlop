import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media print {
    p {
      margin-bottom: 0;
    }
  }
`;

function Item({
  children, desc, title, time,
}) {
  return (
    <>
      <StyledHeader>
        <p>
          <strong>{title}</strong>
          {' '}
          {desc.length > 0 && desc}
        </p>
        <i style={{ textAlign: 'right' }}>{time}</i>
      </StyledHeader>
      <div>{children}</div>
    </>
  );
}

Item.defaultProps = {
  children: '',
  desc: '',
};

Item.propTypes = {
  children: PropTypes.node,
  desc: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Item;
