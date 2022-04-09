import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap');

	body.dark {
    --borders: #1d2730;
    --texts: rgb(250,250,250);
    --postColor: #fff;
    --highlight: rgb(251, 55, 127);
    --mediumBackground: rgb(30, 30, 55);
    --background: rgb(25, 25, 49);
    --white: #fff;
    --black: #111;
    --active: rgb(251, 55, 127);
    --separator: rgb(100, 100, 100);
    --inverse: #efefef;
    --terminal: rgb(30, 30, 55);
    --icons: rgba(41, 160, 218, 1);
    --frosted: #4D3E64;
    --text_underline: #F95E97;
    --circles_animation: rgba(251, 55, 127, 0.21);
    --blockquote_bg: rgb(30, 30, 55);
    --blockquote_color: #d1d1d1;

    --font-primary: 'Inter';
    --font-secondary: 'Open Sans';
  }

  body.light {
    --borders: #efefef;
    --postColor: #111;
    --texts: rgb(25, 25, 49);
    --highlight: rgb(251, 55, 127);
    --mediumBackground: #f2f3f7;
    --background: #fbfbfb;
    --white: #fff;
    --black: #111;
    --inverse: #1d2730;
    --active: rgb(251, 55, 127);
    --separator: rgb(200, 200, 200);
    --terminal: rgb(30, 30, 55);
    --icons: rgba(41, 160, 218, 1);
    --frosted: #4D3E64;
    --text_underline: #F95E97;
    --circles_animation: rgba(251, 55, 127, 0.21);
    --blockquote_bg: #f2f3f7;
    --blockquote_color: #4D3E64;

    --font-primary: 'Inter';
    --font-secondary: 'Open Sans';
  }


	body .deckgo-highlight-code-theme-dracula {
		line-height: 1.5;
    background: var(--terminal);
	}

  :root {
		--deckgo-highlight-code-font-size: 1.1rem;
		--deckgo-highlight-code-header-user-line-height: 30px;
		--deckgo-highlight-code-font-family: 'Inter', Ubuntu, sans-serif, -apple-system;
		--deckgo-highlight-code-carbon-margin: 3.5rem 1.2rem;
		--deckgo-highlight-code-padding: 1.3rem;
    --deckgo-highlight-code-background: var(--inverse);
    --deckgo-highlight-code-carbon-box-shadow: rgba(25, 25, 49, 0.70) 0 5px 10px;

		${media.lessThan("large")`
			--deckgo-highlight-code-font-size: 1rem;
			--deckgo-highlight-code-carbon-margin: 3.5rem 16px;
		`}
	}

  body,
  html {
    -webkit-font-smoothing: subpixel-antialiased;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: Inter;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  ::selection {
    background: var(--highlight);
    color: var(--white);
    transition: background .35s, color .35s ease;
  }
  ::-moz-selection {
    background: var(--highlight);
    color: var(--white);
    transition: background .35s, color .35s ease;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #16171d;
    border-left: 1px solid #16171d;
  }

  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: rgb(251, 55, 127);
    border-radius: 10rem;
  }

  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: rgb(251, 80, 127);
  }
`
export default GlobalStyles
