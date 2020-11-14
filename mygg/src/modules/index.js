import { combineReducers } from "redux";
import user from "./user";
import header from "./header";
import board from "./board";

const rootReducer = combineReducers({
    user,
    header,
    board,
});

export default rootReducer;
