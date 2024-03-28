import { createGlobalStyle } from "styled-components";

import PaytoneOne from "assets/fonts/PaytoneOne.woff";

const GlobalFont = createGlobalStyle`    
     @font-face {
        font-family: "PaytoneOne";
        src: local("PaytoneOne"), url(${PaytoneOne}) format('woff'); 
        font-size: 4.5rem;
  font-style: normal;
  font-weight: 400;
    }

`;

export default GlobalFont;
