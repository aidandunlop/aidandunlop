import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { css } from "styled-components"
import { rhythm } from "../utils/typography"
import nightfever from "../../content/assets/nightfever.mp3"

const animation = css`
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
`

const Ball = styled(Image)`
  width: 75px;
  position: fixed !important;
  top: -75px;
  left: 50%;
  border-radius: 100%;
  box-shadow: 10px 35px 45px 35px blue, 0px -35px 45px 35px red,
    -35px 10px 45px 35px green;
  ${animation}
`

const Pole = styled.div`
  background: black;
  width: 10px;
  height: 405px;
  position: fixed;
  top: -470px;
  left: calc(50% + 30px);
  ${animation}
`

const DiscoBall = () => {
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
  `)
  return (
    <>
      <Pole />
      <Ball fixed={data.avatar.childImageSharp.fixed} alt={"discoball"} />
      <audio autoPlay loop preload="auto">
        <source src={nightfever} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default DiscoBall
