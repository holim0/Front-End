import React from "react";
import CateBoardComponent from "Routes/Category/CateBoardComponent";
import styled from "styled-components";

const Title = styled.h1`
    width: 100%;
    text-align: center;
`;

const SearchPresenter = ({ searchBoard, searchText }) => {
    return (
        <>
            <Title>검색 : {searchText}</Title>
            <CateBoardComponent boardAll={searchBoard} />
        </>
    );
};

export default SearchPresenter;
