import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: null,
    title: "",
    content: "",
    goodslink: "",
    deadDate: new Date(),
    limitNumberOfPeople: null,
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
            state.goodslink = action.payload;
        },
        setDeadline: (state, action) => {
            state.deadDate = action.payload;
        },
        setNumOfPeople: (state, action) => {
            state.limitNumberOfPeople = action.payload;
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
} = boardWrite.actions;
export default boardWrite.reducer;
