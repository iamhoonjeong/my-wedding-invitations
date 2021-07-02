import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Montserrat' !important;
    font-weight: bold;
    &.fadeIn {
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }
    @keyframes fadeIn {
      from {
        top: 60px;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
  }

  html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  body {
    background-color: white;
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

  button {
    background-color: transparent;
    color: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
