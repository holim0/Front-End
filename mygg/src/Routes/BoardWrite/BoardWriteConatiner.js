import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BoardWritePresenter from "./BoardWritePresenter";
import * as actionPack from "modules/boardWrite";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const BoardWriteContainer = () => {
    const dispatch = useDispatch();
    ///카테고리 처리
    const cate = useSelector((state) => state.boardWrite.category); // 나중에 통신을 위해.
    const handleCate = (e) => {
        dispatch(actionPack.setCategory(e.value));
    };

    //제목 처리
    const title = useSelector((state) => state.boardWrite.title);

    const handleTitle = (e) => {
        dispatch(actionPack.setTitle(e.target.value));
    };

    // 링크 처리

    const link = useSelector((state) => state.boardWrite.link);

    const handleLink = (e) => {
        dispatch(actionPack.setLink(e.target.value));
    };

    // 마감일 처리

    const [date, setDate] = useState(new Date());

    // 인원 수 처리

    const numOfpeople = useSelector((state) => state.boardWrite.numOfPeople);

    const handlePeople = (e) => {
        dispatch(actionPack.setNumOfPeople(e.target.value));
    };

    // 제출 처리
    const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
    const loading = useSelector((state) => state.boardWrite.loading);

    const handleSubmit = async () => {
        await sleep(1000);
        dispatch(actionPack.setLoading(false));
        console.log(loading, cate, title, link, date, numOfpeople);
    };

    return (
        <Container>
            <BoardWritePresenter
                date={date}
                setDate={setDate}
                handleCate={handleCate}
                title={title}
                handleTitle={handleTitle}
                link={link}
                handleLink={handleLink}
                handlePeople={handlePeople}
                handleSubmit={handleSubmit}
            />
        </Container>
    );
};

export default BoardWriteContainer;
