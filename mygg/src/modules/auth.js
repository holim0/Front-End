import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthLoading: false,
    error: null,
    token: "",
    userData: {
        id: "",
        name: "",
        userId: "",
        userPassword: "",
        nickname: "",
        schollName: "",
        participatePosts: [],
        ownPosts: [],
        bookmarkPosts: [],
    },
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthRequest(state) {
            state.isAuthLoading = true;
            state.error = null;
        },
        getAuthSuccess(state, { payload }) {
            state.isAuthLoading = false;
            state.userData = {
                id: payload.id,
                name: payload.name,
                userId: payload.userId,
                nickname: payload.nickname,
                schollName: payload.schollName,
                participatePosts: payload.participatePosts,
                ownPosts: payload.ownPosts,
                bookmarkPosts: payload.bookmarkPosts,
            };
        },
        getAuthFailure(state, { payload }) {
            state.isAuthLoading = false;
            state.error = payload;
        },
    },
});

export const { getAuthRequest, getAuthSuccess, getAuthFailure } = auth.actions;

export default auth.reducer;
