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
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function* signUp(action) {
    console.log(action.payload);
    try {
        yield delay(1000);
        yield put(signUpSuccess());
        yield put(signInSuccess());
        yield put(signFormShowing());
    } catch (err) {
        console.log(err);
        yield put(signUpFailure(err.message));
    }
}

function* signIn(action) {
    console.log(action.payload);
    try {
        yield delay(1000);
        yield put(signInSuccess());
        yield put(signFormShowing());
    } catch (err) {
        console.log(err);
        yield put(signInFailure(err.message));
    }
}

function* signOut() {
    try {
        yield delay(1000);
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
