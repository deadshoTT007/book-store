import axios from "@/utils/axios"

export const profileFetch = (token) => {
    return (dispatch,getState) => {
        const url = "/account/profile/"
        const token = getState().auth.token
        const requestOptions = {
           
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
        }

        axios.get(url, requestOptions).then(res=>dispatch({type:"PROFILE_FETCH",data:res.data}))

    }

}