import React, { useCallback, useState } from "react";
import AuthPresenter from "./AuthPresenter";

const AuthContainer = ({ onSignModal, sign }) => {
    const [signUp, setSignUp] = useState(false);

    const onSignUp = useCallback(
        (e) => {
            setSignUp((prev) => !prev);
        },
        [signUp]
    );

    return (
        <AuthPresenter
            onSignModal={onSignModal}
            sign={sign}
            onSignUp={onSignUp}
            signUp={signUp}></AuthPresenter>
    );
};

export default AuthContainer;
