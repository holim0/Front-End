import { useFormInput, useSubmit } from "hooks";
import { signInRequest, signUpRequest } from "modules/sign";
import React, { useCallback, useEffect, useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { useSelector } from "react-redux";

const AuthContainer = ({ onSignModal }) => {
    // signUp -> signIn change
    const [signUp, setSignUp] = useState(false);

    const onSignUp = useCallback((e) => {
        setSignUp((prev) => !prev);
    }, []);

    // 로그인 로딩 state 가져오기
    const { isLoading } = useSelector((state) => state.sign.isLoading);

    // user SignUp & SignIn
    const [err, setErr] = useState("");
    const [form, onChange] = useFormInput({});

    // 로그인 제출 핸들러
    const [onUserSignIn] = useSubmit(signInRequest, form);

    // 회원가입 제출 핸들러
    const [onUserSignUp] = useSubmit(signUpRequest, form);

    useEffect(() => {
        if (form) {
            const { userPassword, verifyUserPassword } = form;
            if (userPassword !== verifyUserPassword) {
                setErr(true);
            } else {
                setErr(false);
            }
        }
    }, [form]);

    return (
        <>
            <AuthPresenter
                onUserSignUp={onUserSignUp}
                onUserSignIn={onUserSignIn}
                onSignModal={onSignModal}
                onSignUp={onSignUp}
                onChangeSignUp={onChange}
                onChangeSignIn={onChange}
                signUp={signUp}
                err={err}
                isLoading={isLoading}
            />
        </>
    );
};

export default AuthContainer;
