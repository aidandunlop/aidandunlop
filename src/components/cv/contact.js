import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import * as fontawesome from 'react-icons/fa';

import { themePropTypes } from '../../utils/theme';

const Wrapper = styled.div`
  display: flex;
  @media screen {
    flex-direction: column;
    margin: 0 0 10px 10px;
    @media (min-width: 768px) {
      justify-content: space-around;
      flex-direction: row;
      margin: 0 0 10px 0;
    }
  }
  @media print {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledContact = styled.div`
  @media screen {
    display: ${(props) => (props.$hideOnWeb ? 'none' : 'flex')};
  }
  display: flex;
  align-items: center;
  margin-right: 10px;

  :last-child {
    margin-right: 0;
  }

  svg {
      margin-right: 5px;
  }
`;

function Contact({ theme }) {
  const data = useStaticQuery(graphql`
    query CVContactQuery {
      site {
        siteMetadata {
            social {
              email {
                display
                url
                icon
              }
              github {
                display
                url
                icon
              }
              linkedin {
                display
                url
                icon
              }
              website {
                  display
                  renderOnPDFOnly
                  url
                  icon
              }
            }
        }
      }
    }
  `);
  const { social } = data.site.siteMetadata;
  const contact = Object.keys(social).map((key) => social[key]);

  return (
    <Wrapper>
      {contact.map(((link) => {
        const Icon = fontawesome[link.icon];
        return (
          <StyledContact key={link.url} $hideOnWeb={link.renderOnPDFOnly}>
            <Icon size="1.5em" color={theme.linkColor} />
            <a href={link.url}>{link.display}</a>
          </StyledContact>
        );
      }))}
    </Wrapper>
  );
}

Contact.propTypes = {
  ...themePropTypes,
};

export default withTheme(Contact);
