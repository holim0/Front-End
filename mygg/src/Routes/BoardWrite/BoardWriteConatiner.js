import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BoardWritePresenter from "./BoardWritePresenter";
import * as actionPack from "modules/boardWrite";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const BoardWriteContainer = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    ///카테고리 처리
    const {
        category,
        title,
        content,
        link,
        deadline,
        numOfPeople,
        loading,
    } = useSelector((state) => state.boardWrite);

    const handleCate = (e) => {
        dispatch(actionPack.setCategory(e.value));
    };

    const setDate = (e) => {
        dispatch(actionPack.setDeadline(e));
    };
    //제목 처리

    const handleTitle = (e) => {
        dispatch(actionPack.setTitle(e.target.value));
    };
    // 링크 처리
    const handleLink = (e) => {
        dispatch(actionPack.setLink(e.target.value));
    };

    // 인원 수 처리

    const numOfpeople = useSelector((state) => state.boardWrite.numOfPeople);

    const handlePeople = (e) => {
        dispatch(actionPack.setNumOfPeople(e.target.value));
    };
    // 제출 처리

    const handleSubmit = async () => {
        const BoardData = {
            category,
            title,
            content,
            link,
            deadline,
            numOfPeople,
        };
        try {
            const res = await axios.post("/makepostsubmit", BoardData);
            console.log(res);
            history.push("/");
        } catch (e) {
            console.log(e);
            dispatch(actionPack.setLoading(false));
        }
    };

    const handleContent = (content, delta, source, editor) => {
        dispatch(actionPack.setText(content));
    };

    return (
        <Container>
            <BoardWritePresenter
                date={deadline}
                setDate={setDate}
                handleCate={handleCate}
                title={title}
                handleTitle={handleTitle}
                link={link}
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
