import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import theme from "Components/Theme";
import { Link } from "react-router-dom";

const Container = styled.form`
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
    font-size: ${(props) => props.theme.xls};
    color: #494949;
    margin-bottom: 10px;
`;

const Input = styled.input`
    font-size: ${(props) => props.theme.ls};
    border-radius: 0.375rem;
    border: 2px solid #aeaeae;
    margin-bottom: 15px;
    padding: 7px;
    color: #000a12;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:focus {
        outline: none;
        box-shadow: 0 0 3px 3px #0077c2;
        border: 2px solid #0077c2;
    }
`;

const Button = styled.button`
    font-size: ${(props) => props.theme.ls};
    height: 50px;
    width: 100px;
    margin: 0 auto;
    top: 500px;
    position: absolute;
    background-color: #004ba0;
    color: white;
    border: 1px solid #004ba0;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        opacity: 0.8;
    }
`;

const MypageEditPresenter = ({
    name,
    username,
    handleName,
    handleUsername,
    handleSubmit,
}) => {
    return (
        <Container onSubmit={handleSubmit}>
            <ProfileBox>
                <Name>Name</Name>
                <Input type="text" value={name} onChange={handleName} />
                <Name>Username</Name>
                <Input type="text" value={username} onChange={handleUsername} />
            </ProfileBox>
            <Button type="submit">SAVE</Button>
        </Container>
    );
};

export default MypageEditPresenter;
