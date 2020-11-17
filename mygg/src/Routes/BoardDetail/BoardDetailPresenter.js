import React from "react";

import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
`;
const BoardDetailPresenter = ({ boardById }) => {
    return (
        <Container>
            <div>
                <div>
                    <div>{boardById.category}</div>
                    <div>{boardById.title}</div>
                </div>
                <div>
                    <div>{boardById.owner}</div>
                    <div>{boardById.createDate}</div>
                </div>
            </div>

            <div>
                <div>{boardById.content}</div>
            </div>
            <div>
                <a href={`${boardById.goodsLink}`} target="blank">
                    {boardById.goodsLink}
                </a>
            </div>

            <div>
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
            </div>

            <div>{boardById.deadline}</div>
        </Container>
    );
};

export default BoardDetailPresenter;
