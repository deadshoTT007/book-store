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
            transition:"all 300ms ease-in-out",
            '&:hover':{
                background:colors.primary,
                color:"#fff"
            }
        }
    }))
    
    const classes = useStyles()
    
    const { title } = props;


    return (
        <div className={classes.tab}>
            {title}
        </div>
    )
}

export default Tabs
