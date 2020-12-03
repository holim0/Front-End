import {
    getBoardByIdRequest,
    getBoardByIdSuccess,
    getBoardByIdFaliure,
    getBoardAllRequest,
    getBoardAllSuccess,
    getBoardAllFaliure,
    updateCommentRequest,
    updateCommentSuccess,
    editCommentDone,
    delCommentRequest,
    delCommentSuccess,
    delCommentFail,
    delBoardRequest,
    delBoardSuccess,
    delBoardFailure,
} from "modules/board";
import { fork, all, takeLatest, put, call } from "redux-saga/effects";
import Axios from "axios";

function getBoardId(id) {
    return Axios.get(`/post/${id}`).then((res) => res.data);
}

function getBoard(category) {
    return Axios.get(`/${category}`).then((res) => res.data);
    // 서버 요청. 전체 받아오기
}

function delBoardReq(id) {
    // return Axios.delete(`${id}`);
}

// 댓글 포스트
function postComment(postId, newComment) {
    return Axios.post(`/post/${postId}/writecommentsubmit`, newComment);
}

// 댓글 수정 사항 put
function postEditComment(postId, newComment) {
    const commentId = newComment.id;
    return Axios.put(
        `/post/${postId}/updatecommentsubmit/${commentId}`,
        newComment
    );
}

// 댓글 삭제 사항 delete
function delCommentPost(postId, commentId) {
    return Axios.delete(`/post/${postId}/deletecomment/${commentId}`);
}

function* getBoardById(action) {
    try {
        const boardDetail = yield call(getBoardId, action.payload);
        yield put(getBoardByIdSuccess(boardDetail));
    } catch (err) {
        console.log(err);
        yield put(getBoardByIdFaliure(err.message));
    }
}

function* getBoardAll(action) {
    try {
        const boardAll = yield call(getBoard, action.payload);
        yield put(getBoardAllSuccess(boardAll));
    } catch (err) {
        console.log(err);
        yield put(getBoardAllFaliure(err.message));
    }
}

function* delBoard(action) {
    try {
        yield call(delBoardReq, action.payload);
        yield put(delBoardSuccess());
    } catch (err) {
        console.log(err);
        yield put(delBoardFailure(err.message));
    }
}

function* UpdateComment(action) {
    try {
        yield call(
            postComment,
            action.payload.postId,
            action.payload.commentId
        );
        yield put(updateCommentSuccess(action.payload.newComment));
    } catch (err) {
        console.log(err);
    }
}

function* EditComment(action) {
    try {
        yield call(
            postEditComment,
            action.payload.postId,
            action.payload.newComment
        );
    } catch (err) {
        console.log(err);
    }
}

function* DelComment(action) {
    try {
        yield call(
            delCommentPost,
            action.payload.postId,
            action.payload.newComment
        );
        yield put(delCommentSuccess(action.payload.newComment));
    } catch (err) {
        console.log(err);
        yield put(delCommentFail(err));
    }
}

function* watchGetBoardById() {
    yield takeLatest(getBoardByIdRequest, getBoardById);
}

function* watchGetBoardAll() {
    yield takeLatest(getBoardAllRequest, getBoardAll);
}

function* watchDelBoard() {
    yield takeLatest(delBoardRequest, delBoard);
}

function* watchUpdateComment() {
    yield takeLatest(updateCommentRequest, UpdateComment);
}

function* watchEditComment() {
    yield takeLatest(editCommentDone, EditComment);
}

function* watchDelComment() {
    yield takeLatest(delCommentRequest, DelComment);
}

function* boardSaga() {
    yield all([
        fork(watchGetBoardById),
        fork(watchGetBoardAll),
        fork(watchUpdateComment),
        fork(watchEditComment),
        fork(watchDelComment),
        fork(watchDelBoard),
    ]);
}

export default boardSaga;
