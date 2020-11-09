import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <div>로고</div>
        <div>
          <input type='text' placeholder='검색하세요..' />
          <button type='button'>돋</button>
        </div>
        <div>
          <ul>
            <li>회원가입/로그인</li>
          </ul>
        </div>
      </Nav>
    </Container>
  );
};

export default Header;
