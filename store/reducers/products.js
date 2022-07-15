import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";


const initialState={
    productsList:[],
    productCategoryList:null,
    product:null,
}

const getAllProductsList = (state,action) =>{
    console.log(action.data,"productList")
    return updateObject(state, {productsList :action.data})
    // return { ...state, coursecategoryList:"sadad"}
}

const getSpecificProduct = (state,action) => {
    console.log(action.data,"kera")

    return updateObject(state, {product:action.data})
}
const getCategoryProducts = (state,action) => {
    console.log(action,"procat")
    return updateObject(state, { productCategoryList:action.data })
}


const reducer = (state=initialState,action)=>
{
    switch(action.type){
        case "PRODUCT_LIST":
            return getAllProductsList(state,action)
        
        case "PRODUCT":
            return getSpecificProduct(state,action)

        case "PRODUCT_CATEGORIES":
            return getCategoryProducts(state,action)

        default:
            return state

    }
}

export default reducer