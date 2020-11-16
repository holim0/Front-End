import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: null,
    title: "",
    content: "",
    link: "",
    deadline: new Date(),
    numOfPeople: null,
    loading: true,
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
            state.link = action.payload;
        },
        setDeadline: (state, action) => {
            state.deadline = action.payload;
        },
        setNumOfPeople: (state, action) => {
            state.numOfPeople = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
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
    setLoading,
} = boardWrite.actions;
export default boardWrite.reducer;
