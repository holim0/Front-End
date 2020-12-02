const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    getBoardById: false,
    isLoading: false,
    isCommentEditLoading: false,
    getBoardAll: false,
    error: null,
    boardAll: [],
    boardById: {
        id: "",
        title: "",
        owner: {
            id: "",
            nickname: "",
            name: "",
            userId: "",
            schoolname: "",
        },
        category: "",
        content: "",
        createdDate: "",
        goodsLink: "",
        deadline: "",
        limitNumberOfPeople: 1,
        currentNumberOfPeople: 1,
        finishCheck: false,
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
                finishCheck: payload.finishCheck,
                limitNumberOfPeople: payload.limitNumberOfPeople,
                currentNumberOfPeople: payload.currentNumberOfPeople,
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
            state.getBoardAll = false;
            state.error = payload;
        },

        addPartyUser(state) {
            state.boardById.currentNumberOfPeople += 1;
        },
        removePartyUser(state) {
            state.boardById.currentNumberOfPeople -= 1;
        },

        updateCommentRequest(state) {
            state.isCommentEditLoading = true;
        },
        updateCommentSuccess(state, { payload }) {
            state.isCommentEditLoading = false;
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

        delCommentRequest(state) {
            state.isCommentEditLoading = true;
        },

        delCommentSuccess(state, { payload }) {
            state.isCommentEditLoading = false;
            console.log(payload);
            state.boardById.comments = payload;
        },
        delCommentFail(state, { payload }) {
            state.isCommentEditLoading = false;
            state.error = payload;
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
    addPartyUser,
    removePartyUser,
    updateCommentRequest,
    updateCommentSuccess,
    editComment,
    editCommentDone,
    editCommentAndUpdate,
    delCommentRequest,
    delCommentSuccess,
    delCommentFail,
} = board.actions;

export default board.reducer;
