import { all, fork } from "redux-saga/effects";
import boardSaga from "./boardSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
    yield all([fork(userSaga), fork(boardSaga)]);
}
