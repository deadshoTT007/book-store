import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";


const initialState={
    categoriesList:[],
    selectedCategory:null,
}

const getAllCategoryList = (state,action) =>{
    console.log(action.data,"action")
    return updateObject(state, {categoriesList :action.data})
    // return { ...state, coursecategoryList:"sadad"}
}

const reducer = (state=initialState,action)=>
{
    switch(action.type){
        case "CATEGORIES_LIST":
            return getAllCategoryList(state,action)
        default:
            return state

    }
}

export default reducer