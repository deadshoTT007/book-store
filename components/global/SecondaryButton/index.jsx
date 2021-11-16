import React from 'react'
import { Typography, Button, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../utils'

const SecondaryButton = (props) => {
    const useStyles = makeStyles(theme => ({


        buttonContainer: {
            display: "flex",
            justifyContent: props.style ? props.style.justifyContent : "center",
            marginBottom: "30px",
            marginTop: "30px"

        },
        button: {
            background: "transparent",
            borderRadius: "50px",
            padding: "15px 30px",
            color: colors.black,
            border: "3px solid #000",
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