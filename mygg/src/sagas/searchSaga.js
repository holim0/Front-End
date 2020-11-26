import Axios from "axios";
import { searchFailure, searchRequest, searchSuccess } from "modules/header";

const { all, put, takeLatest, fork, call } = require("redux-saga/effects");

function getSearchResults(text) {
    return Axios.get(`/searchpost?search=${text}`).then((res) => res.data);
}

function* searchResults(action) {
    try {
        const results = yield call(getSearchResults, action.payload);
        yield put(searchSuccess(results));
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
