import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: null,
    title: "",
    content: "",
    goodsLink: "",
    deadDate: new Date(),
    limitNumberOfPeople: 1,
    currentNumberOfPeople: 1,
    history: null,
    isEdit: false,
    isEditLoading: false,
    isEditDone: false,
    err: null,
};

const boardWrite = createSlice({
    name: "boardWrite",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setText: (state, action) => {
            state.content = action.payload;
        },
        setLink: (state, action) => {
            state.goodsLink = action.payload;
        },
        setDeadline: (state, action) => {
            state.deadDate = action.payload;
        },
        setNumOfPeople: (state, action) => {
            state.limitNumberOfPeople = action.payload;
        },
        boardRequeset: (state, action) => {
            state = action.payload;
        },

        // boardById의 값들을 가져옴
        setEditBoard: (state, action) => {
            const date = action.payload.deadline.split("-");
            state.category = action.payload.category;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.goodsLink = action.payload.goodsLink;
            state.deadDate = new Date(date[0], date[1] - 1, date[2]);
            state.currentNumberOfPeople = action.payload.currentNumberOfPeople;
            state.limitNumberOfPeople = action.payload.limitNumberOfPeople;
            state.isEdit = true;
        },

        // edit 요청을 위함
        boardEditRequest: (state, action) => {
            state.isEditLoading = true;
        },
        boardEditSuccess: (state, action) => {
            state.isEditLoading = false;
            state.isEditDone = true;
        },
        boardEditFaliure: (state, action) => {
            state.isEditLoading = false;
            state.err = action.payload;
        },

        // 새로운 글쓰기 시 값 초기화
        writeBoard: (state) => {
            state.category = null;
            state.title = "";
            state.content = "";
            state.deadDate = new Date();
            state.goodsLink = "";
            state.currentNumberOfPeople = 1;
            state.limitNumberOfPeople = 1;
            state.isEdit = false;
        },
    },
});

export const {
    setCategory,
    setTitle,
    setText,
    setLink,
    setDeadline,
    setNumOfPeople,
    boardRequeset,
    setEditBoard,
    boardEditRequest,
    boardEditSuccess,
    boardEditFaliure,
    writeBoard,
} = boardWrite.actions;

export default boardWrite.reducer;
