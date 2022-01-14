import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

html, body, a, figure, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul, summary, footer, main, aside, section{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}
  
  h1 {
    font-weight: bold;
    font-size: 26px;
    margin: 0;
  }
  
  h2 {
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }
  
  h3 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }
  
  p {
    margin: 0;
  }
  
  button {
    cursor: pointer;
  }

`;
