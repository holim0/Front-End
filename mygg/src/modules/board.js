const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    getBoardById: false,
    isLoading: false,
    getBoardAll: false,
    error: null,
    boardAll: [],
    boardById: {
        id: "123",
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
        getBoardByIdRequest(state) {
            state.isLoading = true;
            state.getBoardById = false;
            state.error = null;
        },
        getBoardByIdSuccess(state, { payload }) {
            state.isLoading = false;
            state.getBoardById = true;
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
        getBoardByIdFaliure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },

        getBoardAllRequest(state) {
            state.isLoading = true;
            state.error = null;
            state.getBoardAll = false;
        },
        getBoardAllSuccess(state, { payload }) {
            state.isLoading = false;
            state.getBoardAll = true;
            state.boardAll = payload;
        },
        getBoardAllFaliure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
        updateCommentRequest(state) {
            state.isLoading = true;
        },
        updateCommentSuccess(state, { payload }) {
            state.isLoading = false;
            state.boardById.comments.push(payload);
        },
        editComment(state, { payload }) {
            state.boardById.comments[payload].isEdit = true;
        },
        editCommentDone(state, { payload }) {
            state.boardById.comments[payload.idx].isEdit = false;
        },
        editCommentAndUpdate(state, { payload }) {
            state.boardById.comments[payload.idx].content = payload.newC;
        },
    },
});

export const {
    getBoardByIdRequest,
    getBoardByIdSuccess,
    getBoardByIdFaliure,
    getBoardAllRequest,
    getBoardAllSuccess,
    getBoardAllFaliure,
    updateCommentRequest,
    updateCommentSuccess,
    editComment,
    editCommentDone,
    editCommentAndUpdate,
} = board.actions;

export default board.reducer;
