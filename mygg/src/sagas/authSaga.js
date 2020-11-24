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
    //    return Axios.get('/checklogin');
    return console.log("준비중");
}

function addBookmarkPost(id) {
    // return Axios.post('/', id)
}

function removeBookMarkPost(id) {
    // return Axios.delete('/', id)
}

function* getAuth() {
    try {
        const auth = yield call(getAuthByToken);
        yield put(getAuthSuccess(auth));
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

function* watchAuth() {
    yield takeEvery(getAuthRequest, getAuth);
}

function* watchBookMark() {
    yield takeLatest(addBookMarkRequest, addBookMark);
}

function* watchRemoveBookMark() {
    yield takeLatest(removeBookMarkRequest, removeBookMark);
}

function* authSaga() {
    yield all([
        fork(watchAuth),
        fork(watchBookMark),
        fork(watchRemoveBookMark),
    ]);
}

export default authSaga;
