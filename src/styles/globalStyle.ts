import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: #02343F;
    color: white;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
