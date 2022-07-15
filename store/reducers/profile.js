import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";


const initialState={

    profile:null
}

const profileFetch = (state, action) => {
    return updateObject(state, {profile:action.data})
}

const reducer = (state=initialState,action)=> {
    switch(action.type){
        case "PROFILE_FETCH":
            return profileFetch(state, action.data)
    }
}