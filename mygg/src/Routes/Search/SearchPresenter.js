import React from "react";

const SearchPresenter = ({ searchBoard, searchText }) => {
    console.log(searchBoard);
    return (
        <div>
            <div>검색 : {searchText}</div>
        </div>
    );
};

export default SearchPresenter;
