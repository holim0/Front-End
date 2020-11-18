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
`;

const Content = styled.div`
    min-height: 360px;
`;

const GoodsLink = styled.div`
    width: 200px;
`;

const Participate = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
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
                    {boardById.goodsLink}
                </a>
            </GoodsLink>
            <Content>
                <div>{boardById.content}</div>
            </Content>

            <Participate>
                <div>
                    {boardById.participateUsers.map((user) => (
                        <div key={user.id}>
                            참가
                            <div>{user.nickname}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <div>{boardById.limitNumberOfPeople}</div>
                </div>
                <Progress
                    participateUsers={boardById.participateUsers}
                    limitNumberOfPeople={boardById.limitNumberOfPeople}
                />
            </Participate>
        </Container>
    );
};

export default BoardDetailPresenter;
