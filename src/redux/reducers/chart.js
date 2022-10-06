import * as types from "~/constant/actionTypes";

const initialState = {
    checkChart: '' ,
}

const header = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SET_ACTIVE_CHECK_CHART:      
            let checkChart =[state.checkChart != '']
            checkChart.push(actions.payload)     
            return {
                ...state,
                checkChart: checkChart,
            }
        default:
                return state;
    }
}

export default header;