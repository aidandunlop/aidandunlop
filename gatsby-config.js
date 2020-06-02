/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const site = 'https://aidandunlop.com/';
module.exports = {
  siteMetadata: {
    title: 'aidandunlop',
    author: 'Aidan Dunlop',
    description: 'Personal site for Aidan Dunlop, Software Engineer.',
    siteUrl: site,
    social: {
      twitter: 'aidunlop',
      email: { display: 'aidandunlop@gmail.com', url: 'mailto:aidandunlop@gmail.com', icon: 'FaEnvelope' },
      github: { display: 'aidandunlop', url: 'https://github.com/aidandunlop', icon: 'FaGithub' },
      linkedin: { display: 'aidandunlop', url: 'https://www.linkedin.com/in/aidandunlop/', icon: 'FaLinkedin' },
      website: {
        display: 'aidandunlop.com', url: site, icon: 'FaGlobe', renderOnPDFOnly: true,
      },
    },
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-67635976-3',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Bungee',
            variants: ['400', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'aidan dunlop',
        short_name: 'aidandunlop',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/profile-pic.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        light: require(`${__dirname}/src/utils/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/utils/theme.js`).darkTheme,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
  ],
};
