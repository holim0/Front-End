import React from "react";
import styled, { css } from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import { Link } from "react-router-dom";
import Loader from "Components/Loader";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.lightenBlack};
`;

const CateContent = styled.div`
    max-width: 1060px;
    width: 100%;
    display: flex;
    margin: 0 auto;
`;

const CateNav = styled.nav`
    width: 100%;

    h1 {
        padding: 12px;
        margin-bottom: 12px;
    }
`;

const CateSubMenu = styled.ul`
    background: ${(props) => props.theme.white};
    padding: 12px;
    margin: 24px;
    margin-left: 0;

    position: sticky;
    top: 100px;
    border-radius: 12px;
    li {
        padding: 12px 0;
        font-size: ${(props) => props.theme.ls};
    }
`;

const CateTitle = styled.h2`
    margin: 0;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
`;

const BoardContainer = styled.div`
    margin: 0 auto;
`;

const BoardBox = styled.div`
    width: 760px;
    height: 130px;
    display: flex;
    justify-content: space-around;
    border: 1px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.white};
    padding: 12px;
    margin: 24px 0;
`;

const BoardTitle = styled.div`
    position: relative;
    width: 70%;
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
        width: 80%;
        font-size: ${(props) => props.theme.ms};
        margin-right: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;

        a:hover {
            text-decoration: underline;
        }
    }
    svg {
        position: absolute;
        right: 10px;
        top: 0px;
        cursor: pointer;
    }
`;

const BoardParty = styled.div`
    position: absolute;
    display: flex;
    bottom: 1px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    line-height: 34px;
    & > div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 6px;

        & > img {
            border: 1px solid ${(props) => props.theme.lightenBlack};
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    span {
        margin-left: 5px;
        line-height: 24px;
        border: 1px solid ${(props) => props.theme.lightenBlack};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: ${(props) => props.theme.ls};
        cursor: pointer;
        text-align: center;

        &:hover {
            background: ${(props) => props.theme.lightenBlack};
        }
    }
`;

const BoardInfo = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    width: 30%;

    & > div {
        text-align: center;
    }

    & > div:nth-child(1) {
        position: relative;
        &::before {
            content: "마감";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.black};
            border-radius: 12px;
        }
    }
    & > div:nth-child(2) {
        position: relative;

        &::before {
            content: "현재";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.lightenBlue};
            border-radius: 12px;
        }
    }
    & > div:nth-child(3) {
        position: relative;

        &::before {
            content: "제한";
            width: 96%;
            height: 16px;
            font-size: ${(props) => props.theme.ss};
            position: absolute;
            left: 0;
            top: 25px;
            color: ${(props) => props.theme.white};
            background: ${(props) => props.theme.red};
            border-radius: 12px;
        }
    }
`;

const ProgressBar = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const ProgressBarWrap = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 8px;
    border-radius: 12px;
    background: ${(props) => props.theme.yellow};
`;

const ProgressGage = styled.div`
    position: absolute;
    bottom: 0;
    height: 8px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: ${(props) => `${props.progress}%`};
    z-index: 2;
    background: ${(props) => props.theme.blue};
    ${(props) =>
        props.progress === 100 &&
        css`
            background: ${(props) => props.theme.red};
        `}
`;

const Finished = styled.div`
    position: absolute;
    bottom: 10px;
    color: ${(props) => props.theme.red};
    right: 0;
`;

const Progressing = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    font-size: ${(props) => props.theme.ss};
`;

const SelectedCate = styled.li`
    color: ${(props) => props.theme.yellow};
    pointer-events: none;
`;

const CateName = styled(Link)`
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: ${(props) => props.theme.yellow};
    }
`;

/////////////////////////////////////////////////////////////////////////////

const CatePresenter = ({
    cateName,
    category,
    boards,
    checkPercent,
    limitNumberOfPeople,
    loading,
}) => {
    const selectCate = cateName.split("/")[1].toUpperCase();
    // console.log(loading);
    return loading ? (
        <Loader />
    ) : (
        <Container>
            <CateContent>
                <CateNav>
                    <h1>Category</h1>
                    <CateSubMenu>
                        {category.map((list, index) =>
                            list.toUpperCase() === selectCate ? (
                                <SelectedCate key={index}>{list}</SelectedCate>
                            ) : (
                                <li key={index}>
                                    <CateName
                                        to={
                                            list === "글쓰기"
                                                ? "/write"
                                                : `/${list.toLowerCase()}`
                                        }>
                                        {list}
                                    </CateName>
                                </li>
                            )
                        )}
                    </CateSubMenu>
                </CateNav>
                <BoardContainer>
                    <CateTitle>{selectCate}</CateTitle>
                    {boards.map((board) => (
                        <Link to={`/detail/${board.id}`}>
                            <BoardBox key={board.id}>
                                <BoardTitle>
                                    <div>
                                        <Link to="/">{board.title}</Link>
                                    </div>

                                    <BsStarFill size={18} fill="white" />
                                    <BsStar size={18} />
                                    <BoardParty>
                                        {board.participateUsers
                                            .slice(0, 5)
                                            .map((user, index) => (
                                                <div key={index}>
                                                    <img
                                                        src={user.img}
                                                        alt="user"
                                                    />
                                                </div>
                                            ))}
                                        {board.participateUsers.length > 5 && (
                                            <span>...</span>
                                        )}
                                    </BoardParty>
                                </BoardTitle>
                                <BoardInfo>
                                    <div>{board.deadline}</div>
                                    <div>{board.participateUsers.length}</div>
                                    <div>{board.limitNumberOfPeople}</div>
                                    <ProgressBar>
                                        <ProgressBarWrap></ProgressBarWrap>
                                        <ProgressGage
                                            progress={Math.round(
                                                (board.participateUsers.length /
                                                    limitNumberOfPeople) *
                                                    100
                                            )}>
                                            {/* 이곳 조건문은 후에 finishcheck가 되면 수정 */}
                                            {board.participateUsers.length ===
                                                board.limitNumberOfPeople && (
                                                <Finished>
                                                    <ImFire />
                                                </Finished>
                                            )}
                                        </ProgressGage>
                                        {board.participateUsers.length ===
                                            board.limitNumberOfPeople || (
                                            <Progressing>
                                                {checkPercent(
                                                    Math.round(
                                                        (board.participateUsers
                                                            .length /
                                                            limitNumberOfPeople) *
                                                            100
                                                    )
                                                )}
                                            </Progressing>
                                        )}
                                    </ProgressBar>
                                </BoardInfo>
                            </BoardBox>
                        </Link>
                    ))}
                </BoardContainer>
            </CateContent>
        </Container>
    );
};

export default CatePresenter;
