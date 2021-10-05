import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --ewally-green: #00B4BC;
        --orange: #F3B100;
        --purple: #8E0181;
        --pink: #D93E7B;
        --grey: #C2C2C2;
        --red: #EF3540;
        --green: #14C821;
        --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button,h1, h2, h3, h4, h5, h6, p, textarea, select{
        font-family: 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

`;
