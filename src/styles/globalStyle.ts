import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.6rem;
  }

  span {
    font-size: 1.2rem
  }
`;

export default GlobalStyle;
