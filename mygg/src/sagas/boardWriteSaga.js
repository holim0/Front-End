import { boardRequeset } from "modules/boardWrite";
import axios from "axios";

import { fork, all, takeEvery, call } from "redux-saga/effects";

function postBoard(data) {
    return axios.post("/makepostsubmit", data);
}
function* BoardWrite(action) {
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

function* watchBoardWrite() {
    yield takeEvery(boardRequeset, BoardWrite);
}

function* boardWriteSaga() {
    yield all([fork(watchBoardWrite)]);
}

export default boardWriteSaga;
