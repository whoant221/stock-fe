import * as types from "~/constant/actionTypes";
import zingStorage from "~/utils/storage";

//songReducer để xử lí các action liên quan đến song

const initialState = {
    libraryPlaylist: zingStorage.getLibraryPlaylist() || [],
}

const songReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.ADD_PLAYLIST_TO_LIBRARY:
            zingStorage.setLibrarySong([...state.libraryPlaylist, actions.payload])
            return {
                ...state,
                librarySong: [...state.libraryPlaylist, actions.payload]
            }
        
        default:
            return state;
    }
}

export default songReducer;