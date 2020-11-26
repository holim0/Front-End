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
} from "modules/auth";
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
    return Axios.post("/checklogin").then((res) => res.data);
}

function addBookmarkPost(id) {
    return Axios.post(`/post/${id}/registerbookmark`, id);
    // 유저정보에 북마크 추가
}

function removeBookMarkPost(id) {
    return Axios.delete(`/post/${id}/deletebookmark`);
    // 유저정보에 북마크 삭제
}

function addPartyPost(id) {
    return Axios.post(`/post/${id}/participatepost`, id);

    // 유저정보에 참가 추가
}

function removePartyPost(id) {
    return Axios.delete(`/post/${id}/withdrawpost`);
    // 유저정보에 참가 삭제
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
        yield put(addPartySuccess(action.payload));
    } catch (err) {
        console.log(err);
        yield put(addPartyFailure(err.message));
    }
}

function* removeParty(action) {
    try {
        yield call(removePartyPost, action.payload);
        yield put(removePartySuccess(action.payload));
    } catch (err) {
        console.log(err);
        yield put(removePartyFailure(err.message));
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

function* authSaga() {
    yield all([
        fork(watchAuth),
        fork(watchBookMark),
        fork(watchRemoveBookMark),
        fork(watchAddParty),
        fork(watchRemoveParty),
    ]);
}

export default authSaga;
