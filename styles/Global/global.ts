import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto+Mono:wght@700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
    line-height: 120%;
    letter-spacing: 0.03rem;
  }
`;
