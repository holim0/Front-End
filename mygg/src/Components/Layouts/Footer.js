import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    padding: 12px;
    div {
        max-width: 1060px;
        min-height: 100px;
        margin: 0 auto;
        padding: 24px;
        text-align: center;
        font-size: ${(props) => props.theme.ls};
        font-weight: 500;
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
