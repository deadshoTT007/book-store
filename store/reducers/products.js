import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";


const initialState={
    productsList:[],
    productCategoryList:null,
}

const getAllProductsList = (state,action) =>{
    console.log(action.data,"action")
    return updateObject(state, {productsList :action.data})
    // return { ...state, coursecategoryList:"sadad"}
}

const reducer = (state=initialState,action)=>
{
    switch(action.type){
        case "PRODUCT_LIST":
            return getAllProductsList(state,action)
        default:
            return state

    }
}

export default reducer