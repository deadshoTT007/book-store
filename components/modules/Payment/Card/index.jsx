import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Button, Link } from '@mui/material'
import { colors } from '../../../../utils'
import OrderConfirmation from '../../OrderConfirmation'
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Input from '../../../elements/Input'

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: colors.background,
        paddingTop:"24px",
        borderRadius:4,
        [theme.breakpoints.down('md')]:{
            padding:"16px"
        }

    },
    cardContainer: {
        padding: "24px 0px",
        paddingTop: "0px",
        margin: "0 24px",
    },
    inputContainer: {
        width: "100%",
        borderBottom: "1px solid #8D8D8D",
        paddingBottom: "24px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"

    }
}))

const Card = () => {
    const classes = useStyles()
    const [userData, setUserData] = React.useState({
        formData: {
            card: {
                elementConfig: {
                    type: "tel",
                    placeholder: "3432 3244 0894 5744",
                    label: "Card Number",
                    name: "card",
                    pattern: "[0-9\s]{13,19}",
                    Icon: <PaymentOutlinedIcon className={classes.icon} />,
                    minWidth: "100%"
                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                }
            },
            username: {
                elementConfig: {
                    type: "text",
                    placeholder: "eg. Jhon doe",
                    label: "Account holder name",
                    name: "username",
                    Icon: <PermIdentityIcon className={classes.icon} />,
                    minWidth: "100%"

                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    minLength: 3
                }
            },
            date1: {
                elementConfig: {
                    type: "date",
                    placeholder: "dd/mm/yyyy",
                    label: "Expire date",
                    name: "date1",
                    minWidth: "47%"

                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                }
            },
            date2: {
                elementConfig: {
                    type: "date",
                    placeholder: "dd/mm/yyyy",
                    label: "Expire date",
                    name: "date2",
                    minWidth: "47%"

                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                }
            },
        }
    });
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

        setUserData(() => {
            return { formData: updatedFormData }
        })
        console.log(updatedFormElement, "element")
    }

    const formDataArray = [];
    for (let key in userData.formData) {
        formDataArray.push({ id: key, formData: userData.formData[key] })
    }
    let disable = false;
    Object.values(userData.formData).forEach(val => val.valid === false && (disable = true))

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
    return (
        <div className={classes.card}>
            <div className={classes.cardContainer}>
                <form className={classes.from} onSubmit={formSubmitHandler}>
                    <div className={classes.inputContainer}>
                        {formDataArray.map((inputData, index) => {
                            return <Input name={inputData.formData.elementConfig.name}
                                label={inputData.formData.elementConfig.label}
                                type={inputData.formData.elementConfig.type}
                                Icon={inputData.formData.elementConfig.Icon}
                                required={inputData.formData.elementConfig.required}
                                placeholder={inputData.formData.elementConfig.placeholder}
                                // focus={inputData.formData.elementConfig.focus}
                                pattern={inputData.formData.elementConfig.pattern}
                                showPassword={inputData.formData.elementConfig.showPassword}
                                value={inputData.formData.value}
                                valid={inputData.formData.valid}
                                focus={inputData.formData.focus}
                                focusHandler={focusHandler}
                                blurHandler={blurHandler}
                                touched={inputData.formData.touched}
                                changeHandler={changeHandler}
                                minWidth={inputData.formData.elementConfig.minWidth}
                                fullWidth="true" />
                        })}
                    </div>
                    <OrderConfirmation />
                </form>
            </div>

        </div>
    )
}
export default Card
