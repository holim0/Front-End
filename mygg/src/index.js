import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "store/configure";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const customHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={customHistory}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById("root")
);
