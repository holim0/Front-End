import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    * {
    box-sizing: border-box;
    }
    body {
        height: 100%;
        width: 100%;
        margin: 0;
        margin-top: 60px;
        padding: 0;
        font-size: ${(props) => props.theme.ms};
        
    }

    #root {
        width: 100%;
        min-height: 100vh;
    }

    /* input {
        border: none;
        outline: none;
    }
    
    button {
        cursor: pointer;
    } 
    */


    ul,li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    a {
        color: ${(props) => props.theme.black};
        text-decoration: none;
    }

    h1,h2,h3,h4,h5 {
        padding: 0;
        margin: 0;
    }
`;
export default GlobalStyled;
