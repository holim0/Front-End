import Loader from "Components/Loader";
import { addPartyRequest, removePartyRequest } from "modules/auth";
import { getBoardByIdRequest } from "modules/board";
import { signFormShowing } from "modules/header";
import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);
    const { userData } = useSelector((state) => state.auth);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.userData.userId);
    const nickName = useSelector((state) => state.auth.userData.nickname);
    const isLogin = useSelector((state) => state.sign.isLogin);

    const onGoBack = useCallback(
        (e) => {
            history.goBack();
        },
        [history]
    );

    const onClick = useCallback(
        (e) => {
            if (!isLogin) {
                alert("로그인 하셔야 가능합니다.");
                return dispatch(signFormShowing());
            }
            let { id } = e.target.dataset;
            if (!id) {
                id = e.target.parentNode.dataset.id;
            }

            if (userData.participatePosts.find((v) => v === id)) {
                dispatch(removePartyRequest(id));
            } else {
                dispatch(addPartyRequest(id));
            }
        },
        [dispatch, isLogin, userData]
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
            onGoBack={onGoBack}
            onClick={onClick}
            userData={userData}
        ></BoardDetailPresenter>
    );
};

export default BoardDetailContainer;
