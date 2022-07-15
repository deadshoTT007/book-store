import { getToken } from "../actions/auth";
import * as actionTypes from "../actionTypes";
import { updateObject } from "../utility";


const initialState = {
    token:null
}

const register = (state, action) => {
    return updateObject(state, { user: action.data })
}

const login = (state, action) => {
    console.log(action,"access")
    return updateObject(state, {token:action.data})
}

const loginRefresh = (state,action) => {
    console.log(action,"refresh")
}

const getLoginToken = (state,action) => {
    return updateObject(state, {token:action.data})
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return register(state, action)
        case "LOGIN":
            return login(state, action)
        case "LOGIN_REFRESH":
            return loginRefresh(state,action)
        case "GET_TOKEN":
            return getLoginToken(state,action)
        default:
            return state

    }
}

export default authReducer