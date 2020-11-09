import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const AuthPresenter = () => {
  return (
    <Container>
      <form>
        <input type='email' placeholder='이메일' />
        <input type='password' placeholder='패스워드' />
        <input type='password' placeholder='패스워드확인' />
        <input type='text' placeholder='이름' />
        <input type='text' placeholder='닉네임' />
        <input type='text' placeholder='소속학교' />
        <input type='checkbox' />
      </form>
    </Container>
  );
};

export default AuthPresenter;
