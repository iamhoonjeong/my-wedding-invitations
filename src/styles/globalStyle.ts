import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Montserrat' !important;
    font-weight: normal;

    &.fadeIn {
      opacity: 1;
      animation: fadeIn 1s;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
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
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 2rem;
  }
`;

export default GlobalStyle;
