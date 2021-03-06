import PropTypes from "prop-types"
import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="pt-br, en-us" />
        <meta name="author" content="Maurício Witter" />
        <meta
          name="description"
          content="Meu nome é Maurício e nesse espaço, escrevo conteúdos sobre dev e tech."
        />
        <meta property="og:title" content="Maurício Witter Blog" />
        <meta
          property="og:description"
          content="Meu nome é Maurício e nesse espaço, escrevo conteúdos sobre dev e tech."
        />
        <meta property="og:image" content="../static/tumb.jpg" />
        <script defer data-domain="rwietter.xyz" src="https://plausible.io/js/plausible.js"></script>
        <meta property="og:url" content="https://rwietter.xyz/" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="dark" id="class-theme">
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                preferredTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }
              let preferredTheme;
              try {
                preferredTheme = localStorage.getItem('theme');
              } catch (err) { }
              window.__setPreferredTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              setTheme(preferredTheme || 'dark');
            })();

						(function() {
              window.__onDisplayChange = function() {};
              function setDisplay(newDisplay) {
                window.__display = newDisplay;
                preferredDisplay = newDisplay;
                document.body.id = newDisplay;
                window.__onDisplayChange(newDisplay);
              }
              let preferredDisplay;
              try {
                preferredDisplay = localStorage.getItem('display');
              } catch (err) { }
              window.__setPreferredDisplay = function(newDisplay) {
                setDisplay(newDisplay);
                try {
                  localStorage.setItem('display', newDisplay);
                } catch (err) {}
              }
              setDisplay(preferredDisplay || 'list');
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
