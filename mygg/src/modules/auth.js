import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthLoading: false,
    isBookMarkLoading: false,
    isPartyLoading: false,
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
            // state.userData = null;
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
            // state.userData = null;
            state.error = payload;
        },
        editAuth(state, { payload }) {
            state.userData.name = payload.name;
            state.userData.nickname = payload.nickname;
        },

        addBookMarkRequest(state) {
            state.isBookMarkLoading = true;
            state.error = null;
        },
        addBookMarkSuccess(state, { payload }) {
            state.isBookMarkLoading = false;
            state.userData.bookmarkPosts.push(payload);
        },
        addBookMarkFailure(state, { payload }) {
            state.isBookMarkLoading = false;
            state.error = payload;
        },

        removeBookMarkRequest(state) {
            state.isBookMarkLoading = true;
            state.error = null;
        },
        removeBookMarkSuccess(state, { payload }) {
            state.isBookMarkLoading = false;
            state.userData.bookmarkPosts = state.userData.bookmarkPosts.filter(
                (f) => f !== payload
            );
        },
        removeBookMarkFailure(state, { payload }) {
            state.isBookMarkLoading = false;
            state.error = payload;
        },

        addPartyRequest(state) {
            state.isPartyLoading = true;
            state.error = null;
        },
        addPartySuccess(state, { payload }) {
            state.isPartyLoading = false;
            state.userData.participatePosts.push(payload);
        },
        addPartyFailure(state, { payload }) {
            state.isPartyLoading = false;
            state.error = payload;
        },

        removePartyRequest(state) {
            state.isPartyLoading = true;
            state.error = null;
        },
        removePartySuccess(state, { payload }) {
            state.isPartyLoading = false;
            state.userData.participatePosts = state.userData.participatePosts.filter(
                (f) => f !== payload
            );
        },
        removePartyFailure(state, { payload }) {
            state.isPartyLoading = false;
            state.error = payload;
        },
    },
});

export const {
    getAuthRequest,
    getAuthSuccess,
    getAuthFailure,
    editAuth,
    addBookMarkRequest,
    addBookMarkSuccess,
    addBookMarkFailure,
    removeBookMarkRequest,
    removeBookMarkSuccess,
    removeBookMarkFailure,
    addPartyRequest,
    addPartySuccess,
    addPartyFailure,
    removePartyRequest,
    removePartySuccess,
    removePartyFailure,
} = auth.actions;

export default auth.reducer;
