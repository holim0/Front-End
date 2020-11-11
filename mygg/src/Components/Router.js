import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "Routes/Home";
import Mypage from "Routes/Mypage";
import MypageContainer from "Routes/Mypage";
import Footer from "./Layouts/Footer";
import Necessity from "Routes/Category/Necessity";
import Food from "Routes/Category/Food";
import Cloth from "Routes/Category/Cloth";
import Goods from "Routes/Category/Goods";
import Beauty from "Routes/Category/Beauty";
import Etc from "Routes/Category/Etc";

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mypage" exact component={Mypage} />
                    <Route path="/necessity" exact component={Necessity} />
                    <Route path="/food" ㅇexact component={Food} />
                    <Route path="/cloth" exact component={Cloth} />
                    <Route path="/goods" exact component={Goods} />
                    <Route path="/beauty" exact component={Beauty} />
                    <Route path="/etc" exact component={Etc} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default Router;
