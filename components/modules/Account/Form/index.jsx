import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import CustomButton from '../../../elements/CustomButton'
import { Typography, Grid, Modal, Link } from '@material-ui/core'
import AuthenticationModal from '../../../elements/AuthenticationModal'
import { colors } from '../../../../utils'
import Input from '../../../elements/Input'
import { emailRegex } from '../../../../utils'
import { ImCross } from 'react-icons/im'
import PrimaryButton from '../../../elements/PrimaryButton'
import { BiEnvelope } from 'react-icons/bi'
import { RiEyeCloseLine } from 'react-icons/ri'
import { passwordRegex } from '../../../../utils'
import Register from '../Register'
import SignIn from '../SignIn'

const useStyles = makeStyles(theme => ({
    modal: {
        // margin: "0 auto",
        width: "100vw",
        // background: "red",
        minHeight: "100vh",
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        [theme.breakpoints.down("sm")]: {
            alignItems: "start"
        }
    },
    main: {
        padding: "40px ",
        width: "520px",
        minHeight: "80vh",
        backgroundColor: "#fff",
        borderRadius: "8px",
        position: "relative"
    },
    mainRegister: {
        padding: "40px ",
        width: "780px",
        minHeight: "80vh",
        backgroundColor: "#fff",
        borderRadius: "8px",
        position: "relative"
    },
    crossIcon: {
        position: "absolute",
        top: "20px",
        right: "20px",
        cursor: "pointer"
    },
    mainContainer: {
        margin: "0 auto",
        width: "100%",
        // minHeight: "40vh",
        // background: "red",
        height: "10%0vh"
    },
    linkContainer: {
        // margin: "0 auto"
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        // paddingBottom: "30px"
    },
    links: {
        color: colors.primary,
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        textDecoration: "none",
        userSelect: "none",

        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },

    headerContainer: {
        padding: "0 60px",
        // background: "blue",
    },
    signinContainer: {
        backgroundColor: "#F5FFF7",
        padding: "20px 20px",
        // height: "100%",

    },
    headerText: {
        fontSize: "40px",
        lineHeight: "46px",
        fontWeight: "700",
        color: "#000",
        marginBottom: "10px",
        textAlign: "center"

    },
    subHeaderText: {
        display: "block",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "400",
        textAlign: "center"
    },
    formContainer: {
        padding: " 0 40px",
        [theme.breakpoints.down('xs')]: {
            padding: "0"
        }
    },
    label: {
        fontSize: "16px",
        lineHeight: "18px",
        fontWeight: "500",
        marginBottom: "20px",
        // background: "red",
        display: "block"
    },
    form: {
        padding: "20px",
        paddingTop: "30px",
        marginTop: "20px",
        backgroundColor: colors.background
    }

}))
const Form = () => {
    const classes = useStyles()
    const [signIn, setSignIn] = useState(true)
    const [register, setRegister] = useState(false)
    const [open, setOpen] = useState(true)
    const handleClose = () => {
        setOpen(false)
    }
    const onClickHandler = (name) => {
        console.log(name, "aa")
        if (name === "signIn") {
            setSignIn(true)
            setRegister(false)
        } else {
            setSignIn(false)
            setRegister(true)
        }
    }
    return (
        <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            onClose={handleClose}
            open={open}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
        // container={() => rootRef.current}
        >
            <div className={`${register ? classes.mainRegister : classes.main}`}>
                <div className={classes.mainContainer}>
                    <ImCross className={classes.crossIcon} onClick={handleClose} />
                    <Typography variant="h3" className={classes.headerText}>Welcome To
                        Chasma Ghar</Typography>
                    <Typography variant="p" className={classes.subHeaderText}>Best place to find personalize and high quality eyewears products.
                    </Typography>
                    <div className={classes.form}>
                        <CustomButton onClickHandler={onClickHandler} left={true} active={signIn} name="signIn" title="Sign In" />
                        <CustomButton onClickHandler={onClickHandler} right={true} active={register} name="register" title="Register" />
                        {register && <Register />}
                        {signIn && <SignIn />}

                    </div>

                </div>


            </div>
        </Modal >


    )
}
export default Form
