import Loader from 'Components/Loader';
import { getBoardByIdRequest } from 'modules/board';
import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import BoardDetailPresenter from './BoardDetailPresenter';

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [isParticipate, setIsParticipate] = useState(false);

    const onGoBack = useCallback((e) => {
        history.goBack();
    }, []);

    const onClick = useCallback(
        (e) => {
            setIsParticipate((prev) => !prev);
        },
        [isParticipate]
    );

    // detail

    useEffect(() => {
        dispatch(getBoardByIdRequest(id));
    }, [dispatch, id]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <BoardDetailPresenter
            boardById={boardById}
            isParticipate={isParticipate}
            onGoBack={onGoBack}
            onClick={onClick}
        ></BoardDetailPresenter>
    );
};

export default BoardDetailContainer;
