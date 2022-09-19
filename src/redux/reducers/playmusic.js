import * as types from '~/constant/actionTypes';

const initialState = {
    song: null,
};

const playMusicReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.PLAY_MUSIC:
            return actions.payload;
        default:
            return state;
    }
};

export default playMusicReducer;
