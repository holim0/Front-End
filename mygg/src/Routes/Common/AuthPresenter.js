import React from "react";
import styled, { css } from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    background: #333333;
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
    background: #ffffff;
    border-radius: 12px;
    top: 50%;
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
    font-size: 12px;
    color: #657786;
    width: 300px;
    margin: 2px 0;
`;

const Input = styled.input`
    width: 300px;
    padding: 8px;
    margin: 6px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 14px;
    &:focus {
        border: 1px solid #1da1f2;
    }
`;

const Check = styled.span`
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 12px;
    width: 260px;
`;

const Button = styled.button`
    cursor: pointer;
    width: 300px;
    text-align: center;
    border-radius: 33px;
    margin: 6px 0;
    padding: 6px 0;
    font-weight: 500;
    background: #1da1f2;
    color: #ffffff;

    ${(props) =>
        props.type === "button" &&
        css`
            color: #14171a;
            background: #ffffff;
            &:hover {
                text-decoration: underline;
            }
        `}
`;

const SocialButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    & > button {
        margin: 6px 8px;
        color: #ffffff;
        font-weight: 700;
        display: flex;
        width: 32px;
        padding: 3px;

        &:nth-child(1) {
            background: #1ec800;
            height: 32px;

            & > div {
                margin: 0 auto;
                font-size: 24px;
                font-weight: 900;
            }
        }

        &:nth-child(2) {
            background: #f9e000;
        }

        &:nth-child(3) {
            background: #4867aa;
        }
    }
`;

const AuthPresenter = ({ onSignModal, onSignUp, signUp }) => {
    return (
        <Container>
            <ModalBackground onClick={onSignModal}></ModalBackground>
            <ModalForm signUp={signUp}>
                <SignTitle>{!signUp ? "로그인" : "회원가입"}</SignTitle>
                <SignForm>
                    <Label htmlFor="userId">이메일</Label>
                    <Input
                        type="email"
                        id="userId"
                        name="userId"
                        placeholder="이메일"
                    />
                    <Label htmlFor="userPassword">패스워드</Label>
                    <Input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        placeholder="패스워드"
                    />
                    {signUp && (
                        <>
                            <Label htmlFor="verifyUserPassword">
                                패스워드확인
                            </Label>
                            <Input
                                type="password"
                                id="verifyUserPassword"
                                name="verifyUserPassword"
                                placeholder="패스워드확인"
                            />
                            <Label htmlFor="name">이름</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="이름"
                            />
                            <Label htmlFor="nickname">닉네임</Label>
                            <Input
                                type="text"
                                id="nickname"
                                name="nickname"
                                placeholder="닉네임"
                            />
                            <Label htmlFor="schoolName">소속학교</Label>
                            <Input
                                type="text"
                                id="schoolName"
                                name="schoolName"
                                placeholder="소속학교"
                            />
                            <Check>
                                <input
                                    type="checkbox"
                                    id="check"
                                    value="check"
                                />
                                <label htmlFor="check">개인정보 동의</label>
                            </Check>
                        </>
                    )}

                    <Button type="submit">로그인</Button>
                    <SocialButton>
                        <button type="button">
                            <div>N</div>
                        </button>
                        <button type="button">
                            <RiKakaoTalkFill fill="#371A1A" size={32} />
                        </button>
                        <button type="button">
                            <FaFacebookF size={32} />
                        </button>
                    </SocialButton>
                    <Button type="button" onClick={onSignUp}>
                        {!signUp ? "Sign Up" : "Sign In"}
                    </Button>
                </SignForm>
            </ModalForm>
        </Container>
    );
};

export default AuthPresenter;
