import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
    cart:[],
    cartId:null,
}

const addToCartHandler = (state, action) => {
    return updateObject(state, {cart:action.data})
}

const cartCreate = (state, action) => {
    return updateObject(state, {cartid:action.id})
}

const getCartData = (state,action) => {
    console.log(action.data,"cartData")
    return updateObject(state, {cart:action.data})
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){

        case "CART_CREATE":
            return cartCreate(state,action)
        case "GET_CART":
            return getCartData(state,action)
        default:
            return state
    }
}


export default cartReducer