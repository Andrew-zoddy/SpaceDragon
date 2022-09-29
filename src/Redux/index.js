import {combineReducers} from "redux";
import {dragonReducer} from "./dragonReducer";
import {appReducer} from "./appReducer";
import {usersReducer} from "./usersReducer";


export const rootReducer = combineReducers({
    dragonData: dragonReducer,
    app : appReducer,
    user: usersReducer,



});
