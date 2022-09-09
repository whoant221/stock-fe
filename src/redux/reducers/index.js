import { combineReducers } from "redux";
import songReducer from "./song";
import playlistReducer from "./playlist";
import IconProject from "./icon";

const reducers = combineReducers({
    songReducer,
    playlistReducer,
    IconProject,
})

export default reducers;