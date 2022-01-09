import React from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Typography } from '@mui/material'
import { colors } from '../../../utils'

const CustomButton = (props) => {
    const useStyles = makeStyles(theme => ({
        button: {
            width: "50%",
            padding: "10px 0",
            fontSize: "16px",
            lineHeight: "22px",
            // fontWeight: "400",
            fontWeight: "500",
            color: "black",
            textTransform: "capitalize",
            background: props.active ? "#A8FFB8" : "#fff",
            borderRadius: props.left ? "4px 0 0 4px" : "0 4px 4px 0",
            '&.MuiButton-contained': {
                boxShadow: "none"
            },
            '&:hover': {
                backgroundColor: "#A8FFB8"
            }
            // paddingBottom: "20px"
        }
    }))
    const classes = useStyles()
    return (
        <Button variant="contained" onClick={() => props.onClickHandler(props.name)} className={classes.button}>{props.title}</Button>
    )
}

export default CustomButton
