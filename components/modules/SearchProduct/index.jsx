import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'
import { useRouter } from 'next/dist/client/router'
const useStyles = makeStyles(theme => ({
    product: {
        display: "flex",
        padding:24,
        cursor:"pointer",
        alignItems: "center",
        flexDirection: "column",
overflow:"hidden"

    },
    productImage: {
        // width: "30%",
        height: "auto",
        objectFit: "contain",
        width:"100%"
        // objectFit: "cover"
    },
    colorsContainer: {
        display: "flex",
        marginTop: "40px",
        // alignSelf: "flex-start"

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
        marginTop: "24px",
        justifyContent:"center",
        // marginLeft: "5px",
        width: "100%"
    },
    title: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "19px",
        color: colors.black,

    },
    price: {
        fontSize: '16px',
        fontWeight: "400",
        lineHeight: "22px",
        color: "#000",
        marginLeft: "12px",

    }
}))

const SearchProduct = ({ title, image, colors, price }) => {
    const classes = useStyles()
    const router=useRouter()
    return (
        <div onClick={()=>router.push('/product-details')} className={classes.product}>
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
export default SearchProduct
