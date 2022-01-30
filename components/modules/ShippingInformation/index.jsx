import React from 'react'
import Input from '@/components/elements/Input'
import { colors } from '@/utils/index'
import { makeStyles } from '@mui/styles'
import PrimaryButton from '@/components/elements/PrimaryButton'
import SecondaryButton from '@/components/elements/SecondaryButton'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { emailRegex } from '@/utils/index'
import { Link } from '@mui/material'
const useStyles=makeStyles(theme=>({
    root:{
flex:1,
[theme.breakpoints.down('md')]:{

}
    },
headerText:{
    fontSize:"20px",
    fontWeight:"500",
    color:colors.black,
    [theme.breakpoints.down('md')]:{
        textAlign:'center'
    }
},
linkContainer:{
    marginTop:'32px',
    display:"flex",
    alignItems:"center",
    marginBottom:"16px"
},
accoutnText:{
    fontSize:"16px",
    lineHeight:"22px",
    marginRight:"16px"
},
shippingContainer:{
    backgroundColor:colors.background,
    padding:"24px",
    [theme.breakpoints.down('md')]:{
        padding:"16px"
    }
},
link:{
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.black,
    marginTop:"24px",
    display:"none",
    [theme.breakpoints.down('md')]:{
        display:"flex",
        justifyContent:"center",
        textDecoration:"none"
    }
}
}))
const ShippingInformation = () => {
    const classes=useStyles()
    const [userData, setUserData] = React.useState({
        formData: {
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
            username: {
                elementConfig: {
                    type: "text",
                    placeholder: "eg. Jhon doe",
                    label: "Your Fullname",
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
            address: {
                elementConfig: {
                    type: "text",
                    placeholder: "Enter your street",
                    label: "Address",
                    name: "address",

                },
                value: '',
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
                }
            },
            city: {
                elementConfig: {
                    type: "text",
                    placeholder: "City",
                    label: "City",
                    name: "city",

                },
                value: '',
                valid: false,
                touched: false,
                style:{display:"inline-block",width:"49%",marginRight:"1%"},

                focus: null,
                validity: {
                    required: true,
                }
            },
            state: {
                elementConfig: {
                    type: "text",
                    placeholder: "State",
                    label: "State",
                    name: "state",

                },
                value: '',
                style:{display:"inline-block",width:"49%",marginLeft:"1%"},
                valid: false,
                touched: false,
                focus: null,
                validity: {
                    required: true,
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
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <div className={classes.headerText}>Shipping Information</div>
                <div className={classes.linkContainer}>
                    <div className={classes.accoutnText}>Already have account?</div>
<SecondaryButton title="Sign In" style={{marginTop:0,marginBottom:0,color:colors.black,border:`1px solid ${colors.black}`}}/>

                </div>
                <div className={classes.shippingContainer}>
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

<PrimaryButton title="Proceed to checkout" parentStyle={{justifyContent:"center"}} style={{marginTop:"24px"}}/>
<Link className={classes.link}>
    <a>Back to Cart</a>
</Link>

</div>
                
            </div>
            
        </div>
    )
}

export default ShippingInformation
