import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Link } from '@mui/material'
import { colors } from '../../../../utils'
import OrderConfirmation from '../../OrderConfirmation'
import { useSelector } from 'react-redux'
const useStyles = makeStyles(theme => ({
    esewa: {
        backgroundColor: colors.background,
        padding:"24px ",
        borderRadius:4,
        [theme.breakpoints.down('md')]:{
            padding:"16px"
        }

    },
    esewaContainer: {
        padding: "24px 0px",
        paddingTop: "20px",
        // margin: "0 20px",
        borderBottom: "1px solid #8D8D8D",
        paddingTop:0

    },
    esewaHeaderText: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        // textAlign: "center",
        textTransform: "capitalize",
        color: colors.black
    },
    listItemContainer: {
        padding: "0 20px",
        margin: "30px 0"
    },
    eachEsewaListItem: {
        margin: "5px 0",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px"
    },
    loginText: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px"
    },
    orderConfirmation: {
        padding: "20px 20px",
        paddingBottom: "30px",
        background: colors.background
    },
    esewapayContainer:{
        marginTop:"20px",
        display:'flex',
        justifyContent:"center"
    },
    button:{
        background: colors.primary,
        borderRadius: "4px",
        padding: "12px 32px",
        color: "#fff",
        // width: "100%",
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: "700",
        transition:"all 200ms ease-in-out",
        textTransform: "capitalize",
        transform:"scale(1)",
        cursor:"pointer",
        '&:hover': {
            background: "#000",
            transform:'scale(1.04)'
        },
        '&:focus':{
            background:"#03380D"
        },
    }

}))

const Esewa = ( props ) => {
    const classes = useStyles()

    const payment = useSelector(state=>state.payment.payment)

    return (
        <>
          <form action="https://uat.esewa.com.np/epay/main" method="POST">
                <input value={`${payment.amount}`} name="tAmt" type="hidden" />
                <input value={`${payment.amount}`} name="amt" type="hidden" />
                <input value="0" name="txAmt" type="hidden" />
                <input value="0" name="psc" type="hidden" />
                <input value="0" name="pdc" type="hidden" />
                <input value="EPAYTEST" name="scd" type="hidden" />
                <input value={`${payment.id}`} name="pid" type="hidden" />
                <input
                    value={`http://localhost:3000/account-details?q=su&id=${payment.id}`}
                    type="hidden"
                    name="su"
                />
                <input
                                    value={`http://localhost:3000/account-details?q=fu`}

                    type="hidden"
                    name="fu"
                />
              
                  <div className={classes.esewa}>
            <div className={classes.esewaContainer}>
                <Typography variant="h2" className={classes.esewaHeaderText}>
                    You will be redirected to your eSewa account to complete your payment
                </Typography>
                <ol className={classes.listItemContainer}>
                    <li className={classes.eachEsewaListItem}>Login to your eSewa account using your eSewa ID and your Password</li>
                    <li className={classes.eachEsewaListItem}>Ensure your eSewa account is active and has sufficient balance</li>
                    <li className={classes.eachEsewaListItem}> Enter OTP (one time password) sent to your registered mobile number</li>

                </ol>
                <Typography variant="subtitle1" className={classes.loginText}>
                    Login with your eSewa mobile and PASSWORD (not MPin)
                </Typography>
            </div>
            {/* <OrderConfirmation /> */}
            <div className={classes.esewapayContainer}>
            <input
                    className={classes.button}
                    type="submit"
                    value="Confirm your order"
                />
                </div>
        </div>
            </form>
       
        </>
    )
}
export default Esewa
