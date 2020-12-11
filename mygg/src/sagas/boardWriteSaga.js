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

function postBoardEdit(id, data) {
    return axios.put(`/updatepostsubmit/${id}`, data);
}

function* boardWrite(action) {
    const { history, ...data } = action.payload;
    try {
        yield call(postBoard, data);
    } catch (e) {}

    history.push("/");
}

function* boardEdit(action) {
    const { history, id, ...data } = action.payload;
    try {
        yield call(postBoardEdit, id, data);
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
