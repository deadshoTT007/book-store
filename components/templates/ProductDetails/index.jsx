import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { Radio, RadioGroup,Checkbox, FormControlLabel, FormControl, FormLabel } from '@mui/material'
import PrimaryButton from '../../elements/PrimaryButton';
import SecondaryButton from '../../elements/SecondaryButton';
import { useMediaQuery } from '@mui/material';
import HomeLayout from '@/components/layouts/HomeLayout';
import { useSelector, useDispatch } from 'react-redux';
import TopBar from '@/components/modules/TopBar';
import StickyBottomNavBar from '@/components/elements/StickyBottomNavbar';
import { getProduct } from '@/store/actions/products';
import Loader from '@/components/Loader';
import { getProductsList } from '@/store/actions/products';
import Product from '@/components/modules/Product';
const bgImage = "https://st2.depositphotos.com/3258807/10726/i/950/depositphotos_107267666-stock-photo-positive-girl-holding-her-glasses.jpg"

const imageData = [
    { id: 0, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" },
    { id: 1, src: "https://media.istockphoto.com/photos/glasses-picture-id165141266?k=6&m=165141266&s=612x612&w=0&h=38PPIpTmhXj22zVrFttgJWdLiIM28EjrA6feGpF5RJA=" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbinnKzY8CnOczK5V47FvdQFH3xCM8UzmVvA&usqp=CAU" },
    { id: 3, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" },
    { id: 4, src: "https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=6&m=125416806&s=612x612&w=0&h=COVa6t9cpz7tjSd0_V3GLfnI07YZ4xekH3amp9LlG7w=" }
]


const useStyles = makeStyles(theme => ({
    main: {
        padding: "40px",
        overflow: "hidden",
        marginTop:"65px",
        [theme.breakpoints.down('md')]: {
            padding: "0",
            width:"90%",
            margin:"0 auto",
            marginTop:"220px"

        }
        // background: 'red'

    },
    productDetails: {
        width: "100%",
        overflowX: "hidden",
        overflowY:"auto",
        // minHeight: "70vh",
        // height: "70vh",
        display: "grid",
        gridTemplateColumns: "60% 40%",
        gridGap: "20px",
        // justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: "50% 50%"
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "1fr"
        }
    },

    imageContainer: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingRight: "40px",
        minHeight: "60vh",
        height: "60vh",
        // width: "100vw",
        userSelect: "none",

        [theme.breakpoints.down('md')]: {
            minHeight: "50vh",
            height: "50vh"
        },
        [theme.breakpoints.down("md")]: {
            minHeight: "30vh",
            height: "30vh",
            width: "100vw"
        },

    },
    mainImgContainer: {
        overflow: "hidden",
        height: "100%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
            height: "100%",
            marginBottom:"40px"
        },
        // [theme.breakpoints.down('md')]: {
        //     height: "70%"
        // }
    },
    mainImg: {
        width: "100%",
        height: "100%",
        objectFit: "unset",
    },
    smallImagesContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px"
    },
    smallImg: {
        cursor: "pointer",
        width: "100%",
        // height: "auto",
        height: "100px",
        // objectFit: "cover"
        objectFit: "contain"

    },
    eachImgContainer: {
        margin: "0 20px",
        flexBasis: "100%",
        // width: "150px",
        borderRadius: "4px"
    },
    activeImg: {
        border: `3px solid #137D27`,

    },
    details: {
        padding: "40px",
        // overflow: "hidden",
        // marginRight: "80px",
        backgroundColor: colors.mainGray,
        minHeight: "60vh",
        // height: "60vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('lg')]:{
            minWidth: "500px",

        },
        [theme.breakpoints.down('md')]: {
            padding: "16px 64px 24px 16px",
            minWidth:"100%",
            display:"block",
            minHeight:'auto',
            // height:"270px",
            overflow:"auto"
        }
    },
    detailsContainer: {
        flex: 1,
    },
    titleContainer: {
        display: "flex",
        alignItems: "center",
        flexWrap:"wrap",
        '& p': {
            marginTop: "3px"
        },
        '& h3': {
            fontSize: "32px",
            fontWeight: "500",
            lineHeight: "38px",
            color: colors.black,
            [theme.breakpoints.down('md')]: {
                fontSize: "24px",
                lineHeight: "28px"
            }
        }
    },
    starIcon: {
        fontSize: "24px",
        margin: "0 2px",
        // color: "#fff",
    },
    reviewsContainer: {
        display: "flex",
        alignItems: "center",
        margin: "0 10px"
    },
    active: {
        color: colors.primary
    },
    description: {
        color: colors.gray,
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "400",
        margin: "10px 0"
    },
    model: {
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        color: colors.gray
    },
    price: {
        marginTop: "30px",
        marginBottom: "20px",
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "38px",
        color: colors.primary,
        [theme.breakpoints.down('md')]: {
            fontSize: "24px",
            lineHeight: "28px"
        }
    },
    colors: {
        '& p': {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            color: colors.gray
        }
    },

    color: {
        width: "24px",
        height: "24px",
        background: "black",
        borderRadius: "50%",
        margin: "10px 5px",
        userSelect: "none"

    },
    colorsContainer: {
        margin: "10px 0",
        display: "flex",
        // '&:not(:first-child)': {
        //     margin: "0"
        // }
    },
    red: {
        backgroundColor: "#EB5858",
    },
    green: {
        backgroundColor: colors.primary
    },
    yellow: {
        backgroundColor: "#F0CE53"
    },
    darkGreen: {
        backgroundColor: "#03380D"
    },
    gray: {
        backgroundColor: colors.gray
    },
    lightGreen: {
        backgroundColor: colors.lightGreen,
    },
    sizes: {
        margin: "10px 0",
        '& p': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray
        }
    },
    sizesContainer: {
        display: "flex"
    },
    size: {
        margin: "20px 10px",
        padding: " 15px 30px",
        border: `3px solid ${colors.lightGreen}`,
        borderRadius: "4px",
        cursor: "pointer",
        "&:first-child": {
            margin: "20px 0px",
            marginRight: "5px"
        },
        [theme.breakpoints.down('md')]: {
            padding: "10px 20px",
            margin: "10px 5px",
            "&:first-child": {
                margin: "10px 0px",
                marginRight: "5px"
            },
        }
    },
    activeSize: {
        border: `3px solid ${colors.primary}`,

    },
    select: {
        '& .PrivateRadioButtonIcon-root-14.PrivateRadioButtonIcon-checked-16 .PrivateRadioButtonIcon-layer-15': {
            color: colors.primary
        },
        '& .MuiSvgIcon-root': {
            color: colors.primary
        },

        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: colors.primary
        },
        '& .MuiRadio-colorSecondary.Mui-checked:hover': {
            borderColor: colors.primary
        },
        '& .MuiTypography-body1': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray,
            fontFamily: "Rubik"
        }
    },
    types: {
        '& p': {
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "500",
            color: colors.gray
        }
    },
    homeTryOn: {
        marginTop: "10px",
        '& .MuiFormControlLabel-root': {
            marginRight: "0px"
        },
        '& span': {
            display: "inline-block"
        }
    },
    chaseGlass: {
        display: "flex",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse",
            display:"none"
        },
        // display:"grid",
        // gridTemplateColumns: "50% 50%",
        alignItems: "center",
        margin: "40px 0",
        // "&>*": {
        //     flex: "1"
        // }
    },
    chaseDescription: {
        padding: " 0 64px ",
        width:"40%",
        [theme.breakpoints.down('md')]: {
            padding: "16px 0",
            width:"100%"
        },
        '& h2': {
            fontSize: "40px",
            lineHeight: "51px",
            fontWeight: "700",
            color: "#000",
            fontFamily: 'Lora',
            textTransform: "capitalize",
            [theme.breakpoints.down('md')]:{
                fontSize:"24px",
                lineHeight:"30px",
                fontWeight:"700"
            }
        },
        '& p': {
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#000",
            margin: "10px 0",
            fontFamily: "Rubik"
        }
    },
    chaseImgContainer: {
        height: "400px",
        userSelect: "none",
        display: 'flex',
        width:"60%",
        alignItems: 'center',
        justifyContent: "flex-end",
        '& img': {
            height: "400px",
            width: "100%",
            borderRadius: "4px",
            objectFit:"cover"
        },
        [theme.breakpoints.down('md')]:{
            width:"100%"
        }
    },
    banner: {
        paddingRight: "64px",
        height: "380px",
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            paddingRight: "60px",
            display:"none"
        }
    },
    bannerContainer: {
        width: "30%",
        minWidth: "400px",
        [theme.breakpoints.down('md')]: {
            width: "50%"
        },
        '& h2': {
            fontFamily: "Lora",
            fontSize: '40px',
            lineHeight: "51px",
            fontWeight: "700",
            textTransform: "capitalize",
            color: "#000",
        },
        '& p': {
            marginTop: "10px",
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "400",
            color: "#000"
        }

    },
    heroImgContainer: {
        '& img': {
            width: "100%",
            height: "300px",
            objectFit: "cover"
        }
    },
    heroSectionText: {
        marginTop: "10px",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Lora",
        color: colors.black,
        textTransform: "capitalize"
    },
    heroSectionBodyText: {
        lineHeight: "22px",
        fontSize: "16px",
        marginTop: "10px",
        fontWeight: "400",
        color: colors.black
    },

    slider: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
    },
    sliderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "30px"
    },
    dots: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#8D8D8D",
        margin: "0 5px",
        '&:first-child': {
            marginRight: "5px",
            marginLeft: "0px"
        }
    },
    dotActive: {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: colors.primary
    },
    heroSection:{
        [theme.breakpoints.down('md')]:{
            display:"none"
        }
    },
    relatedProductsContainer:{
        margin:"120px 0px"
    },
    relatedText:{
        fontSize:40,
        fontWeight:"600",
        textAlign:"center",
        marginBottom:"40px"
    },
    relatedMainContainer:{
        width:"90%",
        margin:"0 auto",
       display:"grid",
       gridTemplateColumns:"repeat(3,1fr)",
       gap:"20px"
    }


}))
const ProductDetails = (props) => {

    const dispatch = useDispatch()
    const product = useSelector(state=>state.products.product)
    const productsList = useSelector(state=>state.products.productsList)

    const { id } = props;

    useEffect(()=>{
        dispatch(getProduct(id))
    },[id])

    useEffect(()=>{
        dispatch(getProductsList(product?product.category:""))
    },[product && product.category])

    const classes = useStyles()
    console.log(product,"product")
    const [imageIndex, setImageIndex] = useState([0])
    const [imagesData, setImagesData] = useState(imageData)
    const image = imagesData[imageIndex].src
    const active = useMediaQuery("(min-width:900px)")
    console.log(active, "Active")
    const [value, setValue] = React.useState("Prescription");
    const handleChange = (e) => {
        console.log(e, "event")
        setValue(e.target.value);
    };
    const imageClickHandler = (index) => {
        console.log(index, "ismage")
        setImageIndex(index)
        // if (image.id === index) {

        // }
    }
    const dots = new Array(imagesData.length)

    const addToCartHandler = () => {
        dispatch()
    }


    return (
        <>
        {/* <TopBar/> */}
        <HomeLayout>
            {product?
            <div className={classes.main}>
                <div className={classes.productDetails}>
                    <div className={classes.imageContainer}>
                        <div className={classes.mainImgContainer}>
                            <img src={product.image} className={classes.mainImg} alt="" />
                        </div>
                        {/* {active ? <div className={classes.smallImagesContainer}>
                            {imagesData.map((img, index) => {
                                return (
                                    <div onClick={() => imageClickHandler(index)} className={`${classes.eachImgContainer} ${index === imageIndex && classes.activeImg}`}>
                                        <img src={img.src} className={classes.smallImg} />
                                    </div>
                                )
                            })}


                        </div> : (<div className={classes.slider}>
                            <div className={classes.sliderContainer}>
                                {Array.from({ length: imagesData.length }).map((dot, index) => {
                                    return (
                                        <div onClick={() => imageClickHandler(index)} className={`${classes.dots} ${index === imageIndex && classes.dotActive}`}></div>
                                    )
                                })}
                            </div>
                        </div>)} */}

                    </div>
                    <div className={classes.details}>
                        <div className={classes.detailsContainer}>
                            <div className={classes.titleContainer}>
                                <h3 className={classes.title}>{product.title}</h3>
                                <div className={classes.reviewsContainer}>
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarRoundedIcon className={`${classes.starIcon} ${classes.active}`} />
                                    <StarBorderRoundedIcon className={classes.starIcon} />
                                    <StarBorderRoundedIcon className={classes.starIcon} />
                                </div>
                                <p>(288 Reviews)</p>
                            </div>
                            <p className={classes.description}>{product.description}</p>
                            <p className={classes.model}>Category: {product.category}</p>
                            <h4 className={classes.price}>Rs.{product.price}</h4>
                            
                      
                                <PrimaryButton actionClick={addToCartHandler} title="ADD TO CART" style={{ width: "100%",marginTop:"32px" }} smallStyle={{width:"94%"}} parentStyle={{justifyContent:"start"}} />
                            
                        </div>
                    </div>
                </div>
                {/* <div className={classes.chaseGlass}>
                    <div className={classes.chaseDescription}>
                        <h2 >About chase glass</h2>
                        <p>Chase has a frame shape that is classic and timeless. The unassuming shape and subtle hinge studs
                            are understated and stylish. What makes these eyeglasses really stand out is the two-tone
                            Gray and Brown finish. The smooth fade between the colors on the lens frame creates a truly modern look.</p>
                    </div>
                    <div className={classes.chaseImgContainer}>
                        <img src="https://images.unsplash.com/photo-1609902726285-00668009f004?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjB3aXRoJTIwZ2xhc3Nlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    </div>
                </div> */}
                {/* {active ? <div className={classes.banner}>
                    <div className={classes.bannerContainer}>
                        <h2>Find eaxct width that fits you</h2>
                        <p>If your face is average in size, which is most common, this frame should fit you well.
                            Unsure of your size? Select a few different options in a free Home Try-On.</p>
                        <SecondaryButton title="Find your width" parentStyle={{justifyContent:"start",marginTop:"32px"}} style={{ width: "50%",color:colors.black,border:`2px solid ${colors.black}`, justifyContent: "center" }} />
                    </div>
                </div> :
                    <div className={classes.heroSection}>
                        <div className={classes.heroImgContainer}>
                            <img src={bgImage} alt="Lady wearing glasses" />
                        </div>
                        <div className={classes.heroSectionText}>Find eaxct width that fits you</div>
                        <div className={classes.heroSectionBodyText}>If your face is average in size, which is most common, this frame should fit you well. Unsure of your size? Select a few different options in a free Home Try-On.</div>
                        <SecondaryButton title="Find your width" style={{ width: "50%", justifyContent: "flex-start" }} />
                    </div>
                } */}

                <div className={classes.relatedProductsContainer}>
                    <div className={classes.relatedText}>Related Books</div>
                    <div className={classes.relatedMainContainer}>
                {productsList.length>0 && productsList.map(product=>{
                    return(
                        <Product key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} image={product.image}/>
                        )
                })}
                </div>
                </div>
            </div>
        :<Loader/> 
        }
            </HomeLayout>
{/* <StickyBottomNavBar/> */}
        </>
    )
}
export default ProductDetails
