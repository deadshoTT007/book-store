import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import Input from '@/components/elements/Input'
import SecondaryButton from '@/components/elements/SecondaryButton'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { emailRegex } from '@/utils/index'
const useStyles=makeStyles(theme=>({
    accountInfoContainer:{
        padding:"16px 40px",
        background:colors.mainGray,
    },
    accountText:{
        textAlign:'center',
        fontWeight:"500",
        fontSize:"20px",
        lineHeight:"24px",
        color:colors.black,
        margin:"16px 0",
        height:"40px",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    accountDetailsInputContainer:{
        padding:24,
        // paddingTop:0,
        borderRadius:4,
        background:colors.mainGray,
        marginTop:24
    }
}))
const AccountDetails = () => {
    const classes=useStyles()
    const [userData, setUserData] =useState({
        formData: {
            username: {
                elementConfig: {
                    type: "text",
                    placeholder: "Jhon doe",
                    label: "Fullname",
                    name: "username",
                    Icon: <PermIdentityOutlinedIcon className={classes.icon} />,
                    minWidth: "100%"

                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                style:{width:"50%"},
                validity: {
                    required:true,
                    minLength: 3
                }
            },
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "example@gmail.com",
                    label: "Email",
                    name: "email",
                    Icon: <MailOutlinedIcon className={classes.icon} />,
                },
                value: '',
                focus: null,
                valid: false,
                touched: false,
                style:{width:"50%"},
                validity: {
                    required: true,
                    regex: emailRegex
                }
            },
          
            phone: {
                elementConfig: {
                    type: "text",
                    placeholder: "9823456765",
                    label: "Phone Number",
                    name: "phone",
                    Icon:<LocalPhoneOutlinedIcon className={classes.icon}/>
                    // required: true,
                },
                value: '',
                valid: false,
                touched: false,
                style:{width:"50%"},
                validity: {
                    required: true,
                    regex: emailRegex,
                    length: "10"
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
        <div className={classes.accountDetailsInfoRight}>
        <div className={classes.accountInfoContainer}>
            <div className={classes.accountText}>My Account</div>
        </div>
        <div className={classes.accountDetailsInputContainer}>
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
                    style={inputData.formData.style}
                    fullWidth="true" />
            })}

        <SecondaryButton title="Save" parentStyle={{justifyContent:"flex-start"}} style={{color:'#8D8D8D',border:`1px solid #8D8D8D`,marginTop:24,}}/>
        </div>
    </div>
    )
}

export default AccountDetails
