import axios from '@/utils/axios';
import { getHeaders } from '@/utils/functions';



export const getCategoriesList = () =>{
    return dispatch => {
        const url = "/book/category/list/"

        axios.get(url).then(res=>
            {
                console.log(res)
                dispatch(getSuccessCategoryList(res.data))
            })
    }
}

const getSuccessCategoryList = (categories) =>{
    return{
        type:"CATEGORIES_LIST",
        data:categories
    }
}