import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    border-top: 1px solid black;
    padding: 12px;
    div {
        max-width: 1060px;
        min-height: 100px;
        margin: 0 auto;
        text-align: center;
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
