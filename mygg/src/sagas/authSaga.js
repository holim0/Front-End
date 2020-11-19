import Axios from "axios";
import { getAuthFailure, getAuthRequest, getAuthSuccess } from "modules/auth";
import { signInFailure, signInSuccess } from "modules/sign";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

function getAuthByToken() {
    const userData = {
        id: "id",
        name: "name",
        userId: "userId",
        nickname: "nickname",
        schollName: "schollName",
        participatePosts: "participatePosts",
        ownPosts: "ownPosts",
        bookmarkPosts: "bookmarkPosts",
    };
    return userData;
}

function* getAuth(action) {
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

function* watchAuth() {
    yield takeEvery(getAuthRequest, getAuth);
}

function* authSaga() {
    yield all([fork(watchAuth)]);
}

export default authSaga;
