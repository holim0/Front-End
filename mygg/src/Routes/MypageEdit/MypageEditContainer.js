import React, { useState, useCallback } from "react";
import MypageEditPresenter from "./MypageEditPresenter";
import { useSelector, useDispatch } from "react-redux";

const MypageEditContainer = () => {
    const dispatch = useDispatch();

    //초기값 설정.
    const name = useSelector((state) => state.auth.userData.name);
    const username = useSelector((state) => state.auth.userData.nickname);

    const [curname, setCurname] = useState(name);
    const [curusername, setCurusername] = useState(username);

    const handleName = (e) => {
        setCurname(e.target.value);
    };

    const handleUsername = (e) => {
        setCurusername(e.target.value);
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
        },
        [curname, curusername]
    );

    return (
        <MypageEditPresenter
            name={curname}
            username={curusername}
            handleName={handleName}
            handleUsername={handleUsername}
            handleSubmit={handleSubmit}
        />
    );
};

export default MypageEditContainer;
