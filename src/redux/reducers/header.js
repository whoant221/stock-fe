import * as types from "~/constant/actionTypes";

const initialState = {
    active: '',
    info: '',
    name: '',
    detail: '',
    orderAsk: '',
    orderBid: '',
    price: '',
}

const header = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SET_ACTIVE_LAYOUT:      
            let active =[state.active !== '']
            active.push(actions.payload)     
            return {
                ...state,
                active: active,
            }
        case types.SET_ACTIVE_LAYOUT:      
            let info =[state.info !== '']
            info.push(actions.payload)     
            return {
                ...state,
                info: info,
            }
        case types.SET_NAME_BANK:      
            let name = [state.name !== '']
            name.push(actions.payload)     
            return {
                ...state,
                name: name,
            }
        case types.SET_DETAIL_BANK:      
            let detail = [state.detail !== '']
            detail.push(actions.payload)     
            return {
                ...state,
                detail: detail,
            }
        case types.SET_ORDER_BOOK_ASK:      
            let orderAsk = [state.orderAsk !== '']
            orderAsk.push(actions.payload)     
            return {
                ...state,
                orderAsk: orderAsk,
            }

        case types.SET_ORDER_BOOK_BID:      
            let orderBid = [state.orderBid !== '']
            orderBid.push(actions.payload)     
            return {
                ...state,
                orderBid: orderBid,
            }
        case types.SET_PRICE_STOCK:      
            let price = [state.price !== '']
            price.push(actions.payload)     
            return {
                ...state,
                price: price,
            }

        default:
                return state;
    }
}

export default header;