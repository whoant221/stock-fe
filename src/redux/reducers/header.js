import * as types from "~/constant/actionTypes";

const initialState = {
    active: '',
    info: '',
}

const header = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SET_ACTIVE_LAYOUT:      
            let active =[state.active != '']
            active.push(actions.payload)     
            return {
                ...state,
                active: active,
            }
        case types.SET_ACTIVE_LAYOUT:      
            let info =[state.info != '']
            info.push(actions.payload)     
            return {
                ...state,
                info: info,
            }
        default:
                return state;
    }
}

export default header;