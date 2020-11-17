import Loader from "Components/Loader";
import React from "react";
import { useSelector } from "react-redux";
import BoardDetailPresenter from "./BoardDetailPresenter";

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);

    if (isLoading) {
        return <Loader />;
    }

    return <BoardDetailPresenter boardById={boardById}></BoardDetailPresenter>;
};

export default BoardDetailContainer;
