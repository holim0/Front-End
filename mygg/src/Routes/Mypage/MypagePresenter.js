import React from "react";
import styled from "styled-components";
import theme from "Components/Theme";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 40px 1.5rem;
    margin-top: 100px;
    width: 640px;
    max-width: 640px;
    background-color: white;
    height: 320px;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Name = styled.div`
    font-size: ${(props) => props.theme.ls};
    color: #aeaeae;
`;

const RealName = styled.div`
    margin: 10px 0;
    font-size: 1.875rem;
    font-weight: 700;
`;

const Button = styled.button`
    font-size: ${(props) => props.theme.ls};
    position: absolute;
    right: 20px;
    bottom: 20px;
    border: 1px solid #aeaeae;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: #aeaeae;
    }
`;

const BtnGroup = styled.div`
    position: absolute;

    right: 50px;
    top: 130px;

    & > * {
        border: 3px solid #80d6ff;
        padding: 20px 20px;
        /* background-color: #80d6ff; */
        color: #80d6ff;
        font-size: ${(props) => props.theme.xls};
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
    }
    & > *:hover {
        background-color: #80d6ff;
        color: white;
    }
`;
const B1 = styled(Link)`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

const B2 = styled(Link)`
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const MypagePresenter = ({ name, username }) => {
    return (
        <Container>
            <ProfileBox>
                <Name>Name</Name>
                <RealName>{name}</RealName>
                <Name>Username</Name>
                <RealName>{username}</RealName>
                <BtnGroup>
                    <B1 to="/bookmark">찜 목록</B1>
                    <B2 to="/participate">참여 공구</B2>
                </BtnGroup>
                <Button>Edit Profile</Button>
            </ProfileBox>
        </Container>
    );
};

export default MypagePresenter;
