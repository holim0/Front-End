import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import { addPartyRequest, removePartyRequest } from "modules/auth";
import {
    getBoardByIdRequest,
    updateCommentRequest,
    editComment,
    editCommentDone,
    editCommentAndUpdate,
} from "modules/board";
import { signFormShowing } from "modules/header";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";
// import { FaKaggle } from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

// 날짜 포맷 변경 함수
function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "." + month + "." + day;
}

// 페이지 별 댓글 수 조회.
const getCurComment = (TotalComment, curPage) => {
    const CurComment = [];
    if (TotalComment.length <= 10) {
        return TotalComment;
    }
    for (let i = (curPage - 1) * 10; i < curPage * 10 - 1; i++) {
        if (TotalComment[i] === undefined) break;
        CurComment.push(TotalComment[i]);
    }

    return CurComment;
};

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);

    const { userData } = useSelector((state) => state.auth);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [date, setDate] = useState(getToday());
    const [page, setPage] = useState(1);

    // 댓글 작성시 닉네임 형태로 보여주기 위해 가져옴.
    const nickName = useSelector((state) => state.auth.userData.nickname);

    // 로그인이 안돼 있으면 댓글 방지.
    const isLogin = useSelector((state) => state.sign.isLogin);

    // 댓글 페이지 구현
    const handleCommentPage = (e, value) => {
        setPage(value);
    };

    // 댓글 수정사항 스토어에 계속 반영
    const handleEditComment = (idx, e) => {
        const data = {
            idx: idx,
            newC: e.target.value,
        };

        dispatch(editCommentAndUpdate(data));
    };

    // 수정 버튼을 누르면 인풋창이 나오게 설정.
    const handleCommentEdit = (e) => {
        e.preventDefault();
        const idx = e.target.value;
        dispatch(editComment(idx));
    };

    // 수정을 마치고 완료 버튼을 눌렀을 때
    const handleCommentEditDone = (e) => {
        e.preventDefault();
        const idx = e.target.value;

        const EditCommentData = {
            postId: boardById.id,
            idx: idx,
            newComment: boardById.comments[idx],
        };
        dispatch(editCommentDone(EditCommentData));
    };

    // 댓글 삭제 버튼 눌렀을 때

    const handleDelComment = (e) => {
        e.preventDefault();
        const idx = e.target.value;
        console.log(idx);
    };

    // 목록으로 버튼 누를 때
    const handleGoBack = useCallback(
        (e) => {
            history.goBack();
        },
        [history]
    );

    // 참여 버튼 눌렀을 때
    const handleAddParty = useCallback(
        (e) => {
            if (!isLogin) {
                alert("로그인 하셔야 가능합니다.");
                return dispatch(signFormShowing());
            }
            let { id } = e.target.dataset;
            if (!id) {
                id = e.target.parentNode.dataset.id;
            }
            const data = {
                boardId: id,
                userId: userData.userId,
            };

            if (userData.participatePosts.find((v) => v === id)) {
                dispatch(removePartyRequest(data));
            } else {
                dispatch(addPartyRequest(data.boardId));
            }
        },
        [dispatch, isLogin, userData]
    );

    // 댓글 인풋 관리
    const handleComment = (e) => {
        setComment(e.target.value);
    };

    // 댓글 등록 버튼을 누를 때
    const commentSubmit = useCallback(
        (e) => {
            e.preventDefault();

            const CommentData = {
                postId: boardById.id,
                newComment: {
                    id: "",
                    writer: nickName,
                    content: comment,
                    createdDate: date,
                    isEdit: false,
                },
            };

            console.log(CommentData);

            if (!isLogin) {
                if (comment !== "") {
                    dispatch(updateCommentRequest(CommentData));
                } else {
                    alert("내용을 입력해주세요!");
                }
            } else {
                alert("로그인이 필요합니다");
                return dispatch(signFormShowing());
            }
            setComment("");
        },
        [comment, dispatch, date, nickName, isLogin, boardById]
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
        <Container>
            <BoardDetailPresenter
                comment={comment}
                boardById={boardById}
                curPageComment={getCurComment(boardById.comments, page)}
                handleGoBack={handleGoBack}
                handleAddParty={handleAddParty}
                page={page}
                handleComment={handleComment}
                commentSubmit={commentSubmit}
                handleCommentEdit={handleCommentEdit}
                handleCommentEditDone={handleCommentEditDone}
                handleEditComment={handleEditComment}
                handleDelComment={handleDelComment}
                handleCommentPage={handleCommentPage}
                userData={userData}></BoardDetailPresenter>
        </Container>
    );
};

export default BoardDetailContainer;
