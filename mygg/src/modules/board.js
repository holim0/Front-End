const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    getBoard: false,
    isLoading: false,
    error: null,
};

const board = createSlice({
    name: "board",
    initialState: initialState,
    reducers: {
        getBoardRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        getBoardSuccess(state, { payload }) {
            state.isLoading = false;
            state.getBoard = true;
        },
        getBoardFaliure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {
    getBoardRequest,
    getBoardSuccess,
    getBoardFaliure,
} = board.actions;

export default board.reducer;
