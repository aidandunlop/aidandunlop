import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import DiscoBall from "./disco-ball"

const DiscoLink = styled.span`
  :hover {
    color: ${props => props.theme.linkColor};
    cursor: pointer;
    text-decoration: underline;
  }
`

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
  `)

  const { author, social } = data.site.siteMetadata
  const [disco, showDisco] = useState(false)
  return (
    <>
      <p>
        Hello! I'm <strong>{author}</strong>, a software developer with a keen
        interest in Artificial Intelligence, Computer Vision, and Machine
        Learning.
      </p>
      <p>
        On the side I enjoy bouldering, travelling and{" "}
        <DiscoLink onClick={() => showDisco(!disco)}>disco</DiscoLink>.{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow me on Twitter!
        </a>
      </p>
      {disco && <DiscoBall />}
    </>
  )
}

export default Bio
