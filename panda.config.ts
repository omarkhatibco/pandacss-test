import { defineConfig } from '@pandacss/dev';
// import { patterns } from './patterns';
// import { recipes } from './recipes';
// import { colors, semanticColors } from './colors';
// import { shadows } from './shadows';
import { textStyles } from './typography';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization

  jsxFramework: 'react',
  theme: {
    // tokens: {
    //   colors,
    // },
    textStyles,
    // semanticTokens: {
    //   colors: semanticColors,
    //   shadows,
    // },
    // recipes,
  },
  // patterns: {
  //   extend: {
  //     // ...patterns,
  //   },
  // },
  // conditions: {
  //   extend: {
  //     children: '&>*',
  //   },
  // },

  // The output directory for your css system
  outdir: 'styled-system',
});
