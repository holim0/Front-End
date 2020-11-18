import { combineReducers } from "redux";
import user from "./user";
import header from "./header";
import boardWrite from "./boardWrite";
import board from "./board";

const rootReducer = combineReducers({
    user,
    header,
    boardWrite,
    board,
});

export default rootReducer;
