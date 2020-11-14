import React from "react";
import HomePresenster from "./HomePresenter";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Container = styled.div`
    display: flex;
    justify-content: center;
    background-image: radial-gradient(
        circle farthest-corner at 12.3% 19.3%,
        rgba(85, 88, 218, 1) 0%,
        rgba(95, 209, 249, 1) 100.2%
    );
`;

const HomeContainer = () => {
    const user = useSelector((state) => state.user.isLogin);
    return (
        <Container>
            <HomePresenster isLogin={user} />
        </Container>
    );
};

export default HomeContainer;
