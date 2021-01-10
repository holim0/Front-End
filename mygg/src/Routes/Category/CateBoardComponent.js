import React, { useCallback } from "react";
import { BsStar } from "react-icons/bs";
import Progress from "Components/Progress/Progress";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signFormShowing } from "modules/header";
import { addBookMarkRequest, removeBookMarkRequest } from "modules/auth";
import { Empty } from "antd";

const BoardContainer = styled.div`
    margin: 0 auto;
    flex: 3;
    width: 100%;
    svg {
        cursor: pointer;
        z-index: 5;
        path {
            z-index: 4;
        }
    }
`;

const EmptyContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CateTitle = styled.h2`
    margin: 0;
    margin-bottom: 12px;
    padding: 12px;
    width: 100%;
`;

const BoardCard = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 350px);
    justify-content: center;
    gap: 8px;
`;

const BoardBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px;
    position: relative;
    height: 350px;
    max-height: 350px;
    border: 1px solid ${(props) => props.theme.border};
    ${({ finish }) =>
        finish &&
        css`
            opacity: 0.7;
            text-decoration: line-through;
        `}
`;

const BoardTitle = styled.div`
    padding-left: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    & > div:nth-child(1) {
        font-size: ${({ theme }) => theme.ls};
    }
`;

const BoardContent = styled.div`
    margin-top: 10px;
    width: 100%;
`;

const BoardInfo = styled.div`
    display: grid;
    margin-bottom: 70px;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    & > div {
        text-align: center;
    }

    & > div:nth-child(1) {
        position: relative;
        &::before {
            content: "마감";
            width: 96%;
            height: 20px;
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
            height: 20px;
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
            height: 20px;
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

const ProgressBottom = styled.div`
    position: relative;
`;

const CateBoardComponent = ({ selectCate, boardAll }) => {
    const { userData } = useSelector((state) => state.auth);
    const { isLogin } = useSelector((state) => state.sign);
    const dispatch = useDispatch();

    // 북마크 추가
    const handleBook = useCallback(
        (e) => {
            if (!isLogin) {
                alert("로그인 하셔야 가능합니다.");
                return dispatch(signFormShowing());
            }

            // 클릭한 게시글의 id를 찾습니다.
            let { id } = e.target.dataset;
            if (!id) return (id = e.target.parentNode.dataset.id);

            userData.bookmarkPosts.find((v) => +v === +id)
                ? dispatch(removeBookMarkRequest(+id))
                : dispatch(addBookMarkRequest(+id));
        },
        [dispatch, userData.bookmarkPosts, isLogin]
    );

    return (
        <BoardContainer>
            <CateTitle>{selectCate}</CateTitle>

            {boardAll.length > 0 || (
                <EmptyContainer>
                    <Empty description={false} />
                </EmptyContainer>
            )}
            <BoardCard>
                {boardAll.length > 0 &&
                    boardAll.map((board) => (
                        <div key={board.id}>
                            <BsStar
                                data-id={board.id}
                                color={
                                    !userData.ownPosts.find(
                                        (v) => v === +board.id
                                    ) &&
                                    userData?.bookmarkPosts.find(
                                        (v) => +v === board.id
                                    )
                                        ? "rgb(251, 188, 31)"
                                        : ""
                                }
                                onClick={handleBook}
                                size={18}
                            />

                            <BoardBox
                                finish={
                                    board.finishCheck ||
                                    board.currentNumberOfPeople ===
                                        board.limitNumberOfPeople
                                }
                            >
                                <Link to={`/detail/${board.id}`}>
                                    <BoardTitle>
                                        <div>{board.title}</div>
                                    </BoardTitle>
                                    <BoardContent
                                        dangerouslySetInnerHTML={{
                                            __html: board.content.slice(0, 200),
                                        }}
                                    ></BoardContent>
                                </Link>

                                <div>
                                    <BoardInfo>
                                        <div>{board.deadline}</div>
                                        <div>{board.currentNumberOfPeople}</div>
                                        <div>{board.limitNumberOfPeople}</div>
                                    </BoardInfo>
                                    <ProgressBottom>
                                        <Progress
                                            currentNumberOfPeople={
                                                board.currentNumberOfPeople
                                            }
                                            limitNumberOfPeople={
                                                board.limitNumberOfPeople
                                            }
                                        />
                                    </ProgressBottom>
                                </div>
                            </BoardBox>
                        </div>
                    ))}
            </BoardCard>
        </BoardContainer>
    );
};

export default CateBoardComponent;
