import React, { useState } from "react";

import MypagePresenter from "./MypagePresenter";

const MypageContainer = () => {
    const [name, setName] = useState("holim0");

    const [username, setUsername] = useState("holim1226");

    return <MypagePresenter name={name} username={username} />;
};

export default MypageContainer;
