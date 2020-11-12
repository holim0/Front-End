import React from "react";
import { useLocation } from "react-router-dom";
import CateContainer from "../CateContainer";

const GoodsContainer = () => {
    const { pathname } = useLocation();

    return <CateContainer cateName={pathname} />;
};

export default GoodsContainer;
