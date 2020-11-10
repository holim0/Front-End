import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "Routes/Home";
import Mypage from "Routes/Mypage";
import MypageContainer from "Routes/Mypage";
import Footer from "./Layouts/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mypage" exact component={Mypage} />
                    <Route path="/" exact component={Home} />
                    <Route path="/" exact component={Home} />
                    <Route path="/" exact component={Home} />
                    <Route path="/" exact component={Home} />
                    <Route path="/" exact component={Home} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default Router;
