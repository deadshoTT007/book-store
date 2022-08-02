import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import CustomButton from '../../../elements/CustomButton'
import { Typography, Grid, Modal, Link } from '@mui/material'
import AuthenticationModal from '../AuthenticationModal'
import { colors } from '../../../../utils'
import Input from '../../../elements/Input'
import { emailRegex } from '../../../../utils'
import PrimaryButton from '../../../elements/PrimaryButton'
import { BiEnvelope } from 'react-icons/bi'
    import { RiEyeCloseLine } from 'react-icons/ri'
import { passwordRegex } from '../../../../utils'
import { BsPerson } from 'react-icons/bs'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useSelector, useDispatch } from 'react-redux'
import { register } from '@/store/actions/auth'
import { useRouter } from 'next/router'


const useStyles = makeStyles(theme => ({
    inputContainer: {
        // display: "grid",
        // gridTemplateColumns: "1fr 1fr",
        // gridGap: "20px",
        // [theme.breakpoints.down('xs')]: {
        //     gridTemplateColumns: "1fr",
        //     gridGap: "0px"
        // }
    },
    linkContainer: {
        // margin: "0 auto"
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop:16
        // paddingBottom: "30px"
    },
    links: {
        color: colors.primary,
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        textDecoration: "none",
        userSelect: "none",
        marginLeft: "5px",

        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
    linkText: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400"
    },


}))
export const Register = ({id}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const router = useRouter()
    const token = useSelector(state=>state.auth.token)
    console.log(token,"ttoken")
    const [userData, setUserData] = React.useState({
        formData: {
            username: {
                elementConfig: {
                    type: "text",
                    placeholder: "eg. johndoe",
                    label: "Your Full Name",
                    name: "username",
                    Icon: <PermIdentityIcon className={classes.icon} />,
                    focus: null
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    minLength: 3
                }
            },
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "eg. example@gmail.com",
                    label: "Email",
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
            password1: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                    label: "Password",
                    name: "password1",
                    Icon: <RiEyeCloseLine className={classes.icon} />,

                },
                value: '',
                showPassword: false,
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                    regex: passwordRegex,
                    check: true,

                }
            },
            password2: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                    label: "Confirm Password ",
                    name: "password2",
                    Icon: <RiEyeCloseLine className={classes.icon} />,
                },
                value: '',
                focus: null,
                valid: false,
                touched: false,
                showPassword: false,
                validity: {
                    required: true,
                    reEnterPassword: true,
                    check: true,

                }
            },
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

  
    
    console.log(userData,"data")
    const signUpHandler = async() => {
        const username = userData.formData.username.value;
        const email = userData.formData.email.value;
        const password = userData.formData.password1.value;

      await  dispatch(register(username,email,password,routerPushHandler,id))
    }


    // if(token) router.push('/')

    const checkValidity = (values, rules, name) => {
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
        if (rules.reEnterPassword) {
            if (name === "password2") {
                isValid = (values == userData.formData.password1.value) && isValid;

            }
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
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormData[name].validity, name)
        updatedFormData[name] = updatedFormElement
        setUserData(() => {
            return { formData: updatedFormData }
        })
        console.log(updatedFormElement, "element")
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
    }

    const formDataArray = [];
    for (let key in userData.formData) {
        formDataArray.push({ id: key, formData: userData.formData[key] })
    }

    let disable = false;
    Object.values(userData.formData).forEach(val => val.valid === false && (disable = true))

    console.log(disable,"disable")

    return (
        <div className={classes.mainContainer}>

            <div className={classes.form}>

                <AuthenticationModal title="Register with:" />
                <form onSubmit={formSubmitHandler} className={classes.formContainer} >
                    <div className={classes.inputContainer}>
                        {formDataArray.map((inputData, index) => {
                            return <Input name={inputData.formData.elementConfig.name}
                                label={inputData.formData.elementConfig.label}
                                type={inputData.formData.elementConfig.type}
                                Icon={inputData.formData.elementConfig.Icon}
                                required={inputData.formData.elementConfig.required}
                                placeholder={inputData.formData.elementConfig.placeholder}
                                focus={inputData.formData.focus}
                                showPassword={inputData.formData.showPassword}
                                value={inputData.formData.value}
                                valid={inputData.formData.valid}
                                touched={inputData.formData.touched}
                                inputData={inputData}
                                focusHandler={focusHandler}
                                changeHandler={changeHandler}
                                blurHandler={blurHandler}
                                iconClickHandler={iconClickHandler}
                                fullWidth="true" />
                        })}
                    </div>
                    <PrimaryButton disableState={disable} actionClick={signUpHandler} style={{ width:"100%",marginTop:24 }} title="Register" />
                    <div className={classes.linkContainer}>
                        <Typography variant="span" className={classes.linkText}>Already have account?</Typography>
                        Login
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Register