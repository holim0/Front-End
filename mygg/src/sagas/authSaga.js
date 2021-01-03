import Axios from "axios";
import {
    getAuthFailure,
    getAuthRequest,
    getAuthSuccess,
    addBookMarkRequest,
    addBookMarkSuccess,
    addBookMarkFailure,
    removeBookMarkRequest,
    removeBookMarkSuccess,
    removeBookMarkFailure,
    addPartyRequest,
    addPartySuccess,
    addPartyFailure,
    removePartyRequest,
    removePartySuccess,
    removePartyFailure,
    editAuthRequest,
    editAuthSuccess,
    editAuthFail,
} from "modules/auth";
import { addPartyUser, removePartyUser } from "modules/board";
import { signInFailure, signInSuccess } from "modules/sign";
import {
    all,
    call,
    fork,
    put,
    takeEvery,
    takeLatest,
} from "redux-saga/effects";

function getAuthByToken() {
    return Axios.post("/check").then((res) => res.data);
}

function addBookmarkPost(id) {
    return Axios.post(`/post/${id}/registerbookmark`, id);
    // 유저정보에 북마크 추가
}

function removeBookMarkPost(id) {
    return Axios.delete(`/post/${id}/deletebookmark`);
    // 유저정보에 북마크 삭제
}

function addPartyPost({ boardId, userId }) {
    return Axios.post(`/post/${boardId}/participatepost`, userId).then(
        (res) => res.data
    );

    // 유저정보에 참가 추가
}

function removePartyPost(postId) {
    return Axios.delete(`/post/${postId}/withdrawpost`);
    // 유저정보에 참가 삭제
}

// 유저 정보 변경 api
function editAuthPut(modifiedAuth) {
    return Axios.put(`/mypage/update`, modifiedAuth);
}

function* getAuth() {
    try {
        const res = yield call(getAuthByToken);
        console.log(res);
        yield put(getAuthSuccess(res));
        yield put(signInSuccess());
    } catch (err) {
        console.log(err);
        yield put(getAuthFailure(err.message));
        yield put(signInFailure());
    }
}

function* addBookMark(action) {
    try {
        yield call(addBookmarkPost, action.payload);
        yield put(addBookMarkSuccess(action.payload));
    } catch (err) {
        console.log(err);
        yield put(addBookMarkFailure(err.message));
    }
}

function* removeBookMark(action) {
    try {
        yield call(removeBookMarkPost, action.payload);
        yield put(removeBookMarkSuccess(action.payload));
    } catch (err) {
        console.log(err);
        yield put(removeBookMarkFailure(err.message));
    }
}

function* addParty(action) {
    try {
        yield call(addPartyPost, action.payload);
        yield put(addPartySuccess(action.payload.boardId));
        yield put(addPartyUser());
    } catch (err) {
        console.log(err);
        yield put(addPartyFailure(err.message));
    }
}

function* removeParty(action) {
    try {
        yield call(removePartyPost, action.payload);
        yield put(removePartySuccess(action.payload));
        yield put(removePartyUser());
    } catch (err) {
        console.log(err);
        yield put(removePartyFailure(err.message));
    }
}

function* EditAuth(action) {
    try {
        yield call(editAuthPut, action.payload);
        yield put(editAuthSuccess(action.payload));
    } catch (e) {
        console.log(e);
        yield put(editAuthFail(e));
    }
}

function* watchAuth() {
    yield takeEvery(getAuthRequest, getAuth);
}

function* watchBookMark() {
    yield takeLatest(addBookMarkRequest, addBookMark);
}

function* watchRemoveBookMark() {
    yield takeLatest(removeBookMarkRequest, removeBookMark);
}

function* watchAddParty() {
    yield takeLatest(addPartyRequest, addParty);
}

function* watchRemoveParty() {
    yield takeLatest(removePartyRequest, removeParty);
}

function* watchEditAuth() {
    yield takeLatest(editAuthRequest, EditAuth);
}

function* authSaga() {
    yield all([
        fork(watchAuth),
        fork(watchBookMark),
        fork(watchRemoveBookMark),
        fork(watchAddParty),
        fork(watchRemoveParty),
        fork(watchEditAuth),
    ]);
}

export default authSaga;
