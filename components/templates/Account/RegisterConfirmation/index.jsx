import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import { colors } from '../../../../utils'
import Input from '../../../elements/Input'
import { Typography, Link } from '@mui/material'
import { emailRegex } from '../../../../utils'
import PrimaryButton from '../../../elements/PrimaryButton'
import SecondaryButton from '../../../elements/SecondaryButton'
import CodeBox from '../../../elements/CodeBox'
const useStyles = makeStyles(theme => ({
    registerConfirmation: {
        height: "90vh",
        marginTop: "10vh",
        display: "flex",
        justifyContent: "center",

    },
    registerConfirmationContainer: {
        width: "400px",
        height: "500px"
    },
    headerText: {
        fontSize: "40px",
        lineHeight: "46px",
        fontWeight: "700",
        color: "#000"
    },
    subTitle: {
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "400",
        color: "#000",
        marginTop: "10px",
        marginBottom: "30px"
    },
    form: {
        padding: "20px",
        backgroundColor: colors.background
    },
    buttonContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px"
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
        lineHeight: "18px",
        fontWeight: "500",
        textDecoration: "none",
        userSelect: "none",

        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
}))
const RegisterConfirmation = () => {
    const classes = useStyles()
    const [phoneFocus, setPhoneFocus] = useState(false)
    const [codeBox, setCodeBox] = useState(false)
    const [userData, setUserData] = React.useState({
        formData: {
            phone: {
                elementConfig: {
                    type: "number",
                    placeholder: "Email or Mobile number",
                    label: "Enter Code",
                    name: "phone",
                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                    // regex: emailRegex,
                    length: "10"
                }
            },
        }
    })

    const checkValidity = (values, rules) => {
        console.log(values, rules, "values")
        let isValid = true;
        if (rules.required) {
            isValid = values.trim() !== "" && isValid
        }
        if (rules.length) {
            isValid = values.length === 10 && isValid
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
        if (!disable)
            setCodeBox(true)

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
        <div className={classes.registerConfirmation}>
            <div className={classes.registerConfirmationContainer}>
                <Typography variant="h2" className={classes.headerText}>Confirmation Code</Typography>
                <Typography variant="subtitle1" className={classes.subTitle}>Please check your email for a message with your code. Your code is 6 numbers long.</Typography>
                <form onSubmit={formSubmitHandler} className={classes.form}>
                    {formDataArray.map((inputData, index) => {
                        return <Input name={inputData.formData.elementConfig.name}
                            label={inputData.formData.elementConfig.label}
                            type={inputData.formData.elementConfig.type}
                            required={inputData.formData.elementConfig.required}
                            placeholder={inputData.formData.elementConfig.placeholder}
                            focus={inputData.formData.focus}
                            value={inputData.formData.value}
                            valid={inputData.formData.valid}
                            blurHandler={blurHandler}
                            touched={inputData.formData.touched}
                            focusHandler={focusHandler}
                            changeHandler={changeHandler}
                            phoneFocus={phoneFocus}
                            fullWidth="true" />
                    })}
                    {codeBox && <CodeBox input={userData.formData.phone.value} />}
                    <div className={classes.buttonContainer}>
                        <SecondaryButton title="Cancel" />
                        <PrimaryButton title="Continue" />
                    </div>
                    <div className={classes.linkContainer}>
                        <Link href="#" className={classes.links}>
                          Didn't Get A Code?
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default RegisterConfirmation
