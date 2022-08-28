import * as types from '~/constant/actionTypes';

export const addSongToLibrary = (data) => ({
    type: types.ADD_SONG_TO_LIBRARY,
    payload: data
})

export const addPlaylistToLibrary = (data) => ({
    type: types.ADD_PLAYLIST_TO_LIBRARY,
    payload: data
})

export const addNewHobby = (data) => ({
    addSong: {
        ...data,
    },
    type: types.SET_ACTIVE_HOBBY,
    payload: {data}

})

export const addNameMV = (data) => ({
    type: types.SET_ACTIVE_GET_NAME_MV,
    payload: data
})