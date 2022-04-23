import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
    fontFamily: 'Inter, sans-serif',
    padding: 0,
  },
  body: {
    background: 'var(--colors-background)',
    fontFamily: 'Inter, sans-serif',
  },
});
