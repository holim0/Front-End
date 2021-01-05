import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    width: 90%;
    margin: 30px auto;
    border-radius: 10px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    scroll-behavior: smooth;
    box-shadow: 7px 7px 7px 7px gray;
    background-color: #f5f5f5;
`;

const Title = styled.div`
    width: 100%;
    margin-top: 100px;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
`;

const BoardBox = styled.div`
    width: 760px;
    height: 130px;
    display: flex;
    justify-content: space-around;
    border: 2px solid ${(props) => props.theme.border};
    background: ${(props) => props.theme.white};
    padding: 12px;
    margin: 20px auto;
    border-radius: 10px;
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
            margin-top: 10px;
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
        margin-top: 10px;
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
        margin-top: 10px;
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

const Writer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

const PartiPresenter = ({ ParticipatePosts }) => {
    return (
        <>
            <Title>참여 중 공동구매</Title>
            <Container>
                {ParticipatePosts.length > 0 &&
                    ParticipatePosts.map((board) => {
                        return (
                            <Link to={`/detail/${board.id}`}>
                                <BoardBox>
                                    <BoardTitle>
                                        <div>{board.title}</div>
                                    </BoardTitle>
                                    <BoardInfo>
                                        <div>{board.deadline}</div>
                                        <div>{board.currentNumberOfPeople}</div>
                                        <div>{board.limitNumberOfPeople}</div>
                                        <Writer>작성자: </Writer>
                                    </BoardInfo>
                                </BoardBox>
                            </Link>
                        );
                    })}
            </Container>
        </>
    );
};

export default PartiPresenter;
