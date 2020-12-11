import {
    signOutSuccess,
    signOutFailure,
    signOutRequest,
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    signInRequest,
    signInSuccess,
    signInFailure,
    LoginDoneSuccess,
    LogOutSuccess,
    isFailSuccess,
} from "modules/sign";
import { signFormShowing } from "modules/header";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { getAuthFailure, getAuthSuccess } from "modules/auth";

function signUpPost(data) {
    return Axios.post("/register", data).then((res) => res.data);
}

function signInPost(data) {
    return Axios.post("/login", data).then((res) => res.data);
}

function signOutPost() {
    return Axios.post("/logout");
}

function* signUp(action) {
    try {
        const getUser = yield call(signUpPost, action.payload);
        yield put(signUpSuccess());
        yield put(signInSuccess());
        yield put(getAuthSuccess(getUser));
        yield put(signFormShowing(false));
    } catch (err) {
        console.log(err);
        yield put(signUpFailure(err.message));
    }
}

function* signIn(action) {
    try {
        const getUser = yield call(signInPost, action.payload);
        yield put(signInSuccess());
        yield put(LoginDoneSuccess());
        yield put(getAuthSuccess(getUser));
        yield put(signFormShowing(false));
    } catch (err) {
        console.log(err.message);
        yield put(signInFailure(err.message));
        yield put(isFailSuccess());
    }
}

function* signOut() {
    try {
        yield call(signOutPost);
        yield put(signOutSuccess());
        yield put(LogOutSuccess());
        yield put(getAuthFailure());
    } catch (err) {
        console.log(err);
        yield put(signOutFailure(err.message));
    }
}

function* watchSignUp() {
    yield takeLatest(signUpRequest, signUp);
}

function* watchSignIn() {
    yield takeLatest(signInRequest, signIn);
}

function* watchSignOut() {
    yield takeLatest(signOutRequest, signOut);
}

function* signSaga() {
    yield all([fork(watchSignUp), fork(watchSignIn), fork(watchSignOut)]);
}

export default signSaga;
