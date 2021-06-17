import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Montserrat' !important;
    font-weight: normal;
    &.fadeIn {
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }
    @keyframes fadeIn {
      from {
        top: 20px;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
  }

  html {
    height: 100%;
  }
  
  body {
    background-color: #02343F;
    color: white;
    height: 100%;
    width: 100%;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 2rem;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
