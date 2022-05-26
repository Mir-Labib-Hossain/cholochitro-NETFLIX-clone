import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        background-color: #111018  /* primaryBackground */
    }

    *{
        margin: 0;
        padding: 0;
        transition: .5s linear;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
        background-color: transparent;
    }

    p{
        font-weight: bold;
    }
    
    p,span,h1{
        font-family: "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

    }
`;

export default GlobalStyle;
