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
    delCommentRequest,
    delBoardRequest,
} from "modules/board";
import { signFormShowing } from "modules/header";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import BoardDetailPresenter from "./BoardDetailPresenter";
import { boardEditClear } from "modules/boardWrite";

const Container = styled.div`
    width: 100%;
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
// 댓글 삭제 함수
const DelComment = (TotalComment, target, curPage) => {
    const newComment = TotalComment.filter((comment, idx) => {
        return idx !== Number(target);
    });
    return newComment;
};

const BoardDetailContainer = () => {
    const { isLoading, boardById } = useSelector((state) => state.board);

    const isCommentEditLoading = useSelector(
        (state) => state.board.isCommentEditLoading
    );

    const { userData } = useSelector((state) => state.auth);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [page, setPage] = useState(1);

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
        const idx = Number(e.target.value) + 10 * (page - 1);

        console.log(idx);
        const NewCommentData = {
            postId: boardById.id,
            commentId: boardById.comments[idx].id,
            newComment: DelComment(boardById.comments, idx),
        };
        dispatch(delCommentRequest(NewCommentData));
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
                boardId: parseInt(id),
                userId: userData.userId,
            };

            if (userData.participatePosts.some((v) => v === parseInt(id))) {
                if (userData.id === boardById.owner.id) {
                    return alert("생성자는 나갈 수 없습니다.");
                }
                dispatch(removePartyRequest(data.boardId));
            } else {
                if (userData.id === boardById.owner.id) {
                    return alert("생성자는 이미 참여 되어있습니다.");
                }
                dispatch(addPartyRequest(data));
            }
        },
        [dispatch, isLogin, userData, boardById]
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
                    writer: userData.userId,
                    content: comment,
                    createdDate: getToday(),
                    isEdit: false,
                },
            };

            if (isLogin) {
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
        [comment, dispatch, userData, isLogin, boardById]
    );

    // detail

    useEffect(() => {
        dispatch(getBoardByIdRequest(parseInt(id)));
    }, [dispatch, id]);

    // 게시글 edit
    const [isEdit, setIsEdit] = useState(false);
    const handleEditBoard = useCallback(() => {
        setIsEdit((prev) => !prev);
    }, []);

    // 게시글 del
    const { isDelete } = useSelector((state) => state.board);
    const handleDelBoard = useCallback(() => {
        if (window.confirm("삭제하시겠습니까?")) {
            dispatch(delBoardRequest(id));
        }
    }, [dispatch, id]);

    useEffect(
        (e) => {
            if (isEdit) {
                history.push(`/edit/${id}`);
            }
        },
        [isEdit, history, id]
    );

    useEffect(
        (e) => {
            if (isDelete) {
                history.push("/");
            }
        },
        [isDelete, history]
    );

    // isEdit true일시 게시글 수정이 되지 않아서 게시글을 불러올시 isEdit false로 수정 가능하게 초기화
    useEffect(() => {
        dispatch(boardEditClear());
    }, [dispatch]);

    // 로딩 중에는 로더 호출.
    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container>
            {isCommentEditLoading ? <Loader fixed={true} /> : null}
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
                handleEditBoard={handleEditBoard}
                handleDelBoard={handleDelBoard}
                userData={userData}
            ></BoardDetailPresenter>
        </Container>
    );
};

export default BoardDetailContainer;
