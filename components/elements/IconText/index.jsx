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
        ...props.style,
        userSelect:"none",
        cursor:"pointer",
        "&:hover":{
            color:colors.primary
        }
       
            // background:"red",
            
        },
        iconText:{
            fontSize:"16px",
            lineHeight:'22px',
            color:colors.black,
            "&:hover":{
                color:colors.primary
            }
    
        },
        activeIconText:{
            fontSize:"16px",
            lineHeight:'22px',
            color:colors.primary,
            "&:hover":{
                color:colors.primary
            }

        },
        icon:{
            fontSize:"12px",
            marginLeft:"9px"
        }
    }))
    const classes=useStyles()
    const {title,icon,actionClick}=props
    console.log(props.name,props.value,"value")
    return (
        <div onClick={props.actionClick} className={classes.iconContainer}>
        <div className={`${props.name==props.value ? classes.activeIconText:classes.iconText }`}>{title}</div>
        {icon}
    </div>

    )
}

export default IconText
