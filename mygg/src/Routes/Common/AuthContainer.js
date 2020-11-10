import { signInRequest, signUpRequest } from "modules/user";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AuthPresenter from "./AuthPresenter";

const AuthContainer = ({ onSignModal }) => {
    // signUp -> signIn change
    const [signUp, setSignUp] = useState(false);

    const onSignUp = useCallback(
        (e) => {
            setSignUp((prev) => !prev);
        },
        [signUp]
    );

    // user SignUp & SignIn
    const dispatch = useDispatch();
    const [signUpData, setSignUpData] = useState({
        userId: "",
        userPassword: "",
        nickname: "",
        name: "",
        schoolName: "",
    });

    const [signInData, setSignInData] = useState({
        userId: "",
        userPassword: "",
    });

    const [err, setErr] = useState("");

    const onChangeSignUp = useCallback(
        (e) => {
            const { name, value } = e.target;
            setSignUpData({ ...signUpData, [name]: value });
        },
        [signUpData]
    );

    const onChangeSignIn = useCallback(
        (e) => {
            const { name, value } = e.target;
            setSignInData({ ...signInData, [name]: value });
        },
        [signInData]
    );

    const onUserSignUp = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(signUpRequest(signUpData));
        },
        [signUpData, dispatch]
    );

    const onUserSignIn = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(signInRequest(signInData));
        },
        [signInData, dispatch]
    );

    useEffect(() => {
        if (signUpData) {
            const { userPassword, verifyUserPassword } = signUpData;
            if (userPassword !== verifyUserPassword) {
                setErr("비밀번호가 일치하지 않습니다.");
            } else {
                setErr(null);
            }
        }
    }, [signUpData]);

    return (
        <AuthPresenter
            onUserSignUp={onUserSignUp}
            onUserSignIn={onUserSignIn}
            onSignModal={onSignModal}
            onSignUp={onSignUp}
            onChangeSignUp={onChangeSignUp}
            onChangeSignIn={onChangeSignIn}
            signUp={signUp}
            err={err}
        />
    );
};

export default AuthContainer;
