import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "Components/Loader";
import CateBoardComponent from "./CateBoardComponent";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.white};
`;

const CateContent = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    margin: 0 auto;
`;

const CateNav = styled.nav`
    flex: 1;
    h1 {
        padding: 12px;
        margin-bottom: 12px;
    }
`;

const CateSubMenu = styled.ul`
    background: ${(props) => props.theme.white};
    padding: 12px;
    margin: 24px;
    margin-left: 0;
    position: sticky;
    top: 100px;
    border-radius: 12px;
    li {
        padding: 12px 0;
        font-size: ${(props) => props.theme.ls};
    }
`;

const SelectedCate = styled.li`
    color: ${(props) => props.theme.yellow};
    pointer-events: none;
`;

const CateName = styled(Link)`
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
    &:hover {
        color: ${(props) => props.theme.yellow};
    }
`;

const CatePresenter = ({ cateName, category, boardAll, getBoardAll }) => {
    const selectCate = cateName.split("/")[1].toUpperCase();
    return !getBoardAll ? (
        <Loader />
    ) : (
        <Container>
            <CateContent>
                <CateNav>
                    <h1>Category</h1>
                    <CateSubMenu>
                        {category.map((list, index) =>
                            list.toUpperCase() === selectCate ? (
                                <SelectedCate key={index}>{list}</SelectedCate>
                            ) : (
                                <li key={index}>
                                    <CateName
                                        to={
                                            list === "글쓰기"
                                                ? "/write"
                                                : `/${list.toLowerCase()}`
                                        }
                                    >
                                        {list}
                                    </CateName>
                                </li>
                            )
                        )}
                    </CateSubMenu>
                </CateNav>
                <CateBoardComponent
                    selectCate={selectCate}
                    boardAll={boardAll}
                />
            </CateContent>
        </Container>
    );
};

export default CatePresenter;
