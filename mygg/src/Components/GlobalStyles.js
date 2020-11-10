import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
    box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    input {
        border: none;
        outline: none;
    }
    
    button {
        all: unset;
        cursor: pointer;
    }
`;
export default GlobalStyled;
