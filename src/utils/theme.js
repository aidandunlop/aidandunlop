const { createGlobalStyle } = require("styled-components")

const baseTheme = {
  linkColor: "#40C9A2",
  linkHoverColor: "#2E8F73",
  selectionColor: "#f542b6",
}
const lightTheme = {
  ...baseTheme,
  mainColor: "#FFF",
  secondaryColor: "#1f1f1f",
  toggleShadowColor: "#40C9A2",
}

const darkTheme = {
  ...baseTheme,
  mainColor: "#1f1f1f",
  secondaryColor: "#FFF",
  toggleShadowColor: "#f5d142",
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.secondaryColor};
    transition: background-color 2s, color 2s;
  }
  p, h1, h2, h3, h4, h5, h6, small, label, li, ul {
    transition: color 2s;
    color: ${props => props.theme.secondaryColor};
  }
  a {
    color: ${props => props.theme.linkColor};
  }
  
  a:hover {
    color: ${props => props.theme.linkHoverColor};
  }  
  ::selection {
    background-color: ${props => props.theme.selectionColor};
    color: ${props => props.theme.secondaryColor};
  }
  
  hr {
    background-color: ${props => props.theme.secondaryColor};
    opacity: 0.5;
  }
`

module.exports = { lightTheme, darkTheme, GlobalStyle }
