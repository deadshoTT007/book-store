import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { colors } from '../../../../utils'
import Input from '../../../elements/Input'
import { Typography, Link, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import PrimaryButton from '../../../elements/PrimaryButton'
import SecondaryButton from '../../../elements/SecondaryButton'

const useStyles = makeStyles(theme => ({
    recovery: {
        height: "90vh",
        marginTop: "10vh",
        display: "flex",
        justifyContent: "center",

    },
    recoveryContainer: {
        width: "450px",
        height: "500px"
    },
    headerText: {
        fontSize: "40px",
        lineHeight: "46px",
        fontWeight: "700",
        color: "#000"
    },
    subTitle: {
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "400",
        color: "#000",
        marginTop: "10px",
        marginBottom: "30px"
    },
    form: {
        padding: "20px",
        backgroundColor: colors.background
    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
    },
    profileImg: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginRight: "10px"
    },
    methodText: {
        display: "block",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        color: "#000",
        marginTop: "16px"
    },
    buttonContainer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px"
    },
    select: {
        '& .PrivateRadioButtonIcon-root-14.PrivateRadioButtonIcon-checked-16 .PrivateRadioButtonIcon-layer-15': {
            color: colors.primary
        },
        '& .MuiSvgIcon-root': {
            color: colors.primary
        },

        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: colors.primary
        },
        '& .MuiRadio-colorSecondary.Mui-checked:hover': {
            borderColor: colors.primary
        }
    }

}))
const RecoveryMethod = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState({ input: "kg******gmail.com", type: "email" });
    const handleChange = (e) => {
        console.log(e, "event")
        setValue({ input: e.target.value, type: "" });
    };
    // const onClickHandler = (e) => {
    //     const { value, name } = e.target;
    //     setValue({ input: value, type: name })
    //     console.log(name, "evenn")
    // }
    console.log(value, "eventttt")

    return (
        <div className={classes.recovery}>
            <div className={classes.recoveryContainer}>
                <Typography variant="h2" className={classes.headerText}>Reset your password</Typography>
                <Typography variant="subtitle1" className={classes.subTitle}>
                    How do you want to get the code to reset your password?</Typography>
                <form className={classes.form}>
                    <div className={classes.imageContainer}>
                        <img className={classes.profileImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSGVuStFxj_Dnv9V9qlzkor22IRPIglGkVA&usqp=CAU" />
                        <Typography variant="span" className={classes.profileText}>John Doe</Typography>
                    </div>
                    <FormControl component="fieldset">
                        <Typography variant="h6" className={classes.methodText}>Send code via email</Typography>
                        <RadioGroup className={classes.select} aria-label="recoveryType" name="recoveryType" value={value.input} onChange={handleChange}>
                            <FormControlLabel name="email" value="kg******gmail.com" control={<Radio />} label="kg******gmail.com" />
                            <FormControlLabel name="text" value="+977-98******586" control={<Radio />} label="+977-98******586" />
                        </RadioGroup>
                    </FormControl>
                    <div className={classes.buttonContainer}>
                        <SecondaryButton title="Not You?" />
                        <PrimaryButton title="Continue" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RecoveryMethod
