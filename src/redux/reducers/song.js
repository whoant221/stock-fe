import * as types from "~/constant/actionTypes";
import zingStorage from "~/utils/storage";

//songReducer để xử lí các action liên quan đến song

const initialState = {
    isPlaying: false,
    librarySong: zingStorage.getLibrarySong() || [],
    list: [],
    nameMV: '',
}


const songReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.ADD_SONG_TO_LIBRARY:
            zingStorage.setLibrarySong([...state.librarySong, actions.payload])
            return {
                ...state,
                librarySong: [...state.librarySong, actions.payload]
            }

        case types.SET_ACTIVE_HOBBY: 
            const newList =[...state.list]
            newList.push(actions.payload)    
            return {
                ...state,
                list: newList,
            }
        case types.SET_ACTIVE_GET_NAME_MV: 
        
            let nameMV =[state.nameMV]
            nameMV.push(actions.payload)    
            return {
                ...state,
                nameMV: nameMV,
            }
        default:
            return state;

        
    }
}

export default songReducer;