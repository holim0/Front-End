import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { useSelector, useDispatch } from "react-redux";
import { searchRequest } from "modules/header";

const SearchContainer = () => {
    const { search } = useLocation();
    const searchText = search.split("=")[1];
    const { isSearchDone } = useSelector((state) => state.header);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isSearchDone) {
            dispatch(searchRequest(searchText));
        }
    }, [dispatch, searchText, isSearchDone]);
    return <SearchPresenter />;
};

export default SearchContainer;
