import * as types from '~/constant/actionTypes';
import zingStorage from '~/utils/storage';

const initialState = {
    isPlaying: false,
    valueVolume: zingStorage.getAddValueVolume,
};

const IconProject = (state = initialState, actions) => {
    switch (actions.type) {
        case types.SET_ACTIVE_GET_ICON_VOLUME:
            let valueVolume = [state.valueVolume];
            valueVolume.push(actions.payload);
            return {
                ...state,
                valueVolume: valueVolume,
            };
        default:
            return state;
    }
};

export default IconProject;
