import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0 300px;
`;

const Button = styled(Link)`
    text-decoration: none;
    text-align: center;
    font-size: 40px;
    color: white;
    margin-top: 40px;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;

    &:before {
        content: "";
        position: absolute;
        transition: inherit;
        z-index: -1;
        top: 0;
        left: 50%;
        height: 100%;
        width: 0;
        border: 1px solid var(--inv);
        border-left: 0;
        border-right: 0;
    }
    &:after {
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        background: var(--inv);
    }

    &:hover {
        color: var(--def);
        transition-delay: 0.5s;
    }
    &:hover:before {
        transition-delay: 0s;
    }

    &:hover:after {
        background: var(--inv);
        transition-delay: 0.35s;
    }

    &:hover:before {
        left: 0;
        width: 100%;
    }

    &:hover:after {
        top: 0;
        height: 100%;
    }
`;

const HomePresenter = () => {
    return (
        <Container>
            <Button to="/necessity">NECESSITY</Button>
            <Button to="/food">FOOD</Button>
            <Button to="/cloth">ClOTH</Button>
            <Button to="/goods">GOODS</Button>
            <Button to="/beauty">BEAUTY</Button>
            <Button to="/etc">ETC</Button>
        </Container>
    );
};

export default HomePresenter;
