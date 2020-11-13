import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContainer from "Routes/Common";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "modules/user";
import { signFormShowing } from "modules/header";
import { useInput } from "hooks";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    background: ${(props) => props.theme.white};
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 500;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 60px;
    max-width: 1060px;
    z-index: 100;
    padding: 12px;
`;

const Logo = styled.div`
    font-size: ${(props) => props.theme.xls};
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    a {
        color: ${(props) => props.theme.black};
        text-decoration: none;
    }
`;

const SearchBar = styled.form`
    display: flex;
    align-items: center;
    background: ${(props) => props.theme.lightenBlack};
    justify-content: space-between;
    border-radius: 12px;
    padding: 0 4px;
    flex: 1;
    input {
        all: unset;
        padding: 6px;
        width: 240px;
        text-align: center;
        flex: 1;
        &:focus {
            text-align: left;
        }
    }

    button[type="reset"] {
        font-size: ${(props) => props.theme.ms};
        display: ${(props) => (props.showReset ? "block" : "none")};

        &:hover {
            color: ${(props) => props.theme.lightenBlack};
        }
    }
`;

const Sign = styled.div`
    flex: 1;

    & > div {
        cursor: pointer;
        width: fit-content;
        margin: 0;
        margin-left: auto;
    }
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const UserProfile = styled.div`
    border: 1px solid ${(props) => props.theme.lightenBlack};
    border-radius: 50%;
    width: 30px;
    margin-right: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    position: relative;

    &:hover ul {
        position: absolute;
        right: -50px;
        height: 205px;
        transition: height 300ms;
        background: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.lightenBlack};
    }
`;

const UserProfileMenu = styled.ul`
    position: absolute;
    top: 30px;
    right: 0px;
    width: 120px;
    height: 0px;
    overflow: hidden;
    & > li {
        cursor: pointer;
        padding: 6px;

        &:hover {
            background: ${(props) => props.theme.blue};
            color: ${(props) => props.theme.white};
        }
    }
`;

const Header = () => {
    const dispatch = useDispatch();

    // signin/signup modal on & off
    const { isSign } = useSelector((state) => state.header);

    const onSignModal = useCallback(() => {
        dispatch(signFormShowing());
    }, [dispatch]);

    // search text & text reset

    const [text, setText, onChange] = useInput("");

    const onReset = useCallback(() => {
        setText("");
    }, [setText]);

    // check user
    const [users, setUser] = useState("");
    const user = useSelector((state) => state.user.isLogin);

    const onLogOut = useCallback(() => {
        dispatch(logOut());
    }, [dispatch]);

    useEffect(() => {
        setUser(user);
    }, [user]);

    return (
        <>
            <Container>
                <HeaderContainer>
                    <Logo>
                        <Link to="/">GongGus</Link>
                    </Logo>
                    <SearchBar showReset={text}>
                        <button type="reset" onClick={onReset}>
                            X
                        </button>
                        <input
                            type="text"
                            value={text}
                            onChange={onChange}
                            placeholder="검색하세요.."
                        />
                        <button type="submit">
                            <AiOutlineSearch size={24} fill="#14171a" />
                        </button>
                    </SearchBar>
                    {users ? (
                        <UserMenu>
                            <UserProfile>
                                <FaUserAlt size={18} fill="#657786" />
                                <UserProfileMenu>
                                    <li>메뉴1</li>
                                    <li>메뉴2</li>
                                    <li>메뉴3</li>
                                    <li>메뉴4</li>
                                    <li onClick={onLogOut}>로그아웃</li>
                                </UserProfileMenu>
                            </UserProfile>
                        </UserMenu>
                    ) : (
                        <Sign>
                            <div onClick={onSignModal}>회원가입/로그인</div>
                        </Sign>
                    )}
                </HeaderContainer>
            </Container>
            {isSign && (
                <AuthContainer onSignModal={onSignModal} isSign={isSign} />
            )}
        </>
    );
};

export default Header;
