import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const ButtonIcon = (props) => {
    const useStyles=makeStyles(theme=>({
button:{
    outline:"none",
    padding:"8px 12px",
    borderRadius:"40px",
    border:`1px solid ${colors.black}`,
    background:"transparent",
    display:'flex',
    alignItems:"center",
},
icon:{
    marginLeft:"10px"
}
    }))
    const classes=useStyles()
    return (
        <button className={classes.button}>Clear filter <CancelOutlinedIcon className={classes.icon}/></button>
    )
}

export default ButtonIcon
