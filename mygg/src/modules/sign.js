import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isLoading: false,
    error: null,
    Noti: {
        LoginDone: false,
        isLogOut: false,
        isFail: false,
        alertOpen: false,
    },
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
            state.isLogin = false;
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

        LoginDoneSuccess(state) {
            state.Noti.LoginDone = true;
            state.Noti.isLogOut = false;
            state.Noti.isFail = false;
            state.Noti.alertOpen = true;
        },

        LogOutSuccess(state) {
            state.Noti.isLogOut = true;
            state.Noti.LoginDone = false;
            state.Noti.isFail = false;
            state.Noti.alertOpen = true;
        },

        isFailSuccess(state) {
            state.Noti.isFail = true;
            state.Noti.isLogOut = false;
            state.Noti.LoginDone = false;
            state.Noti.alertOpen = true;
        },

        alertClose(state) {
            state.Noti.alertOpen = false;
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
    LoginDoneSuccess,
    LogOutSuccess,
    isFailSuccess,
    alertClose,
} = sign.actions;

export default sign.reducer;
