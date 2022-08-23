import { combineReducers } from "redux";
import songReducer from "./song";

const reducers = combineReducers({
    songReducer,
})

export default reducers;