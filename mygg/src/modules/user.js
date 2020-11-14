import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isLoading: false,
    error: "",
    userData: {
        userId: "",
        nickname: "",
        name: "",
        schoolName: "",
    },
};

const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        signUpRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        signUpSuccess(state) {
            state.isLoading = false;
        },
        signUpFailure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },

        signInRequest(state) {
            state.isLoading = true;
            state.isLogin = false;
            state.error = null;
        },
        signInSuccess(state) {
            state.isLoading = false;
            state.isLogin = true;
        },
        signInFailure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },

        signOutRequest(state) {
            state.isLoading = true;
            state.error = null;
        },
        signOutSuccess(state) {
            state.isLogin = false;
            state.isLoading = false;
        },
        signOutFailure(state, { payload }) {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {
    signInRequest,
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    signUpRequest,
    signOutSuccess,
    signOutRequest,
    signOutFailure,
} = user.actions;

export default user.reducer;
