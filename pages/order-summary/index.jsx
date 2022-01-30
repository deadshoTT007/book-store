import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import TopBar from '@/components/modules/TopBar'
import ProductList from '@/components/modules/ProductList'
import { Link } from '@mui/material'
import Divider from '@/components/elements/Divider'
import PrimaryButton from '@/components/elements/PrimaryButton'
const useStyles=makeStyles(theme=>({
    mainContainer:{
        width:"50%",
        minWidth:"800px",
        display:"flex",
        // gridTemplateColumns:"40% auto",
        gap:"64px",
        // background:"red",
        alignItems:"flex-start",
        margin:"40px auto",
        [theme.breakpoints.down('md')]:{
            minWidth:"100%",
            display:"block"
        }
    
    },
    shippingInfo:{
        flexBasis:"40%",
        padding:"24px",
        background:colors.background,
        [theme.breakpoints.down('md')]:{
            width:"90%",
            margin:"0 auto"
        }
    },
    container:{
        flex:1,
    },
    shippingHeaderContainer:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:"20px"
    },
    addressText:{
        fontSize:"16px",
        lineHeight:"22px",
        color:colors.gray
    },
    locationText:{
        fontSize:"16px",
        color:colors.black,
        lineHeight:"22px"
    },
    link:{
        textDecoration:"none",
        display:"flex",
        justifyContent:"flex-end",
        color:colors.primary,
        fontSize:'16px'
    },
    checkOutSectionContainer:{
        marginTop:"24px",
        padding:"24px",
        background:colors.background,
        [theme.breakpoints.down('md')]:{
            width:"90%",
            margin:"24px auto"
        }
    },
    shippingFeeContainer:{
        display:"flex",
        justifyContent:"space-between"
    },
    feeText:{
        fontSize:"16px",
        color:colors.black,
        lineHeight:"22px"
    },
    feeStatusText:{
        fontSize:"16px",
        color:colors.black,
        lineHeight:"22px"
    },
    totalAmountContainer:{
        display:"flex",
        justifyContent:"space-between"
    },
    totalPrice:{
        fontSize:"16px",
        fontWeight:"500",
        color:colors.black,
        lineHeight:"18px",

    },
    totalText:{
        fontSize:"16px",
        lineHeight:"18px",
        fontWeight:"500"
    },
    taxText:{
        marginTop:"10px",
        fontWeight:"400",
        lineHeight:"22px",
        color:colors.gray
    }
   
}))

const OrderSummary = () => {
    const classes=useStyles()
    return (
        <>
        <TopBar/>
        <div className={classes.root}>
            <div className={classes.mainContainer}>
<ProductList smallStyle={{display:"none"}}/>  
<div className={classes.container}>
<div className={classes.shippingInfo}>
    <div className={classes.shippingHeaderContainer}>
        <div className={classes.addressText}>Shipping address:</div>
        <div className={classes.locationText}>Katunje, bhaktapur</div>
    </div>
    <Link href="#" className={classes.link}>
        <a >Change address</a>
    </Link>
</div>
<div className={classes.checkOutSectionContainer}>
<div className={classes.shippingFeeContainer}>
    <div className={classes.feeText}>Shipping fee:</div>
    <div className={classes.feeStatusText}>Free</div>
</div>
<Divider style={{margin:"10px 0"}}/>
<div className={classes.totalAmountContainer}>
    <div className={classes.totalText}> Total:</div>
    <div className={classes.totalPrice}>Rs. 8000.00</div>
</div>
<div className={classes.taxText}>Tax included.</div>
<PrimaryButton title="Proceed to Payment" style={{marginTop:24}}/>
</div>
</div>

            </div>
            
        </div>
        </>
    )
}

export default OrderSummary
