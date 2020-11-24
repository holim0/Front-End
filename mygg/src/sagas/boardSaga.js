import {
    getBoardByIdRequest,
    getBoardByIdSuccess,
    getBoardByIdFaliure,
    getBoardAllRequest,
    getBoardAllSuccess,
    getBoardAllFaliure,
} from "modules/board";
import { fork, all, takeLatest, put, call } from "redux-saga/effects";
import faker from "faker";

function getBoardId(id) {
    const fakeBoard = {
        id,
        title: faker.lorem.sentence(),
        owner: faker.name.findName(),
        category: "category",
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
        comments: [
            {
                id: "1",
                writer: "samplenickname",
                content: faker.lorem.words(),
                createdDate: "20.10.02",
            },
            {
                id: "2",
                writer: "samplenickname",
                content: faker.lorem.text(),
                createdDate: "20.11.02",
            },
        ],
    };
    return fakeBoard;
}

function getBoard() {
    // return Axios.get('/')
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

function* getBoardAll() {
    try {
        const boardAll = yield call(getBoard);
        yield put(getBoardAllSuccess(boardAll));
    } catch (err) {
        console.log(err);
        yield put(getBoardAllFaliure(err.message));
    }
}

function* watchGetBoardById() {
    yield takeLatest(getBoardByIdRequest, getBoardById);
}

function* watchGetBoardAll() {
    yield takeLatest(getBoardAllRequest, getBoardAll);
}

function* boardSaga() {
    yield all([fork(watchGetBoardById), fork(watchGetBoardAll)]);
}

export default boardSaga;
