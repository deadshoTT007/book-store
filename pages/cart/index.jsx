
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import TopBar from '@/components/modules/TopBar'
import Footer from '@/components/modules/Footer'
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@/components/elements/Divider'
import PrimaryButton from '@/components/elements/PrimaryButton'
import { Link } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import HomeLayout from '@/components/layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getCartList } from '@/store/actions/cart'
import Loader from '@/components/Loader'
import { cardMediaClasses } from '@mui/material'
import { createOrder } from '@/store/actions/orders'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        margin: "28px 0",
        width: "95%",
        marginTop: "96px",
        padding: "0 40px",
        [theme.breakpoints.down('md')]: {
            width: "90%",
            margin: "24px auto",
            marginTop: "150px",
            padding: "0px"
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "150px"
        }
    },
    cartText: {
        color: colors.primary
    },
    productDetailsContainer: {
        marginTop: 28,
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridGap: "64px",
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "1fr",
            height: 200,
            overflow: "auto"
        },
        [theme.breakpoints.down('sm')]: {
            height: 160
        }

    },
    productDetails: {
        marginBottom: "24px",
        position: "relative",
        padding: "40px 24px 40px 40px",
        border: "1px solid #8D8D8D",
        display: "flex",
        borderRadius: "4px",
        [theme.breakpoints.down('md')]: {
            display: "block",
        }
        // justifyContent:""
    },
    productImage: {
        objectFit: "cover",
        flex: 1,
        marginRight: 40,
        width: "300px",
        height: "500px",
        objectFit: "cover"
    },
    productDescriptionContainer: {
        flex: 1,

    },
    descriptionHeaderText: {
        fontSize: "34px",
        fontWeight: 600,
        lineHeight: "28px",
        color: colors.black,
        marginBottom: "20px",
        [theme.breakpoints.down('md')]: {
            marginTop: 24
        }
    },
    descriptionSubHeaderText: {
        fontSize: "18px",
        lineHeight: "24px",
        color: colors.gray,
        marginBottom: 10
    },
    modelText: {
        fontSize: "18px",
        fontWeight: 700,
        color: colors.gray,
        margin: "10px 0"

    },
    descriptionContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "12px",
        marginTop: "16px"
    },
    descriptionMainText: {
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "14px",
        color: colors.black
    },
    closeIcon: {
        position: 'absolute',
        top: "40px",
        right: '24px'
    },
    descriptionSubText: {
        fontSize: "12px",
        lineHeight: "16px",
        color: colors.gray
    },
    checkOutContainer: {
        padding: "24px",
        background: colors.background,
        height: "fit-content",
        [theme.breakpoints.down('md')]: {
            zIndex: "20",
            position: "fixed",
            bottom: "80px",
            left: 0,
            width: "100vw"
        }
    },
    itemContainer: {
        display: 'flex',
        justifyContent: "space-between"
    },
    totalContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    subTotalText: {
        fontSize: "20px",
        lineHeight: "28px",
        color: colors.black,
        fontWeight: 600
    },
    price: {
        fontSize: '16px',
        lineHeight: "19px",
        color: colors.black,
        fontWeight: 600

    },
    shippingText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: colors.gray,
        marginTop: "10px"
    },
    itemText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: colors.black
    },
    count: {
        fontSize: "16px",
        lineHeight: "22px",
        color: colors.black
    },
    includesText: {
        fontSize: "16px",
        lineHeight: "19px",
        color: colors.black,
        fontWeight: "500",
        marginTop: "24px",
        marginBottom: "8px"
    },
    infoText: {
        fontSize: '16px',
        lineHeight: "22px",
        color: colors.black
    },
    infoBox: {
        marginLeft: "20px"
    },
    link: {
        fontSize: "12px",
        lineHeight: "14px",
        color: colors.primary,
        marginTop: 16,
        fontWeight: "500",
        display: "none",
        textDecoration: "none",
        [theme.breakpoints.down('md')]: {
            display: "block"
        }
    },
    priceText: {
        color: colors.primary,
        fontSize: 24,
        marginTop: 10,
        fontWeight: 600
    },
    signContainer: {

    },
    container: {
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        width: "100%"
    }

}))

const Cart = () => {
    const classes = useStyles()
    const router = useRouter()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart.cart_items)
    console.log(cart,"carttt")
    // const profileId = useSelector(state=>state.profile.profile.id)
    const token = useSelector(state => state.auth.token)
    const [showMore, setShowMore] = useState(false)


    const checkoutHandler = () => {
        dispatch(createOrder())
        router.push('/order-summary')
    }


    const detailsClickHandler = () => {
        setShowMore(!showMore)
    }

    useEffect(() => {
        dispatch(getCartList())
    }, [])



    if (!token) {
        return (
            <HomeLayout>
                <div className={classes.signContainer}>
                    <div className={classes.container}>
                        <div className={classes.signIntext}>Please Sign in to continue Shopping</div>
                        <PrimaryButton title="Sign In" actionClick={() => router.push('register-account')} style={{ marginTop: 24 }} />
                    </div>
                </div>
            </HomeLayout>
        )
    }

    if ( cart && cart.length == 0) {
        return (
            <HomeLayout>
                <Loader />
            </HomeLayout>
        )
    }

    let totalAmount=[];

     totalAmount = cart && cart.length > 0 && cart.map((eachCart, index) => {
        let price = eachCart.product.price * eachCart.quantity;
        let totalPrice = + price;
        return totalPrice
    })
let total;
    if(totalAmount){
       total = totalAmount.reduce((arr, acc) => arr + acc)
    }
console.log(total,"total")



    return (
        <>
        {cart && cart.length>0 && 
        <HomeLayout footer={true}>
            <div className={classes.root}>
                <div className={classes.mainContainer}>
                    <div className={classes.cartText}>Your Cart</div>
                    <div className={classes.productDetailsContainer}>
                        <div className={classes.mainDetailContainer}>
                            {cart.length>0 && cart.map(product => {
                                return (
                                    <div className={classes.productDetails}>
                                        <CloseIcon className={classes.closeIcon} />
                                        <img src={product.product.image} className={classes.productImage} />
                                        <div className={classes.productDescriptionContainer}>
                                            <div className={classes.descriptionHeaderText}>{product.product.title}</div>
                                            <div className={classes.descriptionSubHeaderText}>{product.product.description}</div>
                                            <div className={classes.modelText}>Author: {product.product.author}</div>
                                            <div className={classes.modelText}>Quantity: {product.quantity}</div>
                                            <div className={classes.priceText}>Rs.{product.product.price * product.quantity}</div>

                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                        <div className={classes.checkOutContainer}>
                            <div className={classes.itemContainer}>
                                <div className={classes.itemText}>Items:</div>
                                <div className={classes.count}>{cart.length}</div>
                            </div>
                            <Divider style={{ margin: "10px 0" }} />
                            <div className={classes.totalContainer}>
                                <div className={classes.subTotalText}>Subtotal:</div>
                                <div className={classes.price}>{total}</div>
                            </div>
                            <div className={classes.shippingText}>Shipping and Tax are included.</div>
                            <PrimaryButton actionClick={checkoutHandler} title="Proceed to checkout" style={{ marginTop: 24 }} parentStyle={{ justifyContent: "center" }} />
                            <div className={classes.includesText}>Includes:</div>
                            <ul className={classes.infoBox}>
                                <li className={classes.infoText}>Includes all the taxes and delivery costs</li>
                                <li className={classes.infoText}>Free standard shipping and free returns</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </HomeLayout>
    }
    </>
  
    )
}

export default Cart
