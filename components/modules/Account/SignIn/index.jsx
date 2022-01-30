import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import CustomButton from '../../../elements/CustomButton'
import { Typography, Grid, Modal, Link } from '@mui/material'
import AuthenticationModal from '../AuthenticationModal'
import { colors } from '../../../../utils'
import Input from '../../../elements/Input'
import { emailRegex } from '../../../../utils'
import { ImCross } from 'react-icons/im'
import PrimaryButton from '../../../elements/PrimaryButton'
import { BiEnvelope } from 'react-icons/bi'
import { RiEyeCloseLine } from 'react-icons/ri'
import { passwordRegex } from '../../../../utils'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


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
        width: "550px",
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
        padding: "24px",
        paddingTop: "24px",
        marginTop: "24px",
        backgroundColor: colors.background
    }

}))

const SignIn = () => {
    const classes = useStyles()

    const [userData, setUserData] = React.useState({
        formData: {
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "eg. johndoe",
                    label: "Username or Email",
                    name: "email",
                    Icon: <MailOutlineIcon className={classes.icon} />,
                },
                value: '',
                focus: null,
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    regex: emailRegex
                }
            },
            password: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                    label: "Password",
                    name: "password",
                    Icon: <RiEyeCloseLine />,
                },
                value: '',
                showPassword: false,
                focus: null,
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    regex: passwordRegex
                }
            }
        }
    });
    const iconClickHandler = (name) => {
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, [name]: { ...pre.formData[name], showPassword: !pre.formData[name].showPassword } } }
        })
    }
    const focusHandler = (name) => {
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, [name]: { ...pre.formData[name], focus: true } } }
        })
    }
    const blurHandler = (name) => {
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, [name]: { ...pre.formData[name], focus: false } } }
        })
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()

    }

    const checkValidity = (values, rules) => {
        console.log(values, rules, "values")
        let isValid = true;
        if (rules.required) {
            isValid = values.trim() !== "" && isValid
        }
        if (rules.minLength) {
            isValid = values.length >= 3 && isValid
        }
        if (rules.regex) {
            isValid = rules.regex.test(values) && isValid

        }

        return isValid;
    }

    const changeHandler = (e) => {
        const { value, name } = e.target;
        console.log(value, name, "input")
        console.log(value, name)
        const newState = { ...userData }
        const updatedFormData = { ...newState.formData }
        const updatedFormElement = { ...updatedFormData[name] }
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormData[name].validity)
        updatedFormData[name] = updatedFormElement
        // userData = updatedFormData;
        // setUserData(newStated)
        setUserData(() => {
            return { formData: updatedFormData }
        })
        console.log(updatedFormElement, "element")
    }

    const formDataArray = [];
    for (let key in userData.formData) {
        formDataArray.push({ id: key, formData: userData.formData[key] })
    }
    // console.log(formDataArray, "array")
    let disable = false;
    // let isDisable = Object.values(userData.formData).forEach(val => val.valid && (disable = false))
    Object.values(userData.formData).forEach(val => val.valid === false && (disable = true))

    return (
        <>
            <form onSubmit={formSubmitHandler} className={classes.formContainer}>
                <div className={classes.email}>

                    {formDataArray.map((inputData, index) => {
                        return <Input name={inputData.formData.elementConfig.name}
                            label={inputData.formData.elementConfig.label}
                            type={inputData.formData.elementConfig.type}
                            Icon={inputData.formData.elementConfig.Icon}
                            required={inputData.formData.elementConfig.required}
                            placeholder={inputData.formData.elementConfig.placeholder}
                            // focus={inputData.formData.elementConfig.focus}
                            showPassword={inputData.formData.elementConfig.showPassword}
                            value={inputData.formData.value}
                            valid={inputData.formData.valid}
                            blurHandler={blurHandler}
                            touched={inputData.formData.touched}
                            focusHandler={focusHandler}
                            changeHandler={changeHandler}
                            fullWidth="true" />
                    })}
                </div>
                <PrimaryButton title="Sign In" />
                <div className={classes.linkContainer}>
                    <Link href="#" className={classes.links}>
                        <a className={classes.link}>Forgot Password?</a>
                    </Link>
                </div>
            </form>
            <AuthenticationModal title="Login with" />
        </>
    )

}
export default SignIn