import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import Input from '@/components/elements/Input'
import SecondaryButton from '@/components/elements/SecondaryButton'
import PrimaryButton from '@/components/elements/PrimaryButton'
import { emailRegex } from '@/utils/index'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const useStyles=makeStyles(theme=>({
main:{
padding:"24px",
background:colors.background,
margin:"24px 0",

},
mainContainer:{
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    gridColumnGap:"24px",
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns:"1fr"
    }
},
buttonContainer:{
    display:"flex",
    justifyContent:"flex-end",
    marginTop:'24px'
}
}))
const NewAddressBook = (props) => {
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
                validity: {
                    required: true,
                    regex: emailRegex
                }
            },
            country:{
                elementConfig: {
                    type: "text",
                    placeholder: "Nepal",
                    label: "Country",
                    name: "country",
                    Icon:<KeyboardArrowDownOutlinedIcon className={classes.icon}/>
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                }
            },
            state:{
                elementConfig: {
                    type: "text",
                    placeholder: "Lalitpur",
                    label: "State",
                    name: "state",
                    Icon:<KeyboardArrowDownOutlinedIcon className={classes.icon}/>
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                }
            },
            district:{
                elementConfig: {
                    type: "text",
                    placeholder: "Lalitpur",
                    label: "District",
                    name: "district",
                    Icon:<KeyboardArrowDownOutlinedIcon className={classes.icon}/>
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                }
            },
            street:{
                elementConfig: {
                    type: "text",
                    placeholder: "Kupondole",
                    label: "Street",
                    name: "street",
                    Icon:<KeyboardArrowDownOutlinedIcon className={classes.icon}/>
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                }
            },
            address:{
                elementConfig: {
                    type: "text",
                    placeholder: "Kupondole",
                    label: "Address",
                    name: "address",
                    Icon:<KeyboardArrowDownOutlinedIcon className={classes.icon}/>
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
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
                validity: {
                    required: true,
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
        <div className={classes.main}>
            <div className={classes.headerText}>Add new address</div>
            <div className={classes.mainContainer}>
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

            </div>
            <div className={classes.buttonContainer}>
                <SecondaryButton actionClick={props.closeAddressBookHandler} title="Cancel" style={{marginRight:"24px"}}/>
                <PrimaryButton actionClick={props.closeAddressBookHandler} title="Save"/>
            </div>
        </div>
    )
}

export default NewAddressBook
