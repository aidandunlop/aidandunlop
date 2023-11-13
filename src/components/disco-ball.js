import React, { useContext, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled, { createGlobalStyle, css, ThemeContext } from 'styled-components';

const poleAnimation = css`
  transform: translate(-50%, -50%);
  animation: slide-bottom 7s ease-out both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(50vh);
    }
  }
`;

const Ball = styled(Image)`
  width: 75px;
  position: fixed !important;
  top: -75px;
  left: 50%;
  border-radius: 100%;
  box-shadow: 10px 35px 45px 35px blue, 0px -35px 45px 35px red,
    -35px 10px 45px 35px green;
  ${poleAnimation}
  z-index: 10;
  `;

const Pole = styled.div`
  background: black;
  width: 10px;
  height: 405px;
  position: fixed;
  top: -490px;
  left: calc(50% + 30px);
  ${poleAnimation}
  z-index: 10;
`;

const videoAnimation = css`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  animation: rotation 10s infinite linear;
`;

const VideoWrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 25%;
  left: 0;
  z-index: 9;
  iframe {
    position: absolute;
    padding: 0;
    margin: 0;
    bottom: 0;
    left: 0;
    width: 100%,
    maxWidth: 600px,
    margin: 0 auto,
  }
  ${videoAnimation};
  @media only screen and (min-width: 768px) {
    top: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  html {
    transition: background-color 1s;
  }
  p, i, h1, h2, h3, h4, h5, h6, small, label, li, ul, section {
    transition: color 1s;
  }
`;

function DiscoBall() {
  const data = useStaticQuery(graphql`
    query DiscoBallQuery {
      avatar: file(absolutePath: { regex: "/disco-ball.png/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const flashTheme = setInterval(() => {
      themeContext.toggleDark();
    }, 500);
    return function cleanup() {
      clearInterval(flashTheme);
    };
  });

  return (
    <>
      <GlobalStyle />
      <Pole />
      <Ball fixed={data.avatar.childImageSharp.fixed} alt="discoball" />
      <VideoWrapper>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '56.25%',
            height: '0',
          }}
        >
          <iframe
            title="nightfever"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              border: '0',
              maxWidth: '100%',
            }}
            src="https://www.youtube.com/embed/SkypZuY6ZvA?controls=0&autoplay=1&playsinline=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </VideoWrapper>
    </>
  );
}

export default DiscoBall;
