import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import boardSaga from "./boardSaga";
import searchSaga from "./searchSaga";
import signSaga from "./signSaga";
import boardWriteSaga from "./boardWriteSaga";

export default function* rootSaga() {
    yield all([
        fork(signSaga),
        fork(boardSaga),
        fork(authSaga),
        fork(searchSaga),
        fork(boardWriteSaga),
    ]);
}
