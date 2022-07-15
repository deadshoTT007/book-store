import React, { useEffect } from 'react'
import { getToken } from './store/actions/auth'
import { useDispatch } from 'react-redux'

let initialValue = 0
const AuthenticationProvider = props => {
    const dispatch = useDispatch()
    if (typeof window !== 'undefined') {
        initialValue = initialValue + 1
        if (initialValue <= 1)
            dispatch(getToken(localStorage.getItem('token')))
        return <>{props.children}</>
    }
    return props.children
}
export default AuthenticationProvider