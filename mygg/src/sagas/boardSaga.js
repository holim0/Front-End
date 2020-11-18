import {
    getBoardRequest,
    getBoardFaliure,
    getBoardSuccess,
} from "modules/board";
import { fork, all, takeLatest, put, call, delay } from "redux-saga/effects";
import faker from "faker";

function getBoardById(id) {
    const fakeBoard = {
        id,
        title: faker.lorem.sentence(),
        owner: faker.name.findName(),
        category: "sample",
        content: faker.lorem.text(),
        createdDate: Date.now(),
        goodsLink: "https://www.naver.com",
        deadline: new Date().toLocaleString(),
        limitNumberOfPeople: Math.ceil(Math.random() * 10),
        participateUsers: [
            {
                id: "1",
                name: faker.name.findName(),
                userId: "sampleuser",
                nickname: "samplenickname",
            },
            {
                id: "2",
                name: faker.name.findName(),
                userId: "sampleuser2",
                nickname: "samplenickname2",
            },
        ],
    };
    return fakeBoard;
}

function* getBoard(action) {
    try {
        yield delay(1000);
        const boardDetail = yield call(getBoardById, action.payload);
        yield put(getBoardSuccess(boardDetail));
    } catch (err) {
        console.log(err);
        yield put(getBoardFaliure(err.message));
    }
}

function* watchGetBoard() {
    yield takeLatest(getBoardRequest, getBoard);
}

function* boardSaga() {
    yield all([fork(watchGetBoard)]);
}

export default boardSaga;
