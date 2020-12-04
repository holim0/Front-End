import Progress from "Components/Progress/Progress";
import React from "react";
import styled, { css } from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    padding: 24px;
`;

const DeatailBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const DetailCategory = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.theme.ms};
    color: ${(props) => props.theme.black};

    & > div {
        cursor: pointer;
    }
`;

const DetailTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${(props) => props.theme.xls};
    padding-bottom: 12px;
    border-bottom: 1px solid ${(props) => props.theme.yellow};
`;

const DetailOwner = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
`;

const GoodsLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;

    a:hover {
        text-decoration: underline;
    }
`;

const BoardEditBtn = styled.button`
    all: unset;
    cursor: pointer;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    padding: 6px 12px;
    margin-right: 5px;
`;

const BoardDelBtn = styled.button`
    all: unset;
    cursor: pointer;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    margin-right: 5px;
    padding: 6px 12px;
`;

const Content = styled.div`
    min-height: 300px;
    border-top: 1px solid ${(props) => props.theme.border};
    padding-top: 10px;
`;

const LimitUser = styled.div`
    color: ${(props) => props.theme.red};
`;

const ParticipateUser = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    padding: 12px;
    padding-left: 0;
`;

const Participate = styled.div`
    position: relative;
    width: 300px;
    text-align: center;
`;

const BoardComment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CommentsList = styled.div`
    margin-top: 30px;
    font-size: ${(props) => props.theme.ms};
    font-weight: bold;
`;

const CommentWriting = styled.form`
    display: flex;
    border: 1px solid ${(props) => props.theme.border};
    margin: 20px 0;

    & > input {
        all: unset;
        flex: 2;
        padding: 6px;
        height: 30px;
        &:focus {
            background-color: #f5f8fa;
        }
    }

    & > button {
        all: unset;
        cursor: pointer;
        width: 30px;
        height: 30px;
        padding: 6px;
        background-color: ${(props) => props.theme.blue};
        color: ${(props) => props.theme.white};
    }
`;

const CommentBox = styled(Typography)`
    width: 100%;
    height: 100%;
    /* border: 1px solid ${(props) => props.theme.border}; */
`;

const CommentBoxList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${(props) => props.theme.border};
    border-bottom: none;
    &:last-child {
        border-bottom: 1px solid ${(props) => props.theme.border};
    }

    & > div {
        display: flex;
        height: 100%;
        padding: 20px;

        &:nth-child(1) {
            border-right: 1px solid ${(props) => props.theme.border};
        }

        &:nth-child(2) {
            flex: 2;
            border-right: 1px solid ${(props) => props.theme.border};
        }

        &:nth-child(3) {
            padding: 0 6px;
        }
    }
`;

const ButtonBox = styled.button`
    all: unset;
    width: 50px;
    height: 30px;
    text-align: center;
    cursor: pointer;
    padding: 6px 12px;
    margin-bottom: 6px;
    background-color: ${(props) =>
        props.isParticipate ? props.theme.red : props.theme.blue};
    color: ${(props) => props.theme.white};
    ${(props) =>
        props.finishCheck &&
        css`
            pointer-events: none;
            background: ${(props) => props.theme.black};
            color: ${(props) => props.theme.lightenBlack};
            text-decoration: line-through;
        `};
`;

const Btn = styled.button`
    margin-right: 10px;
`;

const CommentInput = styled.input`
    height: 50px;
    width: 70%;
    border-radius: 10px;
`;

const Nobody = styled.div`
    font-size: 25px;
    border: none;
