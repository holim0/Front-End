import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BoardWritePresenter from "./BoardWritePresenter";
import * as actionPack from "modules/boardWrite";
import { useHistory, useParams } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const BoardWriteContainer = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const history = useHistory();

    const {
        category,
        title,
        content,
        goodsLink,
        deadDate,
        currentNumberOfPeople,
        limitNumberOfPeople,
        isEdit,
    } = useSelector((state) => state.boardWrite);

    // 카테고리 처리
    const handleCate = useCallback(
        (e) => {
            dispatch(actionPack.setCategory(e.value));
        },
        [dispatch]
    );

    // 마감일 처리
    const setDate = useCallback(
        (e) => {
            dispatch(actionPack.setDeadline(e));
        },
        [dispatch]
    );

    //제목 처리

    const handleTitle = useCallback(
        (e) => {
            dispatch(actionPack.setTitle(e.target.value));
        },
        [dispatch]
    );
    // 본문 처리
    const handleContent = useCallback(
        (content, delta, source, editor) => {
            dispatch(actionPack.setText(content));
        },
        [dispatch]
    );

    // 링크 처리
    const handleLink = useCallback(
        (e) => {
            dispatch(actionPack.setLink(e.target.value));
        },
        [dispatch]
    );

    // 인원 수 처리

    const handlePeople = useCallback(
        (e) => {
            dispatch(actionPack.setNumOfPeople(e.target.value));
        },
        [dispatch]
    );

    // 제출 처리
    const { id } = useParams(); // edit 시 board id 값 제출을 위함

    const handleSubmit = async () => {
        const deadline =
            String(deadDate.getFullYear()) +
            "-" +
            String(Number(deadDate.getMonth()) + 1) +
            "-" +
            String(deadDate.getDate());

        const BoardData = {
            category,
            title,
            content,
            goodsLink,
            deadline,
            limitNumberOfPeople,
            history,
        };
        if (isEdit) {
            dispatch(actionPack.boardEditRequest({ ...BoardData, id }));
            // history.push(`/${category.toLowerCase()}`);
            console.log(category);
        } else {
            dispatch(actionPack.boardRequeset(BoardData));
            // history.push(`/${category.toLowerCase()}`);
        }
    };

    useEffect(() => {
        dispatch(actionPack.writeBoard());
    }, []);

    return (
        <Container>
            <BoardWritePresenter
                date={deadDate}
                setDate={setDate}
                handleCate={handleCate}
                title={title}
                handleTitle={handleTitle}
                limitNumberOfPeople={limitNumberOfPeople}
                currentNumberOfPeople={currentNumberOfPeople}
                goodsLink={goodsLink}
                handleLink={handleLink}
                handlePeople={handlePeople}
                handleSubmit={handleSubmit}
                handleContent={handleContent}
                content={content}
                loading={loading}
            />
        </Container>
    );
};

export default BoardWriteContainer;
