import React from 'react'
import { makeStyles } from "@mui/styles"
import { Typography, Grid, Button } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { SiFacebook } from 'react-icons/si'

const useStyles = makeStyles(theme => ({
    modal: {
        marginTop: "20px ",
        backgroundColor: "#fff",
        padding: "20px"

    },
    headerText: {
        paddingBottom: "20px ",
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        textAlign: "center"
    },
    socialContainer: {
        // margin: "0 auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",

        // height: "200px",
        paddingBottom: "20px",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",

        }
    },
    primaryButtonContainer: {
        width: "100%",
        height: "46px",
        border: "1px solid #C4C4C4",
        flexBasis: "47%",
        marginLeft: "1.5%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down('xs')]: {
            margin: "10px 0",
            maxHeight: "60px"
        }
        // '& .MuiGrid-grid-md-6': {
        //     flexBasis: "44%",
        //     marginLeft: "1.5%",
        //     backgroundColor: "red",

        // },
        // [theme.breakpoints.up('md')]: {
        //     // paddingRight: "1rem"
        //     // maxWidth: "46%",

        // }

    },
    socialButton: {
        width: "100%",
        padding: "2rem 0",
        color: "#fff",
        borderRadius: '0',
        boxShadow: "none",
    },

    secondaryButtonContainer: {
        width: "100%",
        height: "46px",
        border: "1px solid #C4C4C4",
        flexBasis: "47%",
        marginRight: "1.5%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // [theme.breakpoints.up('md')]: {
        //     '& .MuiGrid-grid-md-6': {

        //         // paddingRight: "1rem"
        //         // maxWidth: "46%",

        //         flexBasis: "44%",
        //     }
        // }
        [theme.breakpoints.down('xs')]: {
            margin: "10px 0",
            maxHeight: "60px"

        }
    },
    primaryButton: {
        background: "#fff"

        // backgroundColor: "#3B5999",
        // '&:hover': {
        //     backgroundColor: "#1966d1"
        // }
    },
    optionsText: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        color: "#000000",
        textTransform: "capitalize",
        marginTop: "1%"

    },
    secondaryButton: {
        background: "#fff"
        // background: colors.secondaryColor,
        // paddingLeft: "1rem",
        // '&:hover': {
        //     backgroundColor: "#ba0921"
        // }
    },
    icon: {
        display: "inline-block",
        fontSize: "20px",
        color: "#1961A5",
        marginRight: "10px"
    },
    google: {
        fontSize: "24px",
        marginRight: "10px"

    }

}))
const AuthenticationModal = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            <Typography variant="h2" className={classes.headerText}>{props.title}</Typography>
            <Grid container className={classes.socialContainer}>

                {/* <Grid items xs={12} md={6} className={classes.secondaryButtonContainer}>
                    <Button variant="contained" className={`${classes.socialButton}  ${classes.secondaryButton}`}  >
                        <FcGoogle className={`${classes.icon} ${classes.google}`} />
                        <Typography variant="span" className={classes.optionsText}>Sign In</Typography>
                    </Button>
                </Grid> */}
                <Grid item xs={12} md={6} className={classes.secondaryButtonContainer} >
                    <Button variant="contained" className={`${classes.socialButton}  ${classes.primaryButton}`}  >
                        <FcGoogle className={`${classes.icon} ${classes.icon}`} />
                        <Typography variant="span" className={classes.optionsText}>Google</Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} className={classes.primaryButtonContainer} >
                    <Button variant="contained" className={`${classes.socialButton}  ${classes.primaryButton}`}  >
                        <SiFacebook className={`${classes.icon} ${classes.icon}`} />
                        <Typography variant="span" className={classes.optionsText}>Facebook</Typography>
                    </Button>
                </Grid>
            </Grid>

        </div>
    )
}
export default AuthenticationModal