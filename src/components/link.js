import React from 'react';
import PropTypes from 'prop-types';
import { Link as InternalLink } from 'gatsby';

const Link = ({ children, external, to }) => {
  const isExternal = external || to.startsWith('http') || to.startsWith('www');
  return (
    isExternal
      ? <a href={to}>{children}</a>
      : (
        <InternalLink to={to}>
          {children}
        </InternalLink>
      )

  );
};

Link.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  to: PropTypes.string,
};

Link.defaultProps = {
  children: '',
  external: false,
  to: '',
};

export default Link;
