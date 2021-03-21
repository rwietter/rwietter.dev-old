import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

	@font-face {
  	font-family: 'Fantasque Sans Mono';
  	src: url('../../static/fonts/FantasqueSansMono/Webfonts/FantasqueSansMono-Regular.woff2') format('woff2'), /* Super Modern Browsers */
       	 url('../../static/fonts/FantasqueSansMono/Webfonts/FantasqueSansMono-Regular.woff') format('woff'), /* Pretty Modern Browsers */
      	 url('../../static/fonts/FantasqueSansMono/TTF/FantasqueSansMono-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
				 url('../../static/fonts/FantasqueSansMono/Webfonts/FantasqueSansMono-Regular.svg') format('svg'); /* Legacy iOS */
	}

	:root {
		--deckgo-highlight-code-font-size: 1.3rem;
		--deckgo-highlight-code-header-user-line-height: 30px;
		--deckgo-highlight-code-font-family: 'Fantasque Sans Mono', fantasy, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		--deckgo-highlight-code-carbon-margin: 3.5rem 1.2rem;
		--deckgo-highlight-code-padding: 1.3rem;

		${media.lessThan("large")`
			--deckgo-highlight-code-font-size: 1rem;
			--deckgo-highlight-code-carbon-margin: 3.5rem 16px;
		`}
	}
		

	body .deckgo-highlight-code-theme-dracula {
		line-height: 1.5;
	}
			
	body.dark {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --mediumBackground: #192734;
    --background: #16202c;
    --white: #fff;
    --black: #222;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
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
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
`
export default GlobalStyles
