import Typography from 'typography';
import Moraga from 'typography-theme-moraga';

Moraga.headerFontFamily = ['Bungee'];

// Moraga.googleFonts = [{
//   name: 'Bungee',
//   styles: ['400'],
// }];

const typography = new Typography(Moraga);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
