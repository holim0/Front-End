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
} from "modules/sign";
import { signFormShowing } from "modules/header";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { getAuthSuccess } from "modules/auth";

function signUpPost(data) {
    return Axios.post("/register", data).then((res) => res.data);
}

function signInPost(data) {
    return Axios.post("/login", data).then((res) => res.data);
}

// function signOutPost() {
//     return Axios.get("/logout");
// }

function* signUp(action) {
    console.log(action.payload);
    try {
        const getUser = yield call(signUpPost, action.payload);
        console.log(getUser);

        yield put(signUpSuccess());
        yield put(signInSuccess());
        yield put(getAuthSuccess(getUser));
        yield put(signFormShowing());
    } catch (err) {
        console.log(err);
        yield put(signUpFailure(err.message));
    }
}

function* signIn(action) {
    console.log(action.payload);
    try {
        const getUser = yield call(signInPost, action.payload);
        console.log(getUser);
        yield put(signInSuccess());
        yield put(getAuthSuccess(getUser));
        yield put(signFormShowing());
    } catch (err) {
        console.log(err);
        yield put(signInFailure(err.message));
    }
}

function* signOut() {
    try {
        yield delay(1000);
        // yield call(signOutPost);
        yield put(signOutSuccess());
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
