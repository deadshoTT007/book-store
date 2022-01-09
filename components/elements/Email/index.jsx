import React from 'react'
import { makeStyles } from "@mui/styles"
import { Typography, Button, Link, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import { BiEnvelope } from 'react-icons/bi'


const Email = (props) => {
    const useStyles = makeStyles(theme => ({

        inputContainer: {
            width: props.fullWidth ? "100%" : "20vw",
            paddingRight: "20px",
            paddingTop: props.paddingTop ? props.paddingTop : "0",
            color: "#4A4A4A",
            '& input': {
                fontSize: "16px",
                color: "#4A4A4A",
                padding: "15px"
                // background: "red",

            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: "2px solid #4A4A4A",
                borderRadius: "50px"
            },
            '& .MuiOutlinedInput-root': {
                background: "#fff",
                borderRadius: "50px"
            },
            // '&::placeholder':{

            // }
            [theme.breakpoints.down("sm")]: {
                margin: "20px 0",
                width: "90vw",
                padding: "0"
            }
        },
        envolopIcon: {
            fontSize: "24px"
        },
    }))


    const classes = useStyles()
    return (
        <div className={classes.emailContainer}>
            <FormControl variant="outlined" className={classes.inputContainer}>
                <OutlinedInput
                    placeholder={props.placeholder}
                    type="email"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton

                                edge="end"
                            >
                                <BiEnvelope className={classes.envolopIcon} />
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
        </div>
    )
}
export default Email