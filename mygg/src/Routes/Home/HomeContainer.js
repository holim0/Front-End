import React from "react";
import HomePresenster from "./HomePresenter";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const HomeContainer = () => {
    return (
        <Container>
            <HomePresenster />
        </Container>
    );
};

export default HomeContainer;
