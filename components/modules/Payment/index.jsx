import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import { Typography, Grid, Button, Link } from '@mui/material';
import { AiOutlineCreditCard } from 'react-icons/ai'
import { colors } from '../../../utils';
import CustomButton from '../../elements/CustomButton';
import Esewa from './Esewa';
import OrderConfirmation from '../OrderConfirmation';
import OnDelivery from './OnDelivery';
import Card from './Card';

const Payment = () => {
    const [card, setCard] = useState(false)
    const [esewa, setEsewa] = useState(true)
    const [onDelivery, setOndelivery] = useState(false)
    const useStyles = makeStyles(theme => ({
        paymentMethod: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down('md')]:{
                marginTop:"100px",
    
            },
            [theme.breakpoints.down('sm')]:{
                marginTop:card ? "180px":"120px",
            }
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
            fontWeight: "500",
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
                margin: "0 20px",
                [theme.breakpoints.down('xs')]: {
                    margin: "0 24px",
                    flexBasis: "70px"
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
            borderRadius: "4px",
            transition: "all 200ms ease-out",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover,&:focus": {
                border: "3px solid #137D27",
                backgroundColor: "#F5FFF7",
    
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
    const classes = useStyles()

  
    return (
        <div className={classes.paymentMethod}>
            <div className={classes.mainContainer}>
                <Typography variant="h2" className={classes.paymentText}>Choose your payment method</Typography>
                <div className={classes.paymentMethodContainer}>
                   
                    <div className={classes.eachMethod} onClick={() => onClickHandler('esewa')}>
                        <div className={`${classes.eachMethodImageContainer} ${esewa ? classes.active : null}`}>
                            {/* <img src="https://esewa.com.np/common/images/esewa_logo.png" /> */}
                            <AiOutlineCreditCard className={classes.eachMehodIcon} />

                        </div>
                        <Typography variant="h6" className={classes.eachMethodText}>e-Sewa</Typography>
                    </div>
                   
                </div>
                {esewa && <Esewa />}
            </div>
        </div>
    )
}
export default Payment