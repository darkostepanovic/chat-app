import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${p => p.theme.fontSizes.small };
    font-family: ${p => p.theme.fontFamily.sansSerif };
    @media all and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.regular }
    }
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  h1,h2,h3 {
    font-weight: 500;
    line-height: 1.2;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  h1 {
    font-size: 3.875rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  h3 {
    font-size: 2.625rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size: 1.5rem;
  }

  h6 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;