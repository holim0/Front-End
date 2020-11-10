import React, { useCallback, useState } from "react";
import AuthContainer from "Routes/Common";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.div`
    position: fixed;
    background: #ffffff;
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
    height: 60px;
    max-width: 1024px;
    z-index: 100;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const SearchBar = styled.form`
    display: flex;
    align-items: center;
    background: #f5f8fa;
    border-radius: 12px;
    padding: 0 4px;
    input {
        all: unset;
        padding: 6px;
        width: 240px;
    }
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
                    <Logo>GongGus</Logo>
                    <SearchBar>
                        <input type="text" placeholder="검색하세요.." />
                        <button type="submit">
                            <AiOutlineSearch size={24} fill="#14171a" />
                        </button>
                    </SearchBar>
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
