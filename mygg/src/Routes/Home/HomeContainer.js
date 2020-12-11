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
    background-color: #69c0ff;
`;

const HomeContainer = () => {
    const { isLogin, isLoading } = useSelector((state) => state.sign);

    return (
        <>
            <Container>
                <HomePresenster isLogin={isLogin} isLoading={isLoading} />
            </Container>
        </>
    );
};

export default HomeContainer;
