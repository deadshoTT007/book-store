import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'

const IconText = (props) => {
    const useStyles=makeStyles(theme=>({
        iconContainer:{
            marginTop:36,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            textAlign:'center',
        ...props.style
            // background:"red",
            
        },
        iconText:{
            fontSize:"16px",
            lineHeight:'22px',
            color:colors.black,
        },
        icon:{
            fontSize:"12px",
            marginLeft:"9px"
        }
    }))
    const classes=useStyles()
    const {title,icon}=props
    return (
        <div className={classes.iconContainer}>
        <div className={classes.iconText}>{title}</div>
        {icon}
    </div>

    )
}

export default IconText
