import React, { useEffect } from "react";
import CatePresenter from "./CatePresenter";
import { useDispatch, useSelector } from "react-redux";
import { getBoardAllRequest } from "modules/board";
import { useLocation } from "react-router-dom";

const CateContainer = ({ children, ...cateName }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    // islogin
    const { isLogin } = useSelector((state) => state.sign);

    // get board
    const { boardAll, getBoardAll } = useSelector((state) => state.board);

    // category
    const category = ["Necessity", "Food", "Cloth", "Goods", "Beauty", "Etc"];

    if (isLogin) {
        category.push("글쓰기");
    }

    // 카테고리 페이지일 시 위로 스크롤하고, url에 해당하는 게시글을 불러옵니다
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
            boardAll={boardAll}
            getBoardAll={getBoardAll}
        ></CatePresenter>
    );
};

export default CateContainer;
