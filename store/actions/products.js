import axios from '@/utils/axios';
import { getHeaders } from '@/utils/functions';

import 
{
    PRODUCT_LIST
} from '../actionTypes'


export const getProductsList = (category,query) =>{
    return dispatch => {
        let url;
        const dataValue={
            search:query?`&search=${query}`:'',
            category:category?`&category=${category}`:'',
        }
        url = `book/list/?${dataValue.search}${dataValue.category}`



        // const url = "/book/list/"

        axios.get(url).then(res=>
            {
                console.log(res)
                dispatch(getSuccessProductsList(res.data.results))
            })
    }
}

const getSuccessProductsList = (products) =>{
    return{
        type:"PRODUCT_LIST",
        data:products
    }
}

const getSuccessProductList = (product) =>{
    return{
        type:"PRODUCT",
        data:product
    }
}

export const getProduct = (id) => {
    return dispatch => {
        const url =`/book/book${id}/`

        axios.get(url).then(res=>{
            console.log(res.data,"res")
          dispatch(getSuccessProductList(res.data))
        })
    }
}

export const getCategoryProducts = (id) => {
    return dispatch => {
        const url = `/book/category/list/?search=${id}/`

        axios.get(url).then(res=>{
            dispatch({
                type:"PRODUCT_CATEGORIES",
                data:res.data
            })
        })
    }
}