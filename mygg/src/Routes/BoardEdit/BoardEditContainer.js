import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardEditPresenter from "./BoardEditPresenter";
import { setEditBoard } from "modules/boardWrite";
import { useHistory, useParams } from "react-router-dom";
import Loader from "Components/Loader";

const BoardEditContainer = () => {
    const { boardById } = useSelector((state) => state.board);
    const { isEditDone, isEditLoading } = useSelector(
        (state) => state.boardWrite
    );

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch(setEditBoard(boardById));
    }, []);

    if (isEditDone) {
        history.push(`/detail/${id}`);
    }

    return (
        <>
            {isEditLoading && <Loader fixed={true} />}
            <BoardEditPresenter></BoardEditPresenter>
        </>
    );
};

export default BoardEditContainer;