`;

const BoardDetailPresenter = ({
    comment,
    handleAddParty,
    boardById,
    curPageComment,
    handleGoBack,
    page,
    handleComment,
    commentSubmit,
    handleCommentEdit,
    handleCommentEditDone,
    handleEditComment,
    handleCommentPage,
    userData,
    handleEditBoard,
    handleDelComment,
    handleDelBoard,
}) => {
    return (
        <Container>
            <DeatailBox>
                <DetailCategory>
                    {boardById.category}
                    <div onClick={handleGoBack}>목록으로</div>
                </DetailCategory>
                <DetailTitle>
                    <div>{boardById.title}</div>
                </DetailTitle>
                <DetailOwner>
                    <div>{boardById.owner.nickname}</div>
                    <div>{boardById.deadline}</div>
                </DetailOwner>
            </DeatailBox>
            <GoodsLink>
                <a href={`${boardById.goodsLink}`} target="blank">
                    Link : {boardById.goodsLink}
                </a>
                <div>
                    <BoardEditBtn onClick={handleEditBoard} type="button">
                        수정
                    </BoardEditBtn>
                    <BoardDelBtn onClick={handleDelBoard} type="button">
                        삭제
                    </BoardDelBtn>
                </div>
            </GoodsLink>
            <Content
                dangerouslySetInnerHTML={{
                    __html: boardById.content,
                }}></Content>
            {userData &&
            userData.participatePosts.find(
                (v) => parseInt(v.id) === boardById.id
            ) ? (
                <ButtonBox
                    type="button"
                    onClick={handleAddParty}
                    data-id={boardById.id}
                    isParticipate={true}>
                    나가기
                </ButtonBox>
            ) : (
                <ButtonBox
                    type="button"
                    onClick={handleAddParty}
                    isParticipate={false}
                    finishCheck={boardById.finishCheck}
                    data-id={boardById.id}>
                    {boardById.finishCheck ? "마감" : "참여"}
                </ButtonBox>
            )}
            <LimitUser>Limit : {boardById.limitNumberOfPeople}</LimitUser>
            <ParticipateUser>
                현재 참여 중인 인원은 {boardById.currentNumberOfPeople}명
                입니다!
            </ParticipateUser>
            <Participate>
                <Progress
                    currentNumberOfPeople={boardById.currentNumberOfPeople}
                    limitNumberOfPeople={boardById.limitNumberOfPeople}
                />
            </Participate>
            <BoardComment>
                <CommentsList>
                    Comments: {boardById.comments.length}개
                </CommentsList>
                <CommentWriting onSubmit={commentSubmit}>
                    <input
                        placeholder="댓글을 남겨보세요"
                        onChange={handleComment}
                        value={comment}
                    />
                    <button type="submit">등록</button>
                </CommentWriting>
                <CommentBox>
                    {boardById.comments.length > 0 ? (
                        curPageComment.map((cm, idx) => (
                            <CommentBoxList key={idx}>
                                <div>{cm.writer}</div>
                                {cm.isEdit ? (
                                    <CommentInput
                                        value={cm.content}
                                        onChange={(e) =>
                                            handleEditComment(idx, e)
                                        }></CommentInput>
                                ) : (
                                    <div>{cm.content}</div>
                                )}
                                <div>{cm.createdDate}</div>
                                {cm.isEdit ? (
                                    <Btn
                                        onClick={handleCommentEditDone}
                                        value={idx}>
                                        완료
                                    </Btn>
                                ) : (
                                    <>
                                        <Btn
                                            onClick={handleCommentEdit}
                                            value={idx}>
                                            수정
                                        </Btn>
                                        <Btn
                                            onClick={handleDelComment}
                                            value={idx}>
                                            삭제
                                        </Btn>
                                    </>
                                )}
                            </CommentBoxList>
                        ))
                    ) : (
                        <Nobody>아직 댓글이 없습니다.</Nobody>
                    )}
                </CommentBox>
                <Pagination
                    count={
                        boardById.comments.length > 0
                            ? Math.ceil(boardById.comments.length / 10)
                            : 0
                    }
                    variant="outlined"
                    shape="rounded"
                    style={{ margin: "15px auto" }}
                    page={page}
                    onChange={handleCommentPage}
                />
            </BoardComment>
        </Container>
    );
};

export default BoardDetailPresenter;
