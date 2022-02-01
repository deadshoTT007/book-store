import React from 'react'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import { makeStyles } from '@mui/styles'
import IconText from '@/components/elements/IconText'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopBar from '@/components/modules/TopBar'
import HomeLayout from '@/components/layouts/HomeLayout'
const useStyles=makeStyles(theme=>({
    root:{
        margin:"64px 0px",
        display:'flex',
        justifyContent:'center'
    },
    paymentHeaderText:{
        marginBottom:"16px",
        fontWeight:"700px",
        fontSize:"32px",
        lineHeight:"40px",
        color:colors.black,
        textTransform:"capitalize",
        textAlign:'center'
    
    },
    paymentInfoText:{
fontSize:'20px',
lineHeight:"24px",
textAlign:"center",
color:colors.black,
marginBottom:"10px"
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
const PaymentFailed = () => {
    const classes=useStyles()
    return (
        <>
        <HomeLayout>
        <div className={classes.root}>
        <div className={classes.mainPaymentContainer}>
            <div className={classes.paymentHeaderText}>Oops</div>
            <div className={classes.paymentInfoText}>Failed to place your oders</div>
            <div className={classes.paymentDescriptionText}>Error occured while processing your payment. Please try again.                                                                                                                </div>
            <IconText title="Report" icon={<ArrowForwardIosIcon className={classes.icon}/>} />
                <PrimaryButton style={{marginTop:"24px"}} title="Go To Cart"/>
        </div>
    </div>
    </HomeLayout>
    </>

    )
}

export default PaymentFailed
