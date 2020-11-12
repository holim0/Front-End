import React from "react";
import styled from "styled-components";

import BoardWritePresenter from "./BoardWritePresenter";

const Container = styled.div`
    display: flex;
    margin-top: 200px;
    justify-content: center;
`;
const BoardWriteContainer = () => {
    return (
        <Container>
            <BoardWritePresenter />
        </Container>
    );
};

export default BoardWriteContainer;
