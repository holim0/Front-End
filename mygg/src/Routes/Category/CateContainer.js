import React, { useCallback, useEffect } from "react";
import CatePresenter from "./CatePresenter";
import { useDispatch, useSelector } from "react-redux";
import { addBookMarkRequest, removeBookMarkRequest } from "modules/auth";
import { signFormShowing } from "modules/header";
import { getBoardAllRequest } from "modules/board";
import { useLocation } from "react-router-dom";

const CateContainer = ({ children, ...cateName }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    // islogin
    const { isLogin } = useSelector((state) => state.sign);
    // userData
    const { userData } = useSelector((state) => state.auth);

    // get board
    const { boardAll, getBoardAll } = useSelector((state) => state.board);

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

            if (
                userData.bookmarkPosts.find((v) => parseInt(v) === parseInt(id))
            ) {
                dispatch(removeBookMarkRequest(id));
            } else {
                dispatch(addBookMarkRequest(id));
            }
        },
        [dispatch, userData, isLogin]
    );

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
        const path = pathname.split("/")[1];
        dispatch(getBoardAllRequest(path));
    }, [dispatch, pathname]);

    return (
        <CatePresenter
            {...cateName}
            isLogin={isLogin}
            category={category}
            getBoardAll={getBoardAll}
            userData={userData}
            boardAll={boardAll}
            onBook={onBook}></CatePresenter>
    );
};

export default CateContainer;
