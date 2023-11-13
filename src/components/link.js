import React from 'react';
import PropTypes from 'prop-types';
import { Link as InternalLink } from 'gatsby';

function Link({
  children, className, external, to,
}) {
  const isExternal = external || to.startsWith('http') || to.startsWith('www');
  return (
    isExternal
      ? <a href={to}>{children}</a>
      : (
        <InternalLink to={to} className={className}>
          {children}
        </InternalLink>
      )

  );
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
  to: PropTypes.string,
};

Link.defaultProps = {
  children: '',
  className: '',
  external: false,
  to: '',
};

export default Link;
