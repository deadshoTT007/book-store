import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
    cart:null
}

const addToCartHandler = (state, action) => {
    return updateObject(state, {cart:action.data})
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state
    }
}


export default cartReducer