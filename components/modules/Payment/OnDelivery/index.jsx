import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../../utils/index'
import OrderConfirmation from '../../OrderConfirmation'
const useStyles = makeStyles(theme => ({
    onDelivery: {
        backgroundColor: colors.background,
        padding: "20px 0",
    },
    onDeliveryContainer: {
        margin: "0 20px",
        borderBottom: "1px solid #8D8D8D"
    },
    headerText: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        color: colors.black,
        textTransform: "capitalize"
    },
    subHeaderText: {
        margin: "20px 0",
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        color: colors.black
    }
}))

const OnDelivery = () => {
    const classes = useStyles()
    return (
        <div className={classes.onDelivery}>
            <div className={classes.onDeliveryContainer}>
                <Typography variant="h4" className={classes.headerText}>You choosed to pay on delivery method</Typography>
                <Typography variant="subtitle1" className={classes.subHeaderText}>Pay after receveing your product</Typography>
            </div>
            <OrderConfirmation />
        </div>)
}
export default OnDelivery
