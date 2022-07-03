import React from 'react'
import { Typography, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'
import PrimaryButton from '@/components/elements/PrimaryButton';
import { useRouter } from 'next/dist/client/router';
const useStyles = makeStyles(theme => ({
    orderConfirmation: {
        backgroundColor: colors.background,
        padding: "10px 0",
        paddingBottom:"0px"
    },
    totalContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    totalText: {
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "400",
        color: colors.black
    },
    totalAmount: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "18px",
        color: colors.black
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "24px",
        marginTop: "20px"

    },
    button: {
        background: colors.primary,
        borderRadius: "50px",
        padding: "15px 24px",
        color: "#fff",
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: "700",
        textTransform: "capitalize"
    },
    linkContainer: {
        // margin: "0 auto"
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        // paddingBottom: "30px"
    },
    links: {
        color: colors.black,
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        textDecoration: "none",
        userSelect: "none",

        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    }
}))
const OrderConfirmation = () => {
    const classes = useStyles()
    const router=useRouter()
    return (
        <>
            <div className={classes.orderConfirmation}>
                <div className={classes.totalContainer}>
                    <Typography variant="span" className={classes.totalText}>Total:</Typography>
                    <Typography variant="span" className={classes.totalAmount}>Rs. 8000.00</Typography>
                </div>

                {/* <div className={classes.buttonContainer}>
                    <Button variant="contained" className={classes.button}>Confirm Your Order</Button>
                </div> */}
                <PrimaryButton actionClick={()=>router.push('/payment-success')} title="Confirm Your Order" style={{marginTop:24,marginBottom:28}}/>
                <div className={classes.linkContainer}>
                    <Link href="#" className={classes.links}>
                        Help?
                    </Link>
                </div>
            </div>
        </>
    )
}
export default OrderConfirmation