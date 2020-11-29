import React from "react";
import PartiPresenter from "./PartiPresenter";
import { useSelector } from "react-redux";

const PartiContainer = () => {
    const ParticipatePosts = useSelector(
        (state) => state.auth.userData.participatePosts
    );

    return (
        <PartiPresenter ParticipatePosts={ParticipatePosts}></PartiPresenter>
    );
};

export default PartiContainer;
