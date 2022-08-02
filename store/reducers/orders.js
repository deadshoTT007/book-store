import { updateObject } from "../utility";


const initialState = {
    orderCreate:null,
    orders:[]
}


const createOrders = (state, action) => {
    return updateObject(state, {orderCreate:action.data })
}

const getOrders = (state,action) => {
    return updateObject(state, { orders:[...action.data] })
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case "GET_ORDER":
            return createOrders(state,action)
        case "ORDERS":
            return getOrders(state,action)
            return 
        default:
            return state
    }
}

export default reducer