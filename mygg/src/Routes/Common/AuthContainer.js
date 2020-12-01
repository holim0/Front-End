import { useFormInput, useSubmit } from "hooks";
import { signInRequest, signUpRequest } from "modules/sign";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthPresenter from "./AuthPresenter";

const AuthContainer = ({ onSignModal }) => {
    // signUp -> signIn change
    const [signUp, setSignUp] = useState(false);

    const onSignUp = useCallback((e) => {
        setSignUp((prev) => !prev);
    }, []);

    // user SignUp & SignIn

    const [err, setErr] = useState("");
    const { form, onChange } = useFormInput({});

    const { onUserSignIn } = useSubmit(signInRequest, form);
    const { onUserSignUp } = useSubmit(signUpRequest, form);

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

    // sign in error
    const { isLoginFailure } = useSelector((state) => state.sign);

    if (isLoginFailure) {
        alert("로그인 실패");
    }

    return (
        <AuthPresenter
            onUserSignUp={onUserSignUp}
            onUserSignIn={onUserSignIn}
            onSignModal={onSignModal}
            onSignUp={onSignUp}
            onChangeSignUp={onChange}
            onChangeSignIn={onChange}
            signUp={signUp}
            err={err}
        />
    );
};

export default AuthContainer;
