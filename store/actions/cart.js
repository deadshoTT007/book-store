import axios from "@/utils/axios"


 export const addToCart = (product,quantity) => {
    return (dispatch,getState) => {
        const url = '/cart/item/create/'
        const token = getState().auth.token

        const requestOptions={
            product:product,
            quantity,
        }
console.log(requestOptions,"req")
        axios.post(url,requestOptions,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
           
        }).then(res=>console.log(res.data,"cart"))
    }
}


export const addToCartCreate = (userId) => {
    return (dispatch,getState) => {
        const url='/cart/create/'
        const token = getState().auth.token

        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
           
        }
        console.log(requestOptions,"cartCreate")
        axios.post(url,{},requestOptions).then(res=>{
            if(res.status==200||res.status==201){
                dispatch({type:"CART_CREATE",id:res.data.id})
            }
        })
    }
}

// export const getCartData = () => {
//     return (dispatch,getState) => {
//         const url='/cart/item/create/'
//         const token = getState().auth.token
//         const requestOptions = {
           
//             headers: {
//                 'Content-Type': 'application/json',
//                 "Authorization": 'Bearer ' + token,
//             },
//         }
//         axios.get(url,requestOptions).then(res=>{
//             dispatch({type:"GET_CART",data:res.data})
//         })
//     } 
// }


export const getCartList = () => {
    return (dispatch,getState) => {
        const url = '/cart/retrieve/'
        const token = getState().auth.token
        const requestOptions = {
           
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
        }
        axios.get(url,requestOptions).then(res=>{
            dispatch({type:"GET_CART",data:res.data})
        })

    }
}