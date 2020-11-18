const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    getBoard: false,
    isLoading: false,
    error: null,
    boardById: {
        id: "",
        title: "",
        owner: "",
        category: "",
        content: "",
        createdDate: "",
        goodsLink: "",
        deadline: "",
        limitNumberOfPeople: 0,
        participateUsers: [],
        comments: [],
    },
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
            state.boardById = {
                id: payload.id,
                title: payload.title,
                owner: payload.owner,
                category: payload.category,
                content: payload.content,
                createdDate: payload.createdDate,
                goodsLink: payload.goodsLink,
                deadline: payload.deadline,
                limitNumberOfPeople: payload.limitNumberOfPeople,
                participateUsers: payload.participateUsers,
                comments: payload.comments,
            };
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
