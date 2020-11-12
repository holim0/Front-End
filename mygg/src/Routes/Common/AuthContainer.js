import { useFormInput, useSubmit } from "hooks";
import { signInRequest, signUpRequest } from "modules/user";
import React, { useCallback, useEffect, useState } from "react";
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

    const { onSubmit: onUserSignIn } = useSubmit(signInRequest, form);
    const { onSubmit: onUserSignUp } = useSubmit(signUpRequest, form);

    useEffect(() => {
        if (form) {
            const { userPassword, verifyUserPassword } = form;
            if (userPassword !== verifyUserPassword) {
                setErr(true);
            } else {
                setErr(null);
            }
        }
    }, [form]);

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
