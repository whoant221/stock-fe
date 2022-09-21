import * as types from '~/constant/actionTypes';

const initialState = {
    listId: [],
};

const musicsOfPageReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case types.MUSICS_OF_PAGE:
            return actions.payload;
        default:
            return state;
    }
};

export default musicsOfPageReducer;
