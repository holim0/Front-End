import React from "react";
import { useSelector } from "react-redux";
import MypagePresenter from "./MypagePresenter";

const MypageContainer = () => {
    const name = useSelector((state) => state.auth.userData.name);
    const username = useSelector((state) => state.auth.userData.nickname);

    return <MypagePresenter name={name} username={username} />;
};

export default MypageContainer;
