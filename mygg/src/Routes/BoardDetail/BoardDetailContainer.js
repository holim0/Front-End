import Loader from "Components/Loader";
import { addPartyRequest, removePartyRequest } from "modules/auth";
import { getBoardByIdRequest, updateComment } from "modules/board";
import { signFormShowing } from "modules/header";
import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";
import axios from "axios";

// 날짜 포맷 변경 함수
function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "." + month + "." + day;
}

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);
    const { userData } = useSelector((state) => state.auth);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [isParticipate, setIsParticipate] = useState(false);
    const [comment, setComment] = useState("");
    const [date, setDate] = useState(getToday());

    // 댓글 작성시 닉네임 형태로 보여주기 위해 가져옴.

    const nickName = useSelector((state) => state.auth.userData.nickname);

    // 로그인이 안돼 있으면 댓글 방지.
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

    const handleComment = (e) => {
        setComment(e.target.value);
    };

    const commentSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const newComment = {
                id: date,
                writer: nickName,
                content: comment,
                createdDate: date,
            };
            dispatch(updateComment(newComment));
            // if (isLogin) {
            // } else {
            //     alert("로그인이 필요합니다");
            // }
            setComment("");
        },
        [comment]
    );

    // detail

    useEffect(() => {
        dispatch(getBoardByIdRequest(id));
    }, [dispatch, id]);

    // 로딩 중에는 로더 호출.
    if (isLoading) {
        return <Loader />;
    }

    return (
        <BoardDetailPresenter
            comment={comment}
            boardById={boardById}
            onGoBack={onGoBack}
            onClick={onClick}
            handleComment={handleComment}
            commentSubmit={commentSubmit}
            userData={userData}
        ></BoardDetailPresenter>
    );
};

export default BoardDetailContainer;
