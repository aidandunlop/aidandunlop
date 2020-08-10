const { createGlobalStyle } = require('styled-components');
const PropTypes = require('prop-types');

const baseTheme = {
  linkColor: '#40C9A2',
  linkHoverColor: '#2E8F73',
  selectionColor: '#f542b6',
};

const lightTheme = {
  ...baseTheme,
  mainColor: '#FFF',
  secondaryColor: '#1f1f1f',
  toggleShadowColor: '#40C9A2',
  shadowColor: '#f7f7f7',
  shadowHoverColor: '#e8e8e8',
};

const darkTheme = {
  ...baseTheme,
  mainColor: '#1f1f1f',
  secondaryColor: '#FFF',
  toggleShadowColor: '#f5d142',
  shadowColor: '#2b2b2b',
  shadowHoverColor: '#4c4c4c',
};

const themePropTypes = {
  theme: PropTypes.shape({
    isDark: PropTypes.bool.isRequired,
    linkColor: PropTypes.string.isRequired,
    linkHoverColor: PropTypes.string.isRequired,
    mainColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    selectionColor: PropTypes.string.isRequired,
    shadowColor: PropTypes.string.isRequired,
    shadowHoverColor: PropTypes.string.isRequired,
    toggleShadowColor: PropTypes.string.isRequired,
  }).isRequired,
};
// TODO: move to separate file
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.secondaryColor};
    
    @media print {
      font-size: 12px;
      -webkit-print-color-adjust: exact;
    }
  }
  p, i, h1, h2, h3, h4, h5, h6, small, label, li, ul, section {
    color: ${(props) => props.theme.secondaryColor};
  }
  p, h1, h2, h3, h4, hr {
    margin-bottom: 0.5rem;
  }
  @media print {
    p {
      margin-bottom: 0.25rem;
    }
  }
  a {
    color: ${(props) => props.theme.linkColor};
    p {
      color: ${(props) => props.theme.linkColor};
    }
    @media print {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
  a:focus, div:focus {
    outline-color: ${(props) => props.theme.linkColor};
  }

  [data-whatinput='mouse'] :focus,
  [data-whatinput='touch'] :focus {
    outline: none;
  }

  a:hover {
    color: ${(props) => props.theme.linkHoverColor};
  }  
  ::selection {
    background-color: ${(props) => props.theme.selectionColor};
    color: ${(props) => props.theme.secondaryColor};
  }
  
  hr {
    background-color: ${(props) => props.theme.secondaryColor};
    opacity: 0.5;
    @media print {
      display: none;
    }
  }
}`;

module.exports = {
  lightTheme, darkTheme, GlobalStyle, themePropTypes,
};
