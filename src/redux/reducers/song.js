import * as types from "~/constant/actionTypes";
import zingStorage from "~/utils/storage";

//songReducer để xử lí các action liên quan đến song

const initialState = {
    isPlaying: false,
    librarySong: zingStorage.getLibrarySong() || [],
}

const songReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.ADD_SONG_TO_LIBRARY:
            zingStorage.setLibrarySong([...state.librarySong, actions.payload])
            return {
                ...state,
                librarySong: [...state.librarySong, actions.payload]
            }
        
        default:
            return state;
    }
}

export default songReducer;