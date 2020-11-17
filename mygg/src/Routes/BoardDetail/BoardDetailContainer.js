import Loader from "Components/Loader";
import { getBoardRequest } from "modules/board";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";

const BoardDetailContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { isLoading, boardById } = useSelector((state) => state.board);

    useEffect(() => {
        dispatch(getBoardRequest(id));
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return <BoardDetailPresenter boardById={boardById}></BoardDetailPresenter>;
};

export default BoardDetailContainer;
