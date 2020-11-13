import React, { useEffect } from "react";
import Router from "./Components/Router";
import GlobalStyled from "Components/GlobalStyles";
import theme from "Components/Theme";
import { ThemeProvider } from "styled-components";
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
