import React from 'react'
import { Typography, Button, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../../utils'

const PrimaryButton = (props) => {
    const useStyles = makeStyles(theme => ({


        buttonContainer: {
            display: "flex",
            justifyContent: props.style ? props.style.justifyContent : "center",
            // justifyContent: "center",
            marginBottom: "30px",
            marginTop: "30px"

        },
        button: {
            background: colors.primary,
            borderRadius: "50px",
            padding: "15px 30px",
            color: "#fff",
            width: props.style ? props.style.width : "100%",
            // width: "100%",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: "700",
            textTransform: "capitalize",
            '&:hover': {
                background: "green"
            },
            '&.MuiButton-contained': {
                boxShadow: "none"
            },
            [theme.breakpoints.down('xs')]: {
                width: (props.style && props.style.width) ? "50%" : "100%"
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
export default PrimaryButton