import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
const Divider = (props) => {
    const useStyles=makeStyles(theme=>({
    divider:{
        height:"1px",
        background:colors.lightGray,
        ...props.style
    }
    }))
    const classes=useStyles()
    return (
        <div className={classes.divider}>
            
        </div>
    )
}

export default Divider
