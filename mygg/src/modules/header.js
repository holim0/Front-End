import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSign: false,
    isSearchLoading: false,
    isSearchDone: false,
    error: null,
    searchBoard: {},
};

const header = createSlice({
    name: "header",
    initialState,
    reducers: {
        signFormShowing(state, { payload }) {
            state.isSign = payload ? payload : !state.isSign;
        },
        searchRequest(state) {
            state.isSearchLoading = true;
            state.isSearchDone = false;
            state.error = null;
        },
        searchSuccess(state, { payload }) {
            state.isSearchLoading = false;
            state.isSearchDone = true;
            state.error = null;
            state.searchBoard = payload;
        },
        searchFailure(state, { payload }) {
            state.isSearchLoading = false;
            state.error = payload;
        },
    },
});

export const {
    signFormShowing,
    searchRequest,
    searchSuccess,
    searchFailure,
} = header.actions;

export default header.reducer;
