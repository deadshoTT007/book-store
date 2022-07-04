import axios from '@/utils/axios';
import { getHeaders } from '@/utils/functions';

import 
{
    PRODUCT_LIST
} from '../actionTypes'


export const getProductsList = () =>{
    return dispatch => {
        const url = "/book/list/"

        axios.get(url).then(res=>
            {
                console.log(res)
                dispatch(getSuccessProductList(res.data.results))
            })
    }
}

const getSuccessProductList = (products) =>{
    return{
        type:"PRODUCT_LIST",
        data:products
    }
}