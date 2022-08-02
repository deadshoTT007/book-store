import axios from "@/utils/axios"

export const createOrder = () => {
    return (dispatch,getState) => {
        const url = '/order/create/'
        const token = getState().auth.token;
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
        }

        axios.post(url,{},headers).then(res=>{
            dispatch({ type:"GET_ORDER", data:res.data })
        })
    }
}

export const getOrders = () => {
    return (dispatch,getState) => {
        const token =getState().auth.token;
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token
            },
        }

        axios.get('/order/list/',headers).then(res=>{
            dispatch({type:"ORDERS",data:res.data})
        })
    }
}

