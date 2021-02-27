import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
   //     === RESETS ===
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  a:active,
  a:hover {
    outline: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    display: block;
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  input {
    outline: none;
    border: none;
  }

//  ====== UNIVERSAL PROPERTIES ======
  html, body {
    height: 100%;
  }
  html {
    font-size: 62.5%; // 1rem = 10px; 10px/16px = 62.5%
    background-color: #2A2A2A;
  }
  body {
    font-size: 1.8rem;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.colors.white};
  }
  main {
    width: 100%;
  }
  code {
    font-family: "Cascadia Code PL", source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  header {
    width: 100vw;
    display: block;
  }

  footer {
    min-height: 100%;
  }

  section {
    width: 100%;
    //min-height: calc(100vh - (9rem + 7.6rem));
    //display: flex;
    //justify-content: center;
  }

  #root {
    height: 100%;
  }
`;

export default globalStyle;
