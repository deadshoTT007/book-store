import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Button, Link } from '@material-ui/core';
import { AiOutlineCreditCard } from 'react-icons/ai'
import { colors } from '../../../components/utils';
import CustomButton from '../../../components/global/CustomButton';
import Esewa from './Esewa';
import OrderConfirmation from './OrderConfirmation';
import OnDelivery from './OnDelivery';
import Card from './Card';
const useStyles = makeStyles(theme => ({
    paymentMethod: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    mainContainer: {
        width: "60vh",
        minHeight: "80vh",
        background: "#fff",
        padding: "20px"
    },
    paymentText: {
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: "28px",
        color: colors.black,
        textTransform: "capitalize"
    },
    paymentMethodContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "50px",
        // background: "red",
        '&>*': {
            flexBasis: "9   0px",
            // background: "blue",
            height: "70px",
            margin: "0 30px",
            [theme.breakpoints.down('xs')]: {
                margin: "0 15px",
                flexBasis: "80px"
            }
        }
    },
    eachMethod: {
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
        width: "100px",
    },
    eachMehodIcon: {
        fontSize: "36px"
    },
    eachMethodImageContainer: {
        border: "1px solid #8D8D8D",
        backgroundColor: "#F5FFF7",
        borderRadius: "4px",
        transition: "all 300ms ease-out",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover,&:focus": {
            border: "3px solid #137D27"
        }
    },
    active: {
        border: "3px solid #137D27"

    },
    eachMethodText: {
        fontSize: "14px",
        lineHeight: "16px",
        fontWeight: "400",
        color: colors.black,
        textAlign: "center",
        paddingTop: "10px"
    },




}))
const Payment = () => {
    const classes = useStyles()
    const [esewa, setEsewa] = useState(true)
    const [onDelivery, setOndelivery] = useState(false)
    const [card, setCard] = useState(false)
    const onClickHandler = (name) => {
        if (name === "card") {
            setCard(true)
            setEsewa(false)
            setOndelivery(false)
        }
        if (name === "esewa") {
            setCard(false)
            setEsewa(true)
            setOndelivery(false)
        }
        if (name === "onDelivery") {
            setCard(false)
            setEsewa(false)
            setOndelivery(true)
        }
    }
    return (
        <div className={classes.paymentMethod}>
            <div className={classes.mainContainer}>
                <Typography variant="h2" className={classes.paymentText}>Choose your payment method</Typography>
                <div className={classes.paymentMethodContainer}>
                    <div className={classes.eachMethod} onClick={() => onClickHandler('card')}>
                        <div className={`${classes.eachMethodImageContainer} ${card ? classes.active : null}`}>
                            <AiOutlineCreditCard className={classes.eachMehodIcon} />
                        </div>
                        <Typography variant="h6" className={classes.eachMethodText}>Card</Typography>
                    </div>
                    <div className={classes.eachMethod} onClick={() => onClickHandler('esewa')}>
                        <div className={`${classes.eachMethodImageContainer} ${esewa ? classes.active : null}`}>
                            {/* <img src="https://esewa.com.np/common/images/esewa_logo.png" /> */}
                            <AiOutlineCreditCard className={classes.eachMehodIcon} />

                        </div>
                        <Typography variant="h6" className={classes.eachMethodText}>e-Sewa</Typography>
                    </div>
                    <div className={classes.eachMethod} onClick={() => onClickHandler('onDelivery')}>
                        <div className={`${classes.eachMethodImageContainer} ${onDelivery ? classes.active : null}`}>
                            <AiOutlineCreditCard className={classes.eachMehodIcon} />
                        </div>
                        <Typography variant="h6" className={classes.eachMethodText}>On delivery</Typography>
                    </div>
                </div>
                {esewa && <Esewa />}
                {onDelivery && <OnDelivery />}
                {card && <Card />}
                {/* <OrderConfirmation /> */}
            </div>
        </div>
    )
}
export default Payment