import Loader from "Components/Loader";
import { getBoardRequest } from "modules/board";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);
    const { id } = useParams();
    const dispatch = useDispatch();
    // detail

    useEffect(() => {
        dispatch(getBoardRequest(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <Loader />;
    }

    return <BoardDetailPresenter boardById={boardById}></BoardDetailPresenter>;
};

export default BoardDetailContainer;
