import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    height: 200vh;
    div {
        max-width: 1024px;
        min-height: 100px;
        margin: 0 auto;
        text-align: center;
        border-bottom: 1px solid black;
    }
`;

const Footer = () => {
    return (
        <Container>
            <div>&copy;{new Date().getFullYear()} GongGus</div>
        </Container>
    );
};

export default Footer;
