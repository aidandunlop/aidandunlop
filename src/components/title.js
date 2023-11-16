import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { scale } from '../utils/typography';
import Link from './link';

const StyledTitle = styled.h1`
  ${scale(0.8)}
  margin: 0;
  @media only screen and (min-width: 768px) {
    ${scale(1.5)}
  }
  span {
    color: ${(props) => props.theme.linkColor};
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

function Title({ charactersToColour, to }) {
  const data = useStaticQuery(graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);
  const { title } = data.site.siteMetadata;
  const firstPart = title.substring(0, charactersToColour);
  const secondPart = title.substring(charactersToColour);

  return (
    <StyledLink to={to || '/'}>
      <StyledTitle>
        <span>{firstPart}</span>
        {secondPart}
      </StyledTitle>
    </StyledLink>
  );
}

Title.propTypes = {
  charactersToColour: PropTypes.number,
  to: PropTypes.string,
};

Title.defaultProps = {
  charactersToColour: 5,
  to: '',
};

export default Title;
