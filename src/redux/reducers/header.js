import * as types from "~/constant/actionTypes";

const initialState = {
    name: '' ,
}

const header = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SET_ACTIVE_GET_NAME:      
            let name =[state.name != '']
            name.push(actions.payload)     
            return {
                ...state,
                name: name,
            }
        default:
                return state;
    }
}

export default header;