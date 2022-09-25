import { combineReducers } from 'redux';
import songReducer from './song';
import playlistReducer from './playlist';
import playMusicReducer from './playmusic';
import musicsOfPageReducer from './musicsOfPage';
import IconProject from './icon';

const reducers = combineReducers({
    songReducer,
    playlistReducer,
    IconProject,
    playMusicReducer,
    musicsOfPageReducer,
});

export default reducers;
