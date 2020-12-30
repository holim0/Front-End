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
        SignUpDone: false,
        SignUpFail: false,
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
        // 로그인 성공시 모달
        LoginDoneSuccess(state) {
            state.Noti.LoginDone = true;
            state.Noti.isLogOut = false;
            state.Noti.isFail = false;
            state.Noti.SignUpDone = false;
            state.Noti.SignUpFail = false;
            state.Noti.alertOpen = true;
        },
        // 로그아웃 성공시 모달
        LogOutSuccess(state) {
            state.Noti.isLogOut = true;
            state.Noti.LoginDone = false;
            state.Noti.isFail = false;
            state.Noti.SignUpDone = false;
            state.Noti.SignUpFail = false;
            state.Noti.alertOpen = true;
        },
        // 회원가입 성공시 모달 제어
        SignUpSuccessModal(state) {
            state.Noti.SignUpDone = true;
            state.Noti.LoginDone = false;
            state.Noti.isLogOut = false;
            state.Noti.isFail = false;
            state.Noti.SignUpFail = false;
            state.Noti.alertOpen = true;
        },

        // 회원가입 실패시 모달 제어

        SignUpFailModal(state) {
            state.Noti.SignUpFail = true;
            state.Noti.LoginDone = false;
            state.Noti.isLogOut = false;
            state.Noti.isFail = false;
            state.Noti.SignUpDone = false;
            state.Noti.alertOpen = true;
        },

        // 로그인 실패 시 모달
        isFailSuccess(state) {
            state.Noti.isFail = true;
            state.Noti.isLogOut = false;
            state.Noti.LoginDone = false;
            state.Noti.SignUpDone = false;
            state.Noti.SignUpFail = false;
            state.Noti.alertOpen = true;
        },

        // 모달창 닫기
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
    SignUpSuccessModal,
    SignUpFailModal,
    alertClose,
} = sign.actions;

export default sign.reducer;
