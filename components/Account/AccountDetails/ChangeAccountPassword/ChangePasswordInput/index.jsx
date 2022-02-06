import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import SecondaryButton from '@/components/elements/SecondaryButton'
import Input from '@/components/elements/Input'
import { passwordRegex } from '@/utils/index'
import { RiEyeCloseLine } from 'react-icons/ri'

const useStyles=makeStyles(theme=>({
mainCOntainer:{
    padding:"24px",
    borderRadius:4,
    background:colors.background,
    margin:"24px 0"
},
headerText:{
    fontSize:20,
    lineHeight:"24px",
    color:colors.black,
    marginBottom:8
},
descriptionText:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black
},
buttonContainer:{
    display:"flex",
    marginTop:24
},

}))
const ChangePasswordInput = (props) => {
    const classes=useStyles()
    const [userData, setUserData] = React.useState({
        formData: {
            password1: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                    label: "New password",
                    name: "password1",
                    Icon: <RiEyeCloseLine className={classes.icon} />,

                },
                value: '',
                showPassword: false,
                valid: false,
                touched: false,
                focus: null,
                style:{width:"50%"},
                validity: {
                    required: true,
                    regex: passwordRegex,
                    check: true,

                }
            },
            password2: {
                elementConfig: {
                    type: "password",
                    placeholder: "Confirm Password",
                    label: "Confirm password ",
                    name: "password2",
                    Icon: <RiEyeCloseLine className={classes.icon} />,
                },
                value: '',
                focus: null,
                style:{width:"50%"},
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

    return (
        <div className={classes.mainCOntainer}>
            <div className={classes.headerText}>Enter new password</div>
            <div className={classes.descriptionText}>Pass must contains at least 8 character, and a numbers.</div>
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
                                style={inputData.formData.style}
                                changeHandler={changeHandler}
                                blurHandler={blurHandler}
                                iconClickHandler={iconClickHandler}
                                fullWidth="true" />
                        })}
                    </div>
                    <div className={classes.buttonContainer}>
                        <SecondaryButton actionClick={props.changePasswordHandler} title="Cancel" style={{marginRight:'24px'}}/>
                        <PrimaryButton actionClick={props.changePasswordHandler} title="Continue" />
                    </div>
            
        </div>
    )
}

export default ChangePasswordInput
