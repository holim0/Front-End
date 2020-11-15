import { combineReducers } from "redux";
import user from "./user";
import header from "./header";
import boardWrite from "./boardWrite";

const rootReducer = combineReducers({
    user,
    header,
    boardWrite,
});

export default rootReducer;
