import React, { useEffect } from "react";
import Router from "./Components/Router";
import GlobalStyled from "Components/GlobalStyles";
import theme from "Components/Theme";
import { ThemeProvider } from "styled-components";
import { getAuthRequest } from "modules/auth";
import { useDispatch } from "react-redux";
import Footer from "Components/Layouts/Footer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthRequest());
    }, [dispatch]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Router />
                {/* <Footer /> */}
            </ThemeProvider>
        </>
    );
}

export default App;
