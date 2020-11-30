import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import BoardWritePresenter from "./BoardWritePresenter";
import * as actionPack from "modules/boardWrite";
import { useHistory } from "react-router-dom";

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
        goodslink,
        deadDate,
        limitNumberOfPeople,
    } = useSelector((state) => state.boardWrite);

    // 카테고리 처리
    const handleCate = (e) => {
        dispatch(actionPack.setCategory(e.value));
    };

    // 마감일 처리
    const setDate = (e) => {
        dispatch(actionPack.setDeadline(e));
    };
    //제목 처리

    const handleTitle = (e) => {
        dispatch(actionPack.setTitle(e.target.value));
    };
    // 본문 처리
    const handleContent = (content, delta, source, editor) => {
        dispatch(actionPack.setText(content));
    };

    // 링크 처리
    const handleLink = (e) => {
        dispatch(actionPack.setLink(e.target.value));
    };

    // 인원 수 처리

    const handlePeople = (e) => {
        dispatch(actionPack.setNumOfPeople(e.target.value));
    };

    // 제출 처리

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
            goodslink,
            deadline,
            limitNumberOfPeople,
            history,
        };
        dispatch(actionPack.boardRequeset(BoardData));

        // console.log(BoardData);

        // try {
        //     const res = await axios.post("/makepostsubmit", BoardData);
        //     console.log(res);
        //     alert("저장 성공!");
        //     history.push("/");
        // } catch (e) {
        //     alert(`저장 실패! 다시 시도해주세요.\n${e}`);
        //     setLoading(false);
        // }
    };

    return (
        <Container>
            <BoardWritePresenter
                date={deadDate}
                setDate={setDate}
                handleCate={handleCate}
                title={title}
                handleTitle={handleTitle}
                goodslink={goodslink}
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
