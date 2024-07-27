// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  
    background-size: cover; 
    background-position: center;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    max-width: 1200px;
  }

  .section {
    padding: 60px 0;
  }
`;

export default GlobalStyles;
