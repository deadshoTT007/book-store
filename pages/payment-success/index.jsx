import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import { Link } from '@mui/material'
import PrimaryButton from '@/components/elements/PrimaryButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconText from '@/components/elements/IconText'
import TopBar from '@/components/modules/TopBar'
import HomeLayout from '@/components/layouts/HomeLayout'
const useStyles=makeStyles(theme=>({
root:{
    margin:"64px 0px",
    display:'flex',
    marginTop:"144px",
    justifyContent:'center',
    [theme.breakpoints.down('md')]:{
        marginTop:'184px'
    },
    [theme.breakpoints.down('sm')]:{
        marginTop:'200px'
    }

},
paymentHeaderText:{
    marginBottom:"10px",
    fontWeight:"500px",
    fontSize:"20px",
    lineHeight:"24px",
    color:colors.black,
    textTransform:"capitalize",
    textAlign:'center'

},
paymentDescriptionText:{
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.black,
    textAlign:'center'
},
icon:{
    fontSize:"12px",
    marginLeft:"9px"
}


}))
const PaymentSucess = () => {
    const classes=useStyles()
    return (
        <>
        <HomeLayout>
        <div className={classes.root}>
            <div className={classes.mainPaymentContainer}>
                <div className={classes.paymentHeaderText}>Your Order is placed successfully!</div>
                <div className={classes.paymentDescriptionText}>Find order details is order page.</div>
                <IconText title="Order Details" icon={<ArrowForwardIosIcon className={classes.icon}/>} />
                    <PrimaryButton style={{marginTop:"24px"}} title="Browse more"/>
            </div>
        </div>
        </HomeLayout>
        </>

    )
}

export default PaymentSucess
