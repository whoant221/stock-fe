import * as types from '~/constant/actionTypes';

export const addSongToLibrary = (data) => ({
    type: types.ADD_SONG_TO_LIBRARY,
    payload: {data}
})