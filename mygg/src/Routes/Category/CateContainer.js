import React, { useCallback, useEffect, useState } from "react";
import CatePresenter from "./CatePresenter";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { getBoardRequest } from "modules/board";

const CateContainer = ({ children, ...rest }) => {
    // islogin

    const user = useSelector((state) => state.user.isLogin);
    // faker data
    const [loading, setLoad] = useState(true);
    const createUser = () => {
        return {
            img: faker.image.avatar(),
        };
    };
    const limitNumberOfPeople = 8;
    const participateUsers = () => {
        return Math.round(Math.random() * limitNumberOfPeople);
    };
    const createBoard = () => {
        return {
            id: faker.random.uuid(),
            title: faker.lorem.sentence(),
            deadline: "2020-20-02",
            participateUsers: new Array(participateUsers())
                .fill(undefined)
                .map(createUser),
            limitNumberOfPeople,
        };
    };
    const createBoards = (numUsers = 20) => {
        return new Array(numUsers).fill(undefined).map(createBoard);
    };
    const boards = createBoards();

    // valid
    const checkPercent = (percent) => {
        if (percent > 90) {
            return "한자리 남았어요!";
        }
        if (percent > 70) {
            return "막차 탑승하세요.";
        }
        if (percent > 50) {
            return "곧 완료됩니다!";
        }
        if (percent > 5) {
            return "여러분을 기다리고 있어요.";
        }
        if (percent === 0) {
            return "관심이 필요해요.";
        }
    };

    // 비동기 가짜 구현.
    const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
    const getInfo = async () => {
        await sleep(1200);
        setLoad(false);
    };

    // category
    const category = ["Necessity", "Food", "Cloth", "Goods", "Beauty", "Etc"];

    if (user) {
        category.push("글쓰기");
    }

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
        getInfo();
    }, []);

    // detail 가기
    const dispatch = useDispatch();

    const onClick = useCallback((e) => {
        const { id } = e.target.dataset;
        dispatch(getBoardRequest(id));
    }, []);

    return (
        <CatePresenter
            {...rest}
            category={category}
            boards={boards}
            checkPercent={checkPercent}
            limitNumberOfPeople={limitNumberOfPeople}
            loading={loading}
            onClick={onClick}>
            {children}
        </CatePresenter>
    );
};

export default CateContainer;
