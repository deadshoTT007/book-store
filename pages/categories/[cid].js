import React, { useEffect } from 'react'
import HomeLayout from '@/components/layouts/HomeLayout'
import Product from '@/components/modules/Product/index'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '@/store/actions/products'

const Categories = (props) => {

    const router = useRouter()
    const id = router.query.cid;

    const dispatch = useDispatch()
    const productList = useSelector(state=>state.products.productCategoryList)

    useEffect(()=>{
        dispatch(getCategoryProducts(id))
    },[id])
    

    return (
        <HomeLayout>
            
        </HomeLayout>
    )
}

export default Categories
