import { combineReducers } from "redux";
import sign from "./sign";
import auth from "./auth";
import header from "./header";
import boardWrite from "./boardWrite";
import board from "./board";

const rootReducer = combineReducers({
    sign,
    auth,
    header,
    boardWrite,
    board,
});

export default rootReducer;
