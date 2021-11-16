import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import PrimaryButton from '../../global/PrimaryButton'
import { colors } from '../../utils'
const useStyles = makeStyles(theme => ({
    codeBox: {
        padding: "10px",
        background: "#fff",
        marginTop: "20px"
    },
    headerText: {
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        color: colors.black
    },
    codeText: {
        fontSize: "12px",
        lineHeight: "16px",
        fontWeight: "400",
        color: colors.black
    },

}))

const CodeBox = (props) => {
    const { input } = props
    console.log(input, "inn")
    let a = input;
    var encriptedInput = a.substr(0, 2) + "******" + a.substr(-2);
    const classes = useStyles()
    return (
        <div className={classes.codeBox}>
            <Typography variant="subtitle1" className={classes.headerText}>   We sent your code to:   </Typography>
            <Typography variant="subtitle2" className={classes.codeText}>{encriptedInput}</Typography>

        </div>
    )
}
export default CodeBox
