import { createGlobalStyle } from "styled-components";
import PaytoneOne from 'assets/fonts/PaytoneOne.woff'
export const GlobalStyles = createGlobalStyle`

@font-face {
        font-family: 'PaytoneOne';
        src: local('PaytoneOne'), local('PaytoneOne');
        font-style: normal;
        src: url(${PaytoneOne}) format('truetype');
  }


    :root {
   

        --Orange500: #FF782B;
        --Gray700 :  #747578;
        --Gray500 : #BDBDBD;
        --Gray800 :  #5E5F63;

        --white-color-100: #fff;
        --white-color-200: #f4f4f4;
        --white-color-300: #f7f7f7;
        --white-color-400: #ddd;
        --white-color-500: #C0C0C0;
        --white-color-600: #b5b5b5;
        
        --font-size-title: 4.5rem;
        --font-size-large: 2.5rem;
        --font-size-medium: 1.25rem;
        --font-size-primary: 1rem;
        --font-size-small : 0.75rem;
    }


`;
