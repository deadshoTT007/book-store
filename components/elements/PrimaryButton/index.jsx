import React from 'react'
import { Typography, Button, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'

const PrimaryButton = (props) => {
    const useStyles = makeStyles(theme => ({


        buttonContainer: {
            display: "flex",
            justifyContent:"center",
            // justifyContent: "center",
            // marginBottom: "0px",
            // marginTop: "30px",
...props.parentStyle,
[theme.breakpoints.down("md")]:{
    maxWidth:"100%"
}
        },
        button: {
            background: colors.primary,
            borderRadius: "50px",
            padding: "12px 32px",
            color: "#fff",
            // width: "100%",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "700",
            textTransform: "capitalize",
            ...props.style,
            '&:hover': {
                background: "#054A11"
            },
            '&:focus':{
                background:"#03380D"
            },
            '&.MuiButton-contained': {
                boxShadow: "none"
            },
            [theme.breakpoints.down('md')]: {
                ...props.smallStyle,
            }
        },

    }))
    const classes = useStyles()
    return (


        <div className={classes.buttonContainer}>
            <Button onClick={props.actionClick} type="submit" variant="contained" className={classes.button}>{props.title}</Button>

        </div>

    )
}
export default PrimaryButton