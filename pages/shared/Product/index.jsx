import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../components/utils'
const useStyles = makeStyles(theme => ({
    product: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",


    },
    productImage: {
        width: "100%",
        height: "auto",
        objectFit: "contain"
        // objectFit: "cover"
    },
    colorsContainer: {
        display: "flex",
        marginTop: "20px",
        alignSelf: "flex-start"

    },
    color: {
        margin: "0 5px",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        "&:firstChild": {
            marginRight: "5px"
        },
    },
    red: {
        backgroundColor: "#EB5858"
    },
    black: {
        backgroundColor: "#36383A"
    },
    gray: {
        backgroundColor: "#A7978D"
    },
    brown: {
        backgroundColor: "#3A2A2B"
    },
    maron: {
        backgroundColor: "#88321F"
    },
    yellow: {
        backgroundColor: "#B98730"
    },
    productDetails: {
        display: 'flex',
        alignItems: "center",
        marginTop: "15px",
        marginLeft: "5px",
        width: "100%"
    },
    title: {
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "23px",
        color: colors.black

    },
    price: {
        fontSize: '16px',
        fontWeight: "400",
        lineHeight: "22px",
        color: "#000",
        marginLeft: "7px",
        marginTop: "2px"

    }
}))

const Product = ({ title, image, colors, price }) => {
    const classes = useStyles()
    return (
        <div className={classes.product}>
            <img src={image} className={classes.productImage} />
            <div className={classes.colorsContainer}>
                {/* {colors.map((color,index)=>{
                    return (
                        <div className={`${classes.color} ${color=="red"&&classes.red}`}></div>
                        
                    )
                })} */}
                <div className={`${classes.color} ${classes.red}`}></div>
                <div className={`${classes.color} ${classes.black}`}></div>
                <div className={`${classes.color} ${classes.gray}`}></div>
                <div className={`${classes.color} ${classes.brown}`}></div>
                <div className={`${classes.color} ${classes.maron}`}></div>
                <div className={`${classes.color} ${classes.yellow}`}></div>
            </div>
            <div className={classes.productDetails}>
                <div className={classes.title}>{title}</div>
                <div className={classes.price}>{`Rs ${price}`}</div>
            </div>
        </div>
    )
}
export default Product
