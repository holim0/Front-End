import React, { useState, useCallback } from "react";
import MypageEditPresenter from "./MypageEditPresenter";
import { useSelector, useDispatch } from "react-redux";
import { editAuth, editAuthSuccess, editAuthRequest } from "modules/auth";
import { useHistory } from "react-router-dom";

const MypageEditContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    //초기값 설정.
    const userId = useSelector((state) => state.auth.userData.id);
    const name = useSelector((state) => state.auth.userData.name);
    const username = useSelector((state) => state.auth.userData.nickname);

    const [curname, setCurname] = useState(name); // 이름
    const [curusername, setCurusername] = useState(username); // 닉네임

    const handleName = useCallback(
        (e) => {
            setCurname(e.target.value);
        },
        [curname]
    );
    const handleUsername = useCallback(
        (e) => {
            setCurusername(e.target.value);
        },
        [curusername]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (curname !== "" && curusername !== "") {
                const editData = {
                    id: userId,
                    name: curname,
                    nickname: curusername,
                };
                dispatch(editAuthRequest(editData));
                alert("수정 완료!");
                history.goBack();
            } else {
                alert("작성을 완료해주세요.");
            }
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
