import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.dark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: inherit;

    #root {
      width: inherit;
      height: inherit;
    }
  }
  
  a {
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }

  button {
    color: inherit;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }
`;
