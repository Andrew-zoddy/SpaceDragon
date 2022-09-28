import {combineReducers} from "redux";
import {dragonReducer} from "./dragonReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    dragonData: dragonReducer,
    app : appReducer,



});
