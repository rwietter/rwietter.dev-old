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

  @font-face { 
  	font-family: 'Montserrat';
  	src: url('../../static/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2'), /* Super Modern Browsers */
       	 url('../../static/fonts/Montserrat/Montserrat-Regular.woff') format('woff'), /* Pretty Modern Browsers */
      	 url('../../static/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
	}

  /*
   * --mediumBackground: #1c262f;
   * --background: #1b2026;
   */

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

    --font-primary: 'Fantasque Sans Mono', 'Lucida Sans', Verdana, sans-serif;
    --font-secondary: 'Montserrat', 'Lucida Sans', Verdana, sans-serif;
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
    --active: rgb(251, 55, 127);
    --separator: rgb(200, 200, 200);
    --terminal: rgb(30, 30, 55);

    --font-primary: 'Fantasque Sans Mono', 'Lucida Sans', Verdana, sans-serif;
    --font-secondary: 'Montserrat', 'Lucida Sans', Verdana, sans-serif;
  }


	body .deckgo-highlight-code-theme-dracula {
		line-height: 1.5;
    background: var(--terminal);
	}

  :root {
		--deckgo-highlight-code-font-size: 1.3rem;
		--deckgo-highlight-code-header-user-line-height: 30px;
		--deckgo-highlight-code-font-family: 'Fantasque Sans Mono', Ubuntu, sans-serif, -apple-system;
		--deckgo-highlight-code-carbon-margin: 3.5rem 1.2rem;
		--deckgo-highlight-code-padding: 1.3rem;
    --deckgo-highlight-code-background: var(--inverse);
    --deckgo-highlight-code-carbon-box-shadow: rgba(25, 25, 49, 0.70) 0 5px 10px;

		${media.lessThan("large")`
			--deckgo-highlight-code-font-size: 1rem;
			--deckgo-highlight-code-carbon-margin: 3.5rem 16px;
		`}
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
`
export default GlobalStyles
