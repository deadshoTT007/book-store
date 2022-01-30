import React from 'react'
import { makeStyles } from "@mui/styles"
import { Typography, FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material'


const Input = (props) => {
    const useStyles = makeStyles(theme => ({
        mainContainer: {
            paddingTop: "24px",
            minWidth: props.minWidth ? props.minWidth : null,
            '&:first-child':{
                paddingTop:0
            },
            ...props.style


        },

        inputContainer: {
            width:'100%',
            // paddingRight: "20px",
            marginTop: "16px ",
            paddingTop: props.paddingTop ? props.paddingTop : "0",
            color: "#4A4A4A",
            '& input': {
                fontSize: "16px",
                color: "#4A4A4A",
                padding: "15px",
                opacity:'1',
                // background: "red",
                "&.css-24rejj-MuiInputBase-input-MuiOutlinedInput-input":{
                    fontSize: "16px",
                    color: "#4A4A4A",
                    padding: "15px"
                },
            },
            
            '& .PrivateNotchedOutline-legend-191': {
                display: "none"
            },
            '& .PrivateNotchedOutline-legend-24': {
                display: "none"
            },
            '& .PrivateNotchedOutline-legend-50': {
                display: "none"
            },
            '& .PrivateNotchedOutline-legend-16 ': {
                display: "none"
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: "3px solid #4A4A4A",
                borderRadius: "50px"
            },
            '& .PrivateNotchedOutline-legend-18': {
                display: "none",
            },
            '& .PrivateNotchedOutline-legend-40': {
                display: "none",
            },
            '& .PrivateNotchedOutline-legend-45': {
                display: "none"
            },
            '& .MuiOutlinedInput-root': {
                background: "#fff",
                borderRadius: "50px",
                width:"100%"
            },
            // '&::placeholder':{

            // }
            [theme.breakpoints.down("sm")]: {
                marginTop: "20px 0",
                width: "100%",
                padding: "0"
            }
        },
        icon: {
            fontSize: "24px"
        },
        labelContainer: {
            display: "flex",
        },
        label: {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "19px",
            marginRight: "5px",
            marginTop: "0.6%"
        },
        required: {
            color: "red",
            fontSize: "20px"
        },
        input: {
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "400",
            color: "#4A4A4A",
            '&[type=number]': {
                '-moz-appearance': 'textfield',
            },
            '&::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '&::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },

        },
        warning: {
            marginTop: "5px",
            fontSize: "12px",
            color: "red"
        }
    }))


    const classes = useStyles()
    const { name, type, Icon, pattern, iconClickHandler, focus, showPassword, focusHandler, phoneFocus, blurHandler, value, valid, inputData, touched, required, placeholder, emailFocus, passwordFocus, label, fullWidth, changeHandler, paddingTop } = props
    console.log(focus, "focus")
    return (
        <div className={classes.mainContainer}>
            <div className={classes.labelContainer}>
                <label className={classes.label}>{label}</label>
                <Typography varaint="span" className={classes.required}>{required && "*"}</Typography>
            </div>
            <FormControl variant="outlined" className={classes.inputContainer}>
                <OutlinedInput
                    pattern={pattern && pattern}
                    className={classes.input}
                    placeholder={placeholder}
                    type={showPassword ? "text" : type}
                    name={name}
                    required
                    autoComplete="off"

                    value={value}
                    onFocus={() => focusHandler(name)}
                    onBlur={() => blurHandler(name)}
                    onChange={(e) => props.changeHandler(e, name)}
                    endAdornment={
                        Icon &&
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => iconClickHandler(name)}
                                edge="end"
                            >
                                {Icon}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
            {/* {(touched && value.length == 0) && <Typography varaiant="span" className={classes.warning}>Field cannot be empty</Typography>} */}
            {(touched && !focus && value.length == 0) && <Typography varaiant="span" className={classes.warning}>Field cannot be empty</Typography>}
            {(touched && !focus && !valid && name === "email" && value.length > 0) && <Typography varaiant="span" className={classes.warning}>Email is not valid</Typography>}
            {(touched && !focus && emailFocus && !valid && name === "password" && value.length > 0) && <Typography varaiant="span" className={classes.warning}> "Password should have minimum six characters, at least one letter and one number"</Typography>}
            {(touched && !focus && !valid && name === "username" && value.length > 0) && <Typography varaiant="span" className={classes.warning}> "Username should be atleast 3 characters"</Typography>}
            {(touched && !focus && !valid && name === "password1" && value.length > 0) && <Typography varaiant="span" className={classes.warning}> "Password should have minimum six characters, at least one letter and one number"</Typography>}
            {(touched && !focus && !valid && name === "password2" && value.length > 0) && <Typography varaiant="span" className={classes.warning}> "Password Didn't match"</Typography>}
            {(touched && !focus && !valid && name === "phone") && <Typography varaiant="span" className={classes.warning}> "Mobile number should be off 10 numbers long"</Typography>}

        </div>
    )
}
export default Input