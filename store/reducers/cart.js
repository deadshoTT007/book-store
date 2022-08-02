import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
    cart:[],
    cartId:null,
    total:''
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
        case "TOTAL":
            let totalArr=[];
            totalArr = state.cart && state.cart>0 && state.cart.map((eachCart, index) => {
                let price = eachCart.product.price * eachCart.quantity;
                let totalPrice = + price;
                return totalPrice
            })
            console.log(totalArr,"arrrr")
           let total = totalArr && totalArr.length>0 && totalArr.reduce((arr, acc) => arr + acc)

           return updateObject(state,{total:total})

        default:
            return state
    }
}


export default cartReducer