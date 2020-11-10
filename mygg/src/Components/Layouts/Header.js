import React, { useCallback, useState } from "react";
import AuthContainer from "Routes/Common";
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

const Sign = styled.div`
    cursor: pointer;
`;

const Header = () => {
    const [sign, setSign] = useState(false);

    const onSignModal = useCallback(
        (e) => {
            setSign((prev) => !prev);
        },
        [sign]
    );

    return (
        <>
            <Container>
                <Nav>
                    <div>로고</div>
                    <div>
                        <input type="text" placeholder="검색하세요.." />
                        <button type="button">돋</button>
                    </div>
                    <Sign>
                        <div onClick={onSignModal}>회원가입/로그인</div>
                    </Sign>
                </Nav>
            </Container>
            {sign && <AuthContainer onSignModal={onSignModal} sign={sign} />}
        </>
    );
};

export default Header;
