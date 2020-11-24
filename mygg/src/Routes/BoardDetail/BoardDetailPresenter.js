import Progress from "Components/Progress/Progress";
import React from "react";

import styled from "styled-components";

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
    width: 200px;
    padding-bottom: 6px;
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

const CommentBox = styled.div`
    width: 100%;
    border: 1px solid ${(props) => props.theme.border};
`;

const CommentBoxList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.border};

    &:last-child {
        border-bottom: none;
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
`;

const BoardDetailPresenter = ({
    comment,
    boardById,
    onClick,
    isParticipate,
    onGoBack,
    handleComment,
    commentSubmit,
}) => {
    return (
        <Container>
            <DeatailBox>
                <DetailCategory>
                    {boardById.category}
                    <div onClick={onGoBack}>목록으로</div>
                </DetailCategory>
                <DetailTitle>
                    <div>{boardById.title}</div>
                </DetailTitle>
                <DetailOwner>
                    <div>{boardById.owner}</div>
                    <div>{boardById.deadline}</div>
                </DetailOwner>
            </DeatailBox>
            <GoodsLink>
                <a href={`${boardById.goodsLink}`} target="blank">
                    Link : {boardById.goodsLink}
                </a>
            </GoodsLink>
            <Content>
                <div>{boardById.content}</div>
            </Content>

            {userData.participatePosts.find((v) => v === boardById.id) ? (
                <ButtonBox
                    type="button"
                    onClick={onClick}
                    data-id={boardById.id}
                    isParticipate={true}
                >
                    나가기
                </ButtonBox>
            ) : (
                <ButtonBox
                    type="button"
                    onClick={onClick}
                    isParticipate={false}
                    data-id={boardById.id}
                >
                    참여
                </ButtonBox>
            )}
            <LimitUser>Limit : {boardById.limitNumberOfPeople}</LimitUser>
            <ParticipateUser>
                현재 참여 중인 인원입니다!
                {boardById.participateUsers.map((user) => (
                    <div key={user.id}>
                        <div>
                            {user.nickname.length > 0 ? (
                                `${user.nickname}`
                            ) : (
                                <div>아직 참여 인원이 없습니다.</div>
                            )}
                        </div>
                    </div>
                ))}
            </ParticipateUser>
            <Participate>
                <Progress
                    participateUsers={boardById.participateUsers}
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
                        boardById.comments.map((cm) => (
                            <CommentBoxList key={cm.createdDate}>
                                <div>{cm.writer}</div>
                                <div>{cm.content}</div>
                                <div>{cm.createdDate}</div>
                            </CommentBoxList>
                        ))
                    ) : (
                        <div>댓글이 현재 없어요</div>
                    )}
                </CommentBox>
            </BoardComment>
        </Container>
    );
};

export default BoardDetailPresenter;
