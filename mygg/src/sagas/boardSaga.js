import {
    getBoardRequest,
    getBoardFaliure,
    getBoardSuccess,
} from "modules/board";
import { fork, all, takeLatest, put, call } from "redux-saga/effects";
import faker from "faker";

function getBoardById(id) {
    const fakeBoard = {
        id,
        title: faker.lorem.sentence(),
        owner: faker.name.firstName(),
        category: "sample",
        content: faker.lorem.text(),
        createdDate: Date.now(),
        goodsLink: "https://naver.com",
        deadline: Date.now().toLocaleString(),
        limitNumberOfPeople: Math.ceil(Math.random() * 10),
        participateUsers: [
            {
                id: "1",
                name: faker.name.findName(),
                userId: "sampleuser",
                nickname: "samplenickname",
            },
        ],
    };
    return fakeBoard;
}

function* getBoard({ payload }) {
    try {
        const boardDetail = yield call(getBoardById, payload);
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
