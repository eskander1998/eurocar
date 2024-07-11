import { createGlobalStyle } from "styled-components";
import fjallaOne from "./fonts/FjallaOne-Regular.ttf";
import lato from "./fonts/Lato-Regular.ttf";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'fjallaOne';
        font-style: normal;
        font-weight: 400;
        src: url(${fjallaOne}) format('truetype');
    }

    @font-face {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        src: url(${lato}) format('truetype');
    }

    html{
        box-sizing: border-box;
        font-size: 16px;
    }
    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    }
    ol, ul {
    list-style: none;
    }
    img {
    max-width: 100%;
    height: auto;
    }

    body{
        font-family: 'Lato', Arial, Helvetica, sans-serif
    }
`;

export default GlobalStyles;
