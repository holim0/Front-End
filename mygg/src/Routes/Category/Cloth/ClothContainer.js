import React from "react";
import { useLocation } from "react-router-dom";

import CateContainer from "../CateContainer";

const ClothContainer = () => {
    const { pathname } = useLocation();

    return <CateContainer cateName={pathname} />;
};

export default ClothContainer;
