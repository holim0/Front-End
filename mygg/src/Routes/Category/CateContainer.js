import React, { useEffect } from "react";
import CatePresenter from "./CatePresenter";
import faker from "faker";

const CateContainer = ({ children, ...rest }) => {
    // faker data
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

    // category
    const category = ["Necessity", "Food", "Cloth", "Goods", "Beauty", "Etc"];

    useEffect(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <CatePresenter
            {...rest}
            category={category}
            boards={boards}
            checkPercent={checkPercent}
            limitNumberOfPeople={limitNumberOfPeople}>
            {children}
        </CatePresenter>
    );
};

export default CateContainer;
