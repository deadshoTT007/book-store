import React, { useEffect } from 'react'
import { getToken } from './store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { profileFetch  } from './store/actions/profile'

let initialValue = 0
const AuthenticationProvider = props => {
    const dispatch = useDispatch()
    const token = useSelector(state=>state.auth.token)
    if (typeof window !== 'undefined') {
        initialValue = initialValue + 1
        if (initialValue <= 1)
            dispatch(getToken(localStorage.getItem('token')))
           
        return <>{props.children}</>
    }
    return props.children
}
export default AuthenticationProvider