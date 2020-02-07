import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Tooltip from "rc-tooltip"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import { rhythm, scale } from "../utils/typography"

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
`

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTitle = styled.h1`
  ${scale(0.8)}
  margin: 0;
  @media only screen and (min-width: 768px) {
    ${scale(1.5)}
  }
  span {
    color: ${props => props.theme.linkColor};
  }
`
const Emoji = styled.div`
  ${scale(0.6)}
  @media only screen and (min-width: 768px) {
    ${scale(1.2)}
  }
  cursor: pointer;
  margin-left: auto;
  text-shadow: 0px 0px 30px ${props => props.theme.toggleShadowColor};
  position: relative;
  p {
    margin: 0;
  }
`
const Tip = styled.div`
  border-radius: 5%;
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.mainColor};
  padding: 6px 10px;

  ::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${props => props.theme.secondaryColor}
      transparent;
  }
`

const DarkModeToggle = () => {
  const themeContext = useContext(ThemeManagerContext)
  return (
    <Tooltip
      placement="bottom"
      trigger={["hover"]}
      overlay={<Tip>toggle theme</Tip>}
      defaultVisible={false}
      destroyTooltipOnHide={true}
      overlayStyle={{ position: "absolute" }}
    >
      <Emoji
        role="img"
        aria-label="toggle theme"
        onClick={() => themeContext.toggleDark()}
      >
        {themeContext.isDark ? <p>&#127773;</p> : <p>&#127770;</p>}
      </Emoji>
    </Tooltip>
  )
}

const Header = ({ charactersToColour = 2 }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  const { title, author } = data.site.siteMetadata
  const firstPart = title.substring(0, charactersToColour)
  const secondPart = title.substring(charactersToColour)
  return (
    <>
      <StyledHeader>
        <StyledLink to="/">
          <StyledTitle>
            <span>{firstPart}</span>
            {secondPart}
          </StyledTitle>
        </StyledLink>
        <DarkModeToggle />
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  charactersToColour: PropTypes.number,
}

export default Header
