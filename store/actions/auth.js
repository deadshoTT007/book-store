import axios from "@/utils/axios"

// const token = localStorage.getItem('token')


export const login =  ( username, password ) => {
    return dispatch => {
        const url = '/account/login/'

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            username,
            password
        }
        axios.post(url,requestOptions).then(res=>{
            console.log(res.data,"login")
            localStorage.setItem('token',res.data.access)
            dispatch({
                type:"LOGIN",
                data:res.data.access
            })
        })

    }
}

export const getToken = (token) => {
    return dispatch => {
        dispatch({
            type:"GET_TOKEN",
            data:token
        })
    }
}


export const register = ( username, email, password,routerHandler,id ) => {
    return dispatch => {
        const url = '/account/register/'

        const requestOptions = {
          
            username,
            email,
            password
        }

        

        axios.post(url,requestOptions).then(res=>{
            if(res.status===200||res.status===201){
                dispatch(login(username,password))
                routerHandler(id)
            }
        })
    }
}

export const loginRefresh = (token) => {
    return dispatch=>{
        dispatch({
            type:"LOGIN_REFRESH",
            data:token
          })
    }
}


