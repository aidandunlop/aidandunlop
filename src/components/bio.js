import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import DiscoBall from './disco-ball';

const DiscoLink = styled.span`
  :hover {
    color: ${(props) => props.theme.linkColor};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StopDiscoBanner = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: red;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  const [disco, showDisco] = useState(false);
  // TODO: move stuff to md file
  return (
    <>
      <p>
        Hello! I&apos;m
        {' '}
        <strong>{author}</strong>
        , a software engineer with a keen
        interest in Artificial Intelligence, Computer Vision, and Machine
        Learning.
      </p>
      <p>
        On the side I enjoy bouldering, travelling, and
        {' '}
        <DiscoLink onClick={() => showDisco(!disco)}>disco</DiscoLink>
        .
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow me on Twitter!
        </a>
      </p>
      {disco
      && (
      <>
        <DiscoBall />
        <StopDiscoBanner>
          <button type="button" onClick={() => showDisco(false)}>
            Stop this Aidan it&apos;s annoying
          </button>
        </StopDiscoBanner>
      </>
      )}
    </>
  );
};

export default Bio;
