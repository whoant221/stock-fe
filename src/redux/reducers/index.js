import { combineReducers } from "redux";
import songReducer from "./song";
import playlistReducer from "./playlist";

const reducers = combineReducers({
    songReducer,
    playlistReducer,
})

export default reducers;