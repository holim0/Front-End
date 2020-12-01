import {
    boardEditFaliure,
    boardEditRequest,
    boardEditSuccess,
    boardRequeset,
} from "modules/boardWrite";
import axios from "axios";

import {
    fork,
    all,
    takeEvery,
    call,
    takeLatest,
    put,
    delay,
} from "redux-saga/effects";

function postBoard(data) {
    return axios.post("/makepostsubmit", data);
}

function postBoardEdit(data) {
    // return axios.post(`/post/${data.id}/update`, data);
}

function* boardWrite(action) {
    const { history, ...data } = action.payload;
    console.log(data);
    try {
        yield call(postBoard, data);
        alert("저장 성공!");
    } catch (e) {
        alert("저장 실패!");
    }

    history.push("/");
}

function* boardEdit(action) {
    console.log(action.payload);
    try {
        // yield call(postBoardEdit, action.payload);
        yield delay(2000);
        yield put(boardEditSuccess());
    } catch (err) {
        yield put(boardEditFaliure(err.message));
    }
}

function* watchBoardWrite() {
    yield takeEvery(boardRequeset, boardWrite);
}

function* watchBoardEditWrite() {
    yield takeLatest(boardEditRequest, boardEdit);
}

function* boardWriteSaga() {
    yield all([fork(watchBoardWrite), fork(watchBoardEditWrite)]);
}

export default boardWriteSaga;
