import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --ewally-green: #00B4BC;
        --orange: #F3B100;
        --purple: #8E0181;
        --pink: #D93E7B;
        --grey: #8d8b8b;
        --light-grey: #bfbfbf;
        --red: #EF3540;
        --green: #12a71c;
        --white: #fff;
        --yellow: #fffcd6;
        --transparent-black: rgba(80, 82, 81, 0.466) ;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html{
        display: flex;
        width: 100vw;
        
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: center;
        width: 100vw;
    
    }

    body, input, button,h1, h2, h3, h4, h5, h6, p, textarea, select{
        font-family: 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--grey)
    }

    button {
        cursor: pointer;
    }

`;
