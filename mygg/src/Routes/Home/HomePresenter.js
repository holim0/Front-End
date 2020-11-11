import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    FaUtensils,
    FaTshirt,
    FaBox,
    FaPaintBrush,
    FaHome,
} from "react-icons/fa";
import { Loader } from "Components/Loader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
    margin: 0 auto;

    --def: ${(props) => props.theme.bgColor};
    --inv: ${(props) => props.theme.white};
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
`;

const Button = styled(Link)`
    position: relative;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    font-size: 40px;
    width: 1000px;
    color: var(--inv);
    letter-spacing: 1.1rem;
    margin-top: 40px;
    z-index: 0;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;

    &:before,
    &:after {
        content: "";
        position: absolute;
        transition: inherit;
        z-index: -1;
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
    &:before {
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
            <Loader />
            <Button to="/necessity">
                NECESSITY
                <FaHome />
            </Button>
            <Button to="/food">
                FOOD
                <FaUtensils />
            </Button>
            <Button to="/cloth">
                ClOTH
                <FaTshirt />
            </Button>
            <Button to="/goods">
                GOODS
                <FaBox />
            </Button>
            <Button to="/beauty">
                BEAUTY
                <FaPaintBrush />
            </Button>
            <Button to="/etc">ETC</Button>
        </Container>
    );
};

export default HomePresenter;
