import * as types from '~/constant/actionTypes';
import zingStorage from '~/utils/storage';

const initialState = {
    valueVolume: zingStorage.getAddValueVolume,
    isPlay: '',
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
        case types.SET_ACTIVE_GET_IS_PLAY:
                let isPlay = [state.isPlay];
                isPlay.push(actions.payload);
                return {
                    ...state,
                    isPlay: isPlay,
                };
        default:
            return state;
    }
};

export default IconProject;
