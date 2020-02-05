import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import DiscoBall from "./disco-ball"

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
  margin-bottom: ${rhythm(2.5)};
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
  ${scale(0.8)}
  @media only screen and (min-width: 768px) {
    ${scale(1.5)}
  }
  cursor: pointer;
  margin-left: auto;
  text-shadow: 0px 0px 30px ${props => props.theme.toggleShadowColor};
  position: relative;
  p {
    margin: 0;
  }
`
const DarkModeToggle = () => {
  const themeContext = useContext(ThemeManagerContext)
  return (
    <Emoji
      role="img"
      aria-label="toggle theme"
      onClick={() => themeContext.toggleDark()}
    >
      {themeContext.isDark ? <p>&#127773;</p> : <p>&#127770;</p>}
    </Emoji>
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
  const [disco, showDisco] = useState(false)
  return (
    <>
      <StyledHeader>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            // make styled component
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 75,
            cursor: "pointer",
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
          onClick={() => showDisco(!disco)}
        />
        <StyledLink to="/">
          <StyledTitle>
            <span>{firstPart}</span>
            {secondPart}
          </StyledTitle>
        </StyledLink>
        <DarkModeToggle />
      </StyledHeader>
      {disco && <DiscoBall />}
    </>
  )
}

Header.propTypes = {
  charactersToColour: PropTypes.number,
}

export default Header
