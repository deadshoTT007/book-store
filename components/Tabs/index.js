import React from 'react'
import {  Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { colors } from '@/utils/index';


const Tabs = (props) => {

    const useStyles = makeStyles(theme=>({
        tab:{
            padding:"15px 20px",
            background:"#fff",
            boxShadow:"0px 0px 25px #80808026",
            marginRight:"5px",
            cursor:"pointer",
            fontSize:"16px",
            fontWeight:"600",
            textTransform:"capitalize",
            transition:"all 300ms ease-in-out",
            '&:hover':{
                background:colors.primary,
                color:"#fff"
            }
        },
        active:{
            background:colors.primary,
            color:"#fff"
        }
    }))
    
    const classes = useStyles()
    
    const { title,id, specificCategory, actionClick} = props;

    console.log(id,specificCategory,"check")


    return (
        <div onClick={actionClick} className={`${classes.tab} ${specificCategory===id && classes.active} `}>
            {title}
        </div>
    )
}

export default Tabs
