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
    font-size: ${(props) => props.theme.ms};
    color: ${(props) => props.theme.black};
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
    border-top: 1px solid ${(props) => props.theme.lightenBlack};
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

const BoardDetailPresenter = ({ boardById }) => {
    return (
        <Container>
            <DeatailBox>
                <DetailCategory>{boardById.category}</DetailCategory>
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

            <LimitUser>Limit : {boardById.limitNumberOfPeople}</LimitUser>

            <ParticipateUser>
                현재 참여 중입니다!
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
        </Container>
    );
};

export default BoardDetailPresenter;
