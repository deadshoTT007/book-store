import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import ProductList from '@/components/modules/ProductList'
import TopBar from '@/components/modules/TopBar'
import Footer from '@/components/modules/Footer'
import ShippingInformation from '@/components/modules/ShippingInformation'
const useStyles=makeStyles(theme=>({
mainContainer:{
    width:"70%",
    display:"flex",
    // gridTemplateColumns:"40% auto",
    gap:"64px",
    // background:"red",
    alignItems:"flex-start",
    margin:"40px auto",
    [theme.breakpoints.down('md')]:{
        display:"block",
        width:"90%"
    }

}
}))
const CartPayment
 = () => {
    const classes=useStyles()
    return (
        <>
<TopBar/>
        <div className={classes.root}>
            <div className={classes.mainContainer}>
            <ProductList smallStyle={{display:"none"}}/>
            <ShippingInformation/>
            </div>
            
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default CartPayment

