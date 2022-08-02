import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import { Link } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const useStyles=makeStyles(theme=>({
navigationBoxContainer:{
    display:'flex',
    alignItems:'center'
},
icon:{
    fontSize:12,
    marginRight:"10px"
},
link:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black,
    margin:"0 10px",
    textDecoration:"none"
}
}))
const NavigationBox = () => {
    const classes=useStyles()
    return (
        <div className={classes.navigationBox}>
            <div className={classes.navigationBoxContainer}>
                {/* <Link href="#" className={classes.link}>
                   Home
                </Link>
            <ArrowForwardIosOutlinedIcon className={classes.icon}/>
            <Link href="#" className={classes.link}>
                   Home
                </Link>
                <ArrowForwardIosOutlinedIcon className={classes.icon}/>
                <Link href="#" className={classes.link}>
                   Home
                </Link> */}

            </div>
            
        </div>
    )
}

export default NavigationBox
