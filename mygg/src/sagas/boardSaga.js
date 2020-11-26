import {
    getBoardByIdRequest,
    getBoardByIdSuccess,
    getBoardByIdFaliure,
    getBoardAllRequest,
    getBoardAllSuccess,
    getBoardAllFaliure,
    updateComment,
} from "modules/board";
import { fork, all, takeLatest, put, call } from "redux-saga/effects";
import Axios from "axios";

function getBoardId(id) {
    return Axios.get(`/post/${id}`).then((res) => res.data);
}

function getBoard(category) {
    return Axios.get(`/${category}`).then((res) => res.data);
    // 서버 요청. 전체 받아오기
}

function* getBoardById(action) {
    try {
        const boardDetail = yield call(getBoardId, action.payload);
        yield put(getBoardByIdSuccess(boardDetail));
    } catch (err) {
        console.log(err);
        yield put(getBoardByIdFaliure(err.message));
    }
}

function* getBoardAll(action) {
    try {
        const boardAll = yield call(getBoard, action.payload);
        yield put(getBoardAllSuccess(boardAll));
    } catch (err) {
        console.log(err);
        yield put(getBoardAllFaliure(err.message));
    }
}

function* getComment(action) {
    try {
        const comment = yield call(getBoardId.comments, action.payload);
        yield put(updateComment(comment));
    } catch (err) {
        console.log(err);
    }
}

function* watchGetBoardById() {
    yield takeLatest(getBoardByIdRequest, getBoardById);
}

function* watchGetBoardAll() {
    yield takeLatest(getBoardAllRequest, getBoardAll);
}

function* watchComment() {
    yield takeLatest(updateComment, getComment);
}

function* boardSaga() {
    yield all([
        fork(watchGetBoardById),
        fork(watchGetBoardAll),
        fork(watchComment),
    ]);
}

export default boardSaga;
