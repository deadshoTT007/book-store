import axios from "@/utils/axios"

export const paymentCreate = (amount,productId) => {
    return (dispatch,getState) => {
        const url = "/payment/onlinepay/create"

        const requestOptions = {
            amount:amount,
            variant:"esewa",
            tax_amount:'0',
            setvice_charge:'0',
            delivery_charge:'0',
            merchant_code:'EPAYTEST',
            product_code:productId
        }
        const token = getState().auth.token;
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
        }

        axios.post(url,requestOptions,headers).then(res=>{
            dispatch({type:'PAYMENT_CREATE',data:res.data})
        })
    }
}


export const paymentUpdate = (id,product_id,transaction_code,amount) =>{
    console.log(id,"iddd")
    return (dispatch,getState)=> {
        const token = getState().auth.token;

        const requestOptions={
            product_code:product_id,
            amount:amount,
            transaction_code:transaction_code,
            status:"paid"
        }

        const url=`/payment/onlinepay/update/${id}/`
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + token,
            },
        }

        axios.post(url,requestOptions,headers).then(res=>console.log(res.data,"paymentIpdate"))
    }
}