import React from "react";
import BoardWritePresenter from "Routes/BoardWrite/BoardWritePresenter";
import BoardWriteContainer from "Routes/BoardWrite";

const BoardEditPresenter = () => {
    return (
        <BoardWriteContainer>
            <BoardWritePresenter></BoardWritePresenter>
        </BoardWriteContainer>
    );
};

export default BoardEditPresenter;
