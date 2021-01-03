import React from "react";
import styled, { css } from "styled-components";
import { Spin } from "antd";
import "antd/dist/antd.css";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 500;
`;
const Loader = styled(Spin)`
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: 120px;
    z-index: 1000;
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    z-index: 500;
    top: 0;
    position: fixed;
    background: ${(props) => props.theme.black};
    z-index: 100;
    opacity: 0.3;
`;

const ModalForm = styled.div`
    z-index: 1000;
    width: 450px;
    max-height: 550px;
    margin: 0 auto;
    padding: 12px;
    position: absolute;
    background: ${(props) => props.theme.white};
    border-radius: 12px;
    top: calc(50% - 60px);
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(-50%);
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    ${(props) =>
        props.signUp &&
        css`
            min-height: 80%;
        `}
`;

const SignTitle = styled.h3`
    width: 100%;
    text-align: center;
`;

const SignForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    font-size: ${(props) => props.theme.ss};
    color: ${(props) => props.theme.lightenBlue};
    width: 300px;
    margin: 2px 0;
`;

const Input = styled.input`
    outline: none;
    width: 300px;
    padding: 8px;
    margin: 6px 0;
    border: 1px solid ${(props) => props.theme.lightenBlack};
    ${(props) =>
        props.err &&
        css`
            border: 1px solid ${(props) => props.theme.red};
        `}

    &:focus {
        border: 1px solid ${(props) => props.theme.blue};

        ${(props) =>
            props.err &&
            css`
                border: 1px solid ${(props) => props.theme.red};
            `}
    }
`;

const Check = styled.span`
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: ${(props) => props.theme.ss};
    width: 260px;
`;

const Button = styled.button`
    all: unset;
    cursor: pointer;
    width: 300px;
    text-align: center;
    border-radius: 33px;
    margin: 6px 0;
    padding: 6px 0;
    font-weight: 500;
    background: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    ${(props) =>
        props.type === "button" &&
        css`
            color: ${(props) => props.theme.black};
            background: ${(props) => props.theme.white};
            &:hover {
                text-decoration: underline;
            }
        `}
`;

/////////////////////////////////////////////////////////////////////////

const AuthPresenter = ({
    onSignModal,
    onSignUp,
    signUp,
    onUserSignUp,
    onUserSignIn,
    onChangeSignUp,
    onChangeSignIn,
    err,
    isLoading,
    setOpen,
}) => {
    return (
        <Container>
            <ModalBackground onClick={onSignModal}></ModalBackground>
            <ModalForm signUp={signUp}>
                <SignTitle>{!signUp ? "로그인" : "회원가입"}</SignTitle>
                <SignForm
                    onChange={!signUp ? onChangeSignIn : onChangeSignUp}
                    onSubmit={!signUp ? onUserSignIn : onUserSignUp}
                >
                    <Label htmlFor="userId">이메일</Label>
                    <Input
                        type="email"
                        id="userId"
                        name="userId"
                        placeholder="이메일"
                        autoComplete="off"
                        required
                    />
                    <Label htmlFor="userPassword">패스워드</Label>
                    <Input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        placeholder="패스워드"
                        autoComplete="off"
                        required
                    />
                    {isLoading ? (
                        <Loader tip="Loading..." size="large"></Loader>
                    ) : null}
                    {signUp && (
                        <>
                            <Label htmlFor="verifyUserPassword">
                                패스워드확인
                            </Label>
                            <Input
                                err={err}
                                type="password"
                                id="verifyUserPassword"
                                name="verifyUserPassword"
                                placeholder="패스워드확인"
                                autoComplete="off"
                                required
                            />
                            <Label htmlFor="name">이름</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="이름"
                                autoComplete="off"
                                required
                            />
                            <Label htmlFor="nickname">닉네임</Label>
                            <Input
                                type="text"
                                id="nickname"
                                name="nickname"
                                placeholder="닉네임"
                                autoComplete="off"
                                required
                            />
                            <Label htmlFor="schoolName">소속학교</Label>
                            <Input
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="소속학교"
                                autoComplete="off"
                            />
                            <Check>
                                <input type="checkbox" id="check" required />
                                <label htmlFor="check">개인정보 동의</label>
                            </Check>
                        </>
                    )}
                    <Button type="submit" onClick={setOpen}>
                        {!signUp ? "로그인" : "회원가입"}
                    </Button>

                    <Button type="button" onClick={onSignUp}>
                        {!signUp ? "Sign Up" : "Sign In"}
                    </Button>
                </SignForm>
            </ModalForm>
        </Container>
    );
};

export default AuthPresenter;
