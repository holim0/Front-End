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
    //    return Axios.get('/checklogin');
    return console.log("준비중");
}

function addBookmarkPost(id) {
    // return Axios.post('/', id)
}

function removeBookMarkPost(id) {
    // return Axios.delete('/', id)
}

function addPartyPost() {
    // return Axios.post('/')
}

function removePartyPost() {
    // return Axios.delete('/')
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
