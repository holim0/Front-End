import React from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "Components/Loader";
import Progress from "Components/Progress/Progress";

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
    svg {
        cursor: pointer;
        z-index: 5;

        path {
            z-index: -20;
        }
    }
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

const CatePresenter = ({
    onBook,
    cateName,
    category,
    getBoardAll,
    userData,
    boardAll,
}) => {
    const selectCate = cateName.split("/")[1].toUpperCase();
    return !getBoardAll ? (
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
                                        }
                                    >
                                        {list}
                                    </CateName>
                                </li>
                            )
                        )}
                    </CateSubMenu>
                </CateNav>
                <BoardContainer>
                    <CateTitle>{selectCate}</CateTitle>
<<<<<<< HEAD
                    {boardAll.map((board) => (
                        <div key={board.id}>
                            {userData.bookmarkPosts.find(
                                (v) => v === board.id
                            ) ? (
                                <BsStarFill
                                    data-id={board.id}
                                    onClick={onBook}
                                    size={18}
                                />
                            ) : (
                                <BsStar
                                    data-id={board.id}
                                    size={18}
                                    onClick={onBook}
                                />
                            )}
                            <Link to={`/detail/${board.id}`}>
                                <BoardBox>
                                    <BoardTitle>
                                        <div>{board.title}</div>
                                        <BoardParty>
=======
                    {boardAll.length > 0 &&
                        boardAll.map((board) => (
                            <div key={board.id}>
                                {userData &&
                                userData.bookmarkPosts.find(
                                    (v) => v === board.id
                                ) ? (
                                    <BsStarFill
                                        data-id={board.id}
                                        onClick={onBook}
                                        size={18}
                                    />
                                ) : (
                                    <BsStar
                                        data-id={board.id}
                                        size={18}
                                        onClick={onBook}
                                    />
                                )}
                                <Link to={`/detail/${board.id}`}>
                                    <BoardBox>
                                        <BoardTitle>
                                            <div>{board.title}</div>

                                            {/* <BoardParty>
>>>>>>> gongus/master
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
                                            {board.participateUsers.length >
                                                5 && <span>...</span>}
                                        </BoardParty> */}
                                        </BoardTitle>
                                        <BoardInfo>
                                            <div>{board.deadline}</div>
                                            <div>
                                                {board.currentNumberOfPeople}
                                            </div>
                                            <div>
                                                {board.limitNumberOfPeople}
                                            </div>
                                            {/* <Progress
                                            participateUsers={
                                                board.currentNumberOfPeople
                                            }
                                            limitNumberOfPeople={
                                                board.limitNumberOfPeople
                                            }
                                        /> */}
                                        </BoardInfo>
                                    </BoardBox>
                                </Link>
                            </div>
                        ))}
                </BoardContainer>
            </CateContent>
        </Container>
    );
};

export default CatePresenter;
