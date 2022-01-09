import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Link } from '@mui/material'
import { colors } from '../../../../utils'
import OrderConfirmation from '../../OrderConfirmation'
const useStyles = makeStyles(theme => ({
    esewa: {

        backgroundColor: colors.background,
    },
    esewaContainer: {
        padding: "30px 0px",
        paddingTop: "20px",
        margin: "0 20px",
        borderBottom: "1px solid #8D8D8D"

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

}))

const Esewa = () => {
    const classes = useStyles()
    return (
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
            <OrderConfirmation />
        </div>
    )
}
export default Esewa
