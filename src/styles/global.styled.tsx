import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
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
`;

export default GlobalStyle;
