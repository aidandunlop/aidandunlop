import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

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
  return (
    <>
      <p>
        Hello! I'm <strong>{author}</strong>, a software developer with a keen
        interest in Artificial Intelligence, Computer Vision, and Machine
        Learning.
      </p>
      <p>
        On the side I enjoy bouldering, travelling and some funky disco (see if
        you can spot the easter egg!).
        <a href={`https://twitter.com/${social.twitter}`}>
          {" "}
          You should follow me on Twitter!
        </a>
      </p>
    </>
  )
}

export default Bio
