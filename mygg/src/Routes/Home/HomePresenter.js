import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "assets/GongGus_Logo_1.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    flex: 1;
    min-height: 100%;
    margin: 20px auto;
    color: white;
    font-size: 40px;
    --def: ${(props) => props.theme.bgColor};
    --inv: ${(props) => props.theme.white};
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
    font-family: "Poppins", sans-serif;
`;

const Button = styled(Link)`
    position: relative;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
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

const Img = styled.img`
    height: 500px;
    width: 500px;
    border-radius: 100%;
    box-shadow: 10px 10px 20px black;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 50px;
`;

const HomePresenter = ({ isLogin }) => {
    return (
        <>
            <Container>
                <Img src={Logo}></Img>
                <Button to="/necessity">NECESSITY</Button>
                <Button to="/food">FOOD</Button>
                <Button to="/cloth">ClOTH</Button>
                <Button to="/goods">GOODS</Button>
                <Button to="/beauty">BEAUTY</Button>
                <Button to="/etc">ETC</Button>
                {isLogin ? <Button to="/write">글쓰기</Button> : null}
            </Container>
        </>
    );
};

export default HomePresenter;
