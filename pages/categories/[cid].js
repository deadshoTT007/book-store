import React, { useEffect } from 'react'
import HomeLayout from '@/components/layouts/HomeLayout'
import Product from '@/components/modules/Product/index'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsList } from '@/store/actions/products'
import Loader from '@/components/Loader'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme=>({
    productContainer: {
        marginTop: '120px',
        display: "grid",
        width: "95%",
        margin: "0 auto",
        // flexWrap:"wrap",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridRowGap: "40px",
        gridColumnGap: "40px",
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "repeat(1, 1fr)",
            width: "100%"
        }
        // rowGap:"20px"
    }

}))

const Categories = (props) => {
    const classes= useStyles()

    const router = useRouter()
    const id = router.query.cid;

    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.productsList)

    useEffect(()=>{
        dispatch(getProductsList(id))
    },[id])

    if( products.length<=0  ) {
        return <Loader/>
    }
    

    return (
        <HomeLayout>
              <div className={classes.productContainer}>
            {products.map((product,index)=>{
                return   <Product {...product} />
            })}
            </div>
        </HomeLayout>
    )
}

export default Categories
