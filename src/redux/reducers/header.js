import * as types from "~/constant/actionTypes";

const initialState = {
    active: '',
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
        default:
                return state;
    }
}

export default header;