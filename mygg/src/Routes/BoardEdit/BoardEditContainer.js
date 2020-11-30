import React from "react";
import BoardWriteContainer from "Routes/BoardWrite";
import BoardEditPresenter from "./BoardEditPresenter";

const BoardEditContainer = () => {
    return (
        <BoardWriteContainer>
            <BoardEditPresenter></BoardEditPresenter>;
        </BoardWriteContainer>
    );
};

export default BoardEditContainer;
