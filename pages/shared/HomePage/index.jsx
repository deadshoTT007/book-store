import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SecondaryButton from '../../../components/global/SecondaryButton'
import PrimaryButton from '../../../components/global/PrimaryButton'
import { colors } from '../../../components/utils'
const useStyles = makeStyles(theme => ({
    topBar: {
        width: "100vw",
        padding: "20px",
        background: "#fff",
    },
    heroSection: {
        height: "400px",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1542449450-025fc187536e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdsYXNzZXMlMjBjb2xsZWN0aW9uJTIwcmF5YmFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}) `,
        backgroundSize: "cover",
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
                <div className={classes.heroSection}>
                    <h1 className={classes.mainText}>Find the sunglass that <br></br> protect you everytime.</h1>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button}>For Mens</button>
                        <button className={classes.button}>For Womens</button>

                    </div>
                </div>
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
                            <img src="data:image/png;base64,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" />
                            <h2>Sunglass hut</h2>
                            <p>Stand out and let your light shine with this collection of bold and bright sunglasses.</p>
                            <button className={classes.brandButton}>buy sunglass-hut</button>
                        </div>
                        <div className={classes.brand}>
                            <img src="https://logos-world.net/wp-content/uploads/2020/11/Rayban-Logo.png" />
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
