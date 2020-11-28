import React from "react";
import HomePresenster from "./HomePresenter";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-color: #2196f3;
`;

const HomeContainer = () => {
    const user = useSelector((state) => state.sign.isLogin);
    return (
        <>
            <Container>
                <HomePresenster isLogin={user} />
            </Container>
        </>
    );
};

export default HomeContainer;
