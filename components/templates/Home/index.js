import React from 'react'
import { makeStyles } from '@mui/styles'
import SecondaryButton from '../../elements/SecondaryButton'
import PrimaryButton from '../../elements/PrimaryButton'

import CardMedia from '@mui/material/CardMedia';

import HeroImage from '@/public/images/hero-section.png'
import { colors } from '../../../utils'
const useStyles = makeStyles(theme => ({
    topBar: {
        // width: "100vw",
        padding: "20px",
        background: "#fff",
    },
    heroSection: {
        height: "400px",
        // backgroundImage: `url(${"https://images.unsplash.com/photo-1542449450-025fc187536e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdsYXNzZXMlMjBjb2xsZWN0aW9uJTIwcmF5YmFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}) `,
        // backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "40px"
    },
    buttonContainer: {
        marginTop: "40px"
    },
    button: {
        background: "transparent",
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: "500",
        width: "200px",
        color: "#fff",
        border: "none",
        padding: "20px 15px",
        border: "3px solid #fff",
        borderRadius: "50px",
        marginRight: "20px",
        outline: "none"
    },
    mainText: {
        fontSize: "48px",
        fontWeight: "500",
        lineHeight: "55px",
        color: "#fff",
        textTransform: "capitalize"
    },
    main: {
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
        height: "500px",


    },
    sunglasses: {
        height: "100%",
        backgroundImage: `url(${"https://images.pexels.com/photos/8264629/pexels-photo-8264629.jpeg?cs=srgb&dl=pexels-olya-prutskova-8264629.jpg&fm=jpg"}) `,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        overflow: "hidden",
        flexDirection: "column",
        padding: "0 40px",
        // background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
        backgroundSize: "cover",

        '& h3': {
            fontSize: "40px",
            fontWeight: "500",
            lineHeight: "47px",
            color: "#fff",
            margin: "10px 0",
            textTransform: "capitalize"
        },
        '& p': {
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: "400",
            color: "#fff"
        }
    },
    banner: {
        height: "340px",
        width: "100%",
        overflow: "hidden",
        padding: "20px 0",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1534844978-b859e5a09ad6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxnbGFzc2VzJTIwY29sbGVjdGlvbiUyMHJheWJhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}) `,
        backgroundSize: "cover",
        textAlign: "center",
        margin: "20px 0"
    },
    bannerText: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "46px"
    },
    brands: {
        textAlign: "center",
        // margin: "30px 0",
        textTransform: "capitalize",
        paddingTop: "10px"
    },
    brandsContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "20px",
        margin: "30px 0",
    },
    brandsText: {
        fontSize: "32px",
        lineHeight: "37px",
        fontWeight: "500",

    },
    brand: {
        padding: "0 40px",
        '& img': {
            width: "70%",
            height: "200px"
        },
        '& h2': {
            fontSize: "32px",
            fontWeight: "500",
            lineHeight: "37px",
            color: colors.black
        },
        '& p': {
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "22px",
            color: colors.black,
            padding: "10px 0"
        },
        '& button': {
            padding: "15px 20px",
            width: "40%",
            borderRadius: "50px",
            border: "2px solid #000",
            background: "transparent",
            margin: "10px 0",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "19px",
            color: colors.black,
            textTransform: "capitalize"
        }
    }

}))
const HomePage = () => {
    const classes = useStyles()
    return (
        <div className={classes.topBar}>
            <div className={classes.topBarContainer}>
                {/* <CardMedia component="img"
                    height="194"
                    image={HeroImage}
                    alt="Paella dish">
                    <h1 className={classes.mainText}>Find the sunglass that <br></br> protect you everytime.</h1>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button}>For Mens</button>
                        <button className={classes.button}>For Womens</button>

                    </div>
                </CardMedia> */}
                <div className={classes.main}>
                    <div className={classes.sunglasses}>
                        <h3 >Iconic Styles with wide <br></br> range of sunglasses. </h3>
                        <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                        <PrimaryButton style={{ width: "210px" }} title="Shop Sunglasses" />
                    </div>
                    <div className={classes.sunglasses}>
                        <h3 >Your custom sunglass to match your personality.</h3>
                        <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                        <PrimaryButton style={{ width: "210px" }} title="Shop Sunglasses" />
                    </div>

                </div>
                <div className={classes.banner}>
                    <h2 className={classes.bannerText}>Get 5-frames for home try-on.</h2>
                </div>
                <div className={classes.brands}>
                    <h2 className={classes.brandsText}>shop premium glasses from world reknown <br></br> eye wear companies</h2>
                    <div className={classes.brandsContainer}>
                        <div className={classes.brand}>
                            <img src="https://www.titlis-rent.ch/uploads/images/Logo/Oakley.jpg" />
                            <h2>Sunglass hut</h2>
                            <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                            <button className={classes.brandButton}>buy sunglass-hut</button>
                        </div>
                        <div className={classes.brand}>
                            <img src="https://www.titlis-rent.ch/uploads/images/Logo/Oakley.jpg" />
                            <h2>Ray-Ban</h2>
                            <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                            <button className={classes.brandButton}>Buy ray-ban</button>
                        </div>
                        <div className={classes.brand}>
                            <img src="https://www.titlis-rent.ch/uploads/images/Logo/Oakley.jpg" />
                            <h2>Okaley</h2>
                            <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                            <button className={classes.brandButton}>buy okaley</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default HomePage
