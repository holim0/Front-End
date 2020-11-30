import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isLoading: false,
    error: "",
};

const sign = createSlice({
    name: "sign",
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
            state.isLogin = true;
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
} = sign.actions;

export default sign.reducer;
