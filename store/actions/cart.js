import axios from "@/utils/axios"


 export const addToCart = () => {
    return dispatch => {
        const url = '/cart/item/create/'

        const requestOptions={
            product,
            quantity,
            cart,
            price
        }

        axios.post(url,requestOptions).then(res=>console.log(res.data,"cart"))
    }
}