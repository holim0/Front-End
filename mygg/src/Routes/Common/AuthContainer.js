import { useFormInput, useSubmit } from "hooks";
import { signInRequest, signUpRequest } from "modules/sign";
import React, { useCallback, useEffect, useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AuthContainer = ({ onSignModal }) => {
    // signUp -> signIn change
    const [signUp, setSignUp] = useState(false);

    const onSignUp = useCallback((e) => {
        setSignUp((prev) => !prev);
    }, []);

    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const handleClick = (e) => {
        setOpen(true);
    };

    // 로그인 로딩 state 가져오기

    const { isLoading, isLogin, fail } = useSelector((state) => state.sign);

    // user SignUp & SignIn
    const [err, setErr] = useState("");
    const [form, onChange] = useFormInput({});

    const [onUserSignIn] = useSubmit(signInRequest, form);
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
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                {fail && <Alert severity="error">로그인 실패</Alert>}
            </Snackbar>
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
                setOpen={handleClick}
            />
        </>
    );
};

export default AuthContainer;
