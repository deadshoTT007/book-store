import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { colors } from '../../utils'
import Input from '../../global/Input'
import { Typography, Link } from '@material-ui/core'
import { emailRegex } from '../../utils'
import PrimaryButton from '../../global/PrimaryButton'
import SecondaryButton from '../../global/SecondaryButton'
import CodeBox from '../CodeBox'
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
    }
}))
const ForgotPassword = () => {
    const classes = useStyles()
    const [phoneFocus, setPhoneFocus] = useState(false)
    const [codeBox, setCodeBox] = useState(false)
    const [userData, setUserData] = React.useState({
        formData: {
            phone: {
                elementConfig: {
                    type: "number",
                    placeholder: "Email or Mobile Number",
                    label: "Email or Mobile Number",
                    name: "phone",
                    required: true,
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    regex: emailRegex,
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
        setPhoneFocus(true)
    }
    const blurHandler = (name) => {
        setPhoneFocus(false)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        setPhoneFocus(false)
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
                <Typography variant="h2" className={classes.headerText}>Find your Account</Typography>
                <Typography variant="subtitle1" className={classes.subTitle}>Please check your email for a message with your code. Your code is 6 numbers long.</Typography>
                <form onSubmit={formSubmitHandler} className={classes.form}>
                    {formDataArray.map((inputData, index) => {
                        return <Input name={inputData.formData.elementConfig.name}
                            label={inputData.formData.elementConfig.label}
                            type={inputData.formData.elementConfig.type}
                            required={inputData.formData.elementConfig.required}
                            placeholder={inputData.formData.elementConfig.placeholder}
                            // focus={inputData.formData.elementConfig.focus}
                            value={inputData.formData.value}
                            valid={inputData.formData.valid}
                            blurHandler={blurHandler}
                            touched={inputData.formData.touched}
                            focusHandler={focusHandler}
                            changeHandler={changeHandler}
                            phoneFocus={phoneFocus}
                            fullWidth="true" />
                    })}
                    {codeBox && <CodeBox />}
                    <div className={classes.buttonContainer}>
                        <SecondaryButton title="Cancel" />
                        <PrimaryButton title="Find" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default ForgotPassword
