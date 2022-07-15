import React from 'react'
import { makeStyles } from '@mui/styles';
import {  Button, Link, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import { FiGift } from 'react-icons/fi'
import PrimaryButton from '@/components/elements/PrimaryButton';
import { BiEnvelope } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { colors } from '@/utils/index';
import { GrCircleQuestion } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'
import { RiFacebookCircleLine } from 'react-icons/ri'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import Email from '@/components/elements/Email';
const useStyles = makeStyles(theme => ({
    main: {
        // position: "fixed",
        // bottom: "0",
        zIndex:"10",
        width: "100vw",
        // overflow:"hidden",
        background: colors.background,
        paddingTop: "40px",
        paddingBottom:"40px",        
        marginTop:"40px",
        [theme.breakpoints.down('md')]:{
            position:"relative",
            paddingBottom: "100px",
        }
    },
    mainContainer: {
        width: "90%",
        margin: "0 auto",
        minHeight: "40vh",

    },
    subscriptionContainer: {
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "100%",

        }
    },
    subscriptionTextContainer: {
        display: "flex",
        alignItems: "center",
        // marginBottom:"24px",
        [theme.breakpoints.down("md")]: {
            alignItems: "center"
        }
    },
    subscriptiontext: {
        color: "#0D0D0D",
        fontSize: "24px",
        fontWeight: "500",
        paddingRight: "40px",
        lineHeight: "28px",
        paddingLeft: "10px",
        [theme.breakpoints.down("md")]:{
            paddingRight:0
        }
    },
    giftIcon: {
        fontSize: "44px",
        // paddingRight: "10px",
        // marginBottom: "7px"

    },
    inputContainer: {
        paddingRight: "20px",
        color: "#4A4A4A",
        '& input': {
            fontSize: "16px",
            color: "#4A4A4A",
            padding: "15px"
            // background: "red",

        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: "3px solid #4A4A4A",
            borderRadius: "50px"
        },
        '& .MuiOutlinedInput-root': {
            background: "#fff",
            borderRadius: "50px"
        },
        // '&::placeholder':{

        // }
        [theme.breakpoints.down("md")]: {
            margin: "20px 0",
            width: "90vw",
            padding: "0"
        }
    },
    envolopIcon: {
        fontSize: "24px"
    },
    subscriptionButton: {

        background: "#137D27",
        color: "#fff",
        fontSize: "16px",
        textTransform: "capitalize",
        borderRadius: "50px",
        padding: "15px 50px",
        lineHeight: "18px",
        fontWeight: "500"
    },
    info: {
        width: "100%",
        margin: "24px 0",
        // minHeight: "200px",
        paddingBottom: "40px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>*': {
            flex: "1",
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    infoBox: {
        paddingTop: "40px ",

        textAlign: "center"
    },
    infoBoxContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8px "
    },
    infoIcon: {
        display: "inline-block",
        fontSize: "24px",
        // marginTop: "2px",
        // paddingRight: "10px"
    },
    infoPhoneIcon:{
        display: "inline-block",
        fontSize: "24px",
// flex:1
    },
    infoHeaderText: {
        fontSize: "24px",
        // lineHeight: "27px",
        fontWeight: "700",
        color: "#0D0D0D",
        padding: "0 14px"
    },
    infoSubHeaderText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: "#137D27"
    },
    footer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "20px",
        paddingTop: "20px",
        paddingBottom: "24px",
        // padding: " 0 30px ",
        borderBottom: "2px solid #09651A",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr 1fr"
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr 1fr"
        }
    },
    footerMainText: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "18px",
        color: "#0D0D0D",
    },
    // links: {
    //     display: "block",
    //     margin: "5px 0",
    //     // color: "4A4A4A",
    //     // fontSize: "16px",
    //     // fontWeight: "400",
    //     // lineHeight: "22px",
    //     // padding: "5px 0",
    //     '& .MuiLink-underlineHover:hover': {
    //         textDecoration: "none"
    //     }

    // },
    link: {
        display: "block",
        margin: "12px 0",
        color: "#4A4A4A",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px",
        '&:hover,&:active': {
            textDecoration: "auto",
            color: "#4A4A4A"
        },
        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
    links:{
textDecoration:"none"
    },
    policiesContainer: {
        paddingTop: "20px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column"
        }
    },
    socials: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            paddingBottom: "20px"
        }

    },
    socialText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: "#000"
    },
    socialIcons: {
        margin: "0 10px",
        fontSize: "18px",
        display: "inline-block",
        '&:last-child': {
            margin: " 0px",
        }
    },
    policiesText: {
        fontSize: "16px",
        lineHeight: "22px",

    }

}))
const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.main}>
            <div className={classes.mainContainer}>
                <div className={classes.subscriptionContainer}>
                    <div className={classes.subscriptionTextContainer}>
                        <FiGift className={classes.giftIcon} />
                        <div  className={classes.subscriptiontext}>Subscribe For Exciting Deals And Offers</div>
                    </div>
                  
                    <Email placeholder="Email" />
                    <div className={classes.subscriptionButtonContainer}>
                        <PrimaryButton title="Subscribe" style={{marginTop:0}} smallStyle={{marginTop:24}}/>
                    </div>
                </div>
                <div className={classes.info}>
                  
                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <BiPhone className={classes.infoPhoneIcon} />
                            <div className={classes.infoHeaderText} >Phone Number</div>
                        </div>
                        <div className={classes.infoSubHeaderText} >980253697</div>

                    </div>
                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <BiEnvelope className={classes.infoIcon} />
                            <div className={classes.infoHeaderText} >Email</div>
                        </div>
                        <div className={classes.infoSubHeaderText} >support@bookstore.com</div>

                    </div>

                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <GrLocation className={classes.infoIcon} />
                            <div className={classes.infoHeaderText} >Location</div>
                        </div>
                        <div className={classes.infoSubHeaderText} >Kupandole, lalitpur</div>

                    </div>

                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <AiOutlineQuestionCircle className={classes.infoIcon}/>
                            <div className={classes.infoHeaderText} >FAQ</div>
                        </div>
                        <div className={classes.infoSubHeaderText} >Vist FQA</div>

                    </div>


                </div>
                <div className={classes.footer}>
                    <div className={classes.footerContent}>
                        <div className={classes.footerMainText} >Categories</div>
                        <Link href="#" className={classes.links}>
                          Sunglass for mens
                        </Link>
                        <Link href="#" className={classes.links}>
                          Sunglass for womens
                        </Link>
                        <Link href="#" className={classes.links}>
                          Sunglass for kids
                        </Link>
                        <Link href="#" className={classes.links}>
                          Eyeglass for mens
                        </Link>
                        <Link href="#" className={classes.links}>
                          Eyeglass for womens
                        </Link>
                        <Link href="#" className={classes.links}>
                          Eyeglass for kids
                        </Link>
                    </div>
                    <div className={classes.footerContent}>
                        <div className={classes.footerMainText} >Brand</div>
                        <Link href="#" className={classes.links}>
                          Ray-ban
                        </Link>
                        <Link href="#" className={classes.links}>
                          Sunglass hut
                        </Link>
                        <Link href="#" className={classes.links}>
                          Okaley
                        </Link>

                    </div>
                    <div className={classes.footerContent}>
                        <div className={classes.footerMainText} >Useful</div>
                        <Link href="#" className={classes.links}>
                          Cart
                        </Link>
                        <Link href="#" className={classes.links}>
                          Profile
                        </Link>

                    </div>
                    <div className={classes.footerContent}>
                        <div className={classes.footerMainText} >Features</div>
                        <Link href="#" className={classes.links}>
                          Home try-on
                        </Link>
                        <Link href="#" className={classes.links}>
                          Virtual try-on
                        </Link>
                        <Link href="#" className={classes.links}>
                          Upload subscription
                        </Link>

                    </div>
                </div>
                <div className={classes.policiesContainer}>
                    <div className={classes.socials}>
                        <div className={classes.socialText}>@bookstore</div>
                        <FiInstagram className={classes.socialIcons} />
                        <RiFacebookCircleLine className={classes.socialIcons} />
                    </div>
                    <div >
                        <div className={classes.policiesText}>Privacy Policy Terms and Conditions of Use</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer