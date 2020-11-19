import { searchFailure, searchRequest, searchSuccess } from "modules/header";

const { all, put, takeLatest, fork } = require("redux-saga/effects");

function* searchResults() {
    try {
        yield put(searchSuccess());
    } catch (err) {
        console.log(err);
        yield put(searchFailure(err.message));
    }
}

function* watchSearch() {
    yield takeLatest(searchRequest, searchResults);
}

function* searchSaga() {
    yield all([fork(watchSearch)]);
}

export default searchSaga;
