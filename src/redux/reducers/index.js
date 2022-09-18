import { combineReducers } from 'redux';
import songReducer from './song';
import playlistReducer from './playlist';
import playMusicReducer from './playmusic';
import IconProject from './icon';

const reducers = combineReducers({
    songReducer,
    playlistReducer,
    IconProject,
    playMusicReducer,
});

export default reducers;
