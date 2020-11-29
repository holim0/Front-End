import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px 0;
    text-align: center;
    color: black;
    font-size: ${(props) => props.theme.ls};
    font-weight: 700;
    height: 70px;
    background-color: white;
`;

const Footer = () => {
    return <Container>&copy;{new Date().getFullYear()} GongGus</Container>;
};

export default Footer;
