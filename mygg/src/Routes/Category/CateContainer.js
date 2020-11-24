import React, { useCallback, useEffect, useState } from "react";
import CatePresenter from "./CatePresenter";
import { useDispatch, useSelector } from "react-redux";
import { addBookMarkRequest, removeBookMarkRequest } from "modules/auth";
import { signFormShowing } from "modules/header";
import { getBoardAllRequest } from "modules/board";

const CateContainer = ({ children, ...cateName }) => {
    const dispatch = useDispatch();

    // islogin
    const { isLogin } = useSelector((state) => state.sign);
    // userData
    const { userData } = useSelector((state) => state.auth);
    // faker data
    const [loading, setLoad] = useState(true);

    const boards = [
        {
            id: "1",
            title: "실험",
            deadline: "2020-10-02",
            participateUsers: [],
            limitNumberOfPeople: 5,
        },
        {
            id: "2",
            title: "실험2",
            deadline: "2020-10-12",
            participateUsers: [],
            limitNumberOfPeople: 2,
        },
    ];

    // 비동기 가짜 구현.
    const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
    const getInfo = async () => {
        await sleep(1200);
        setLoad(false);
    };

    // category
    const category = ["Necessity", "Food", "Cloth", "Goods", "Beauty", "Etc"];

    if (isLogin) {
        category.push("글쓰기");
    }

    // bookmark
    const onBook = useCallback(
        (e) => {
            if (!isLogin) {
                alert("로그인 하셔야 가능합니다.");
                return dispatch(signFormShowing());
            }
            let { id } = e.target.dataset;
            if (!id) {
                id = e.target.parentNode.dataset.id;
            }

            if (userData.bookmarkPosts.find((v) => v === id)) {
                dispatch(removeBookMarkRequest(id));
            } else {
                dispatch(addBookMarkRequest(id));
            }
        },
        [dispatch, userData, isLogin]
    );

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
        getInfo();
        dispatch(getBoardAllRequest());
    }, []);

    return (
        <CatePresenter
            {...cateName}
            isLogin={isLogin}
            category={category}
            boards={boards}
            loading={loading}
            userData={userData}
            onBook={onBook}
        ></CatePresenter>
    );
};

export default CateContainer;
