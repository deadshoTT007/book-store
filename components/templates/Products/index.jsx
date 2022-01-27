import React from 'react'
import {makeStyles} from '@mui/styles'
import { colors } from '../../../utils/index'
import TopBar from '@/components/modules/TopBar'
import Product from '@/components/modules/Product'
import { useMediaQuery } from '@mui/material'
import FilterBox from '@/components/elements/FilterBox'
const bgImage = 'https://post.healthline.com/wp-content/uploads/2020/09/woman-enjoying-morning-coffee-thumb.jpg'
const imageBg="https://media.baamboozle.com/uploads/images/120677/1602612165_18008"
const womenSunglassesData = [
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
]
const useStyles = makeStyles(theme => ({
    main: {
        padding: "40px",
        [theme.breakpoints.down('md')]: {
            padding: "40px 20px"
        }
    },
    banner: {
        height: "450px",
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        display: 'flex',
        alignItems: "center",
        padding: "40px"
    },
    bannerText: {
        fontFamily: "Lora",
        fontWeight: "700",
        fontSize: "40px",
        lineheight: "51px",
        color: colors.black,
        textTransform: "capitalize"
    },
    sunglasses: {
        display: "grid",
        gridTemplateColumns: " 1fr 1fr 1fr",
        gridRowGap: "80px",
        gridColumnGap: "40px",
        margin: "20px 0",
        padding: "40px 80px",
        [theme.breakpoints.up("lg")]: {
            gridColumnGap: "80px"
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: " 1fr 1fr ",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "1fr",
            padding: "20px 20px"
        }

    },
    sunglassesContainer: {
        display: 'flex',
        justifyContent: "center"
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
    }

}))
export const SunglassWomens = () => {
    const classes = useStyles()
    const bannerActive = useMediaQuery("(min-width:900px)")
    console.log(bannerActive, "acctive")
    return (
        <>
            <TopBar />
            <div className={classes.main}>
                {bannerActive ? <div className={classes.banner}>
                    <div className={classes.bannerContainer}>
                        <div className={classes.bannerText}>Glasses that work hard.<br></br>
                            Just as hard as you do.</div>
                    </div>
                </div> : <div className={classes.heroSection}>
                    <div className={classes.heroImgContainer}>
                        <img src={bgImage} alt="Lady wearing glasses" />
                    </div>
                    <div className={classes.heroSectionText}>Glasses that work hard.<br></br>
                        Just as hard as you do.</div>
                </div>}
<FilterBox/>
                <div className={classes.sunglassesContainer}>
                    <div className={classes.sunglasses}>
                        {womenSunglassesData.map((sunglass, index) => {
                            return <Product key={index} title={sunglass.title} image={sunglass.src} colors={sunglass.colors} price={sunglass.price} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SunglassWomens