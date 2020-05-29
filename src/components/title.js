import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { scale } from '../utils/typography';

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
  :hover {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    transition: transform 3s;
    transition-timing: ease-in-out;
  }
  :hover .gatsby-image-wrapper {
    transform: rotate(-45deg);
  }
`;

const Title = ({ charactersToColour }) => {
  const data = useStaticQuery(graphql`
      query TitleQuery {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `);
  const { siteUrl, title } = data.site.siteMetadata;
  const firstPart = title.substring(0, charactersToColour);
  const secondPart = title.substring(charactersToColour);

  return (
    <StyledLink to={siteUrl}>
      <StyledTitle>
        <span>{firstPart}</span>
        {secondPart}
      </StyledTitle>
    </StyledLink>
  );
};

Title.propTypes = {
  charactersToColour: PropTypes.number,
};

Title.defaultProps = {
  charactersToColour: 5,
};

export default Title;
