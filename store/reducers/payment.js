import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
    payment:null
}

const paymentCreate = (state,action)=> {
    return updateObject(state,{payment:action.data})
}

const paymentReducer = (state=initialState,action) => {
    switch(action.type){
        case "PAYMENT_CREATE":
            return paymentCreate(state,action)
        default:
            return state
    }
}



export default paymentReducer