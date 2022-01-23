import React from 'react'
import { Typography, Button, Link } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'

const SecondaryButton = (props) => {
    const useStyles = makeStyles(theme => ({


        buttonContainer: {
            display: "flex",
            justifyContent: props.style ? props.style.justifyContent : "center",
            marginBottom: "30px",
            marginTop: "30px",
            marginRight: props.style.marginRight?props.style.marginRight: 0
        },
        button: {
            background: "transparent",
            borderRadius: "40px",
            padding: "12px 32px",
            color: props.style.color?props.style.color:colors.white,
            border: props.style.border?props.style.border:"2px solid #fff",
            width: props.style ? props.style.width : "100%",
            fontSize: "16px",
            lineHeight: "19px",
            outline: "none",
            fontWeight: "700",
            textTransform: "capitalize",
            '&.MuiButton-contained': {
                boxShadow: "none"
            }

        },

    }))
    const classes = useStyles()
    return (


        <div className={classes.buttonContainer}>
            <Button type="submit" variant="contained" className={classes.button}>{props.title}</Button>

        </div>

    )
}
export default SecondaryButton