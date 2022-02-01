import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import ProductList from '@/components/modules/ProductList'
import TopBar from '@/components/modules/TopBar'
import Footer from '@/components/modules/Footer'
import ShippingInformation from '@/components/modules/ShippingInformation'
import HomeLayout from '@/components/layouts/HomeLayout'
const useStyles=makeStyles(theme=>({
mainContainer:{
    width:"70%",
    display:"flex",
    // gridTemplateColumns:"40% auto",
    gap:"64px",
    // background:"red",
    alignItems:"flex-start",
    margin:"40px auto",
    marginTop:"110px",

    [theme.breakpoints.down('lg')]:{
        marginTop:"130px"
    },
    [theme.breakpoints.down('md')]:{
        display:"block",
        width:"90%",
        marginTop:"160px"
    },
    [theme.breakpoints.down('sm')]:{
        marginTop:"200px"
    }

}
}))
const CartPayment
 = () => {
    const classes=useStyles()
    return (
        <>
<HomeLayout>
        <div className={classes.root}>
            <div className={classes.mainContainer}>
            <ProductList smallStyle={{display:"none"}}/>
            <ShippingInformation/>
            </div>
            
        </div>
        </HomeLayout>
        </>
    )
}

export default CartPayment

