import React, { useState } from "react";

import MypagePresenter from "./MypagePresenter";
import { useSelector } from "react-redux";

const MypageContainer = () => {
    const name = useSelector((state) => state.auth.userData.name);
    const username = useSelector((state) => state.auth.userData.nickname);

    return <MypagePresenter name={name} username={username} />;
};

export default MypageContainer;
