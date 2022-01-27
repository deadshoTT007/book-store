import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
const ImageButton = (props) => {
    const useStyles=makeStyles(theme=>({
    mainContainer:{
        display:"flex",
        // padding:"12px 16px",
        // borderRadius:"4px",
        // border:"1px solid #8D8D8D",
        alignItems:"center",
        '& div':{
            // marginLeft:"10px",
            marginTop:1
        },

    },
    mainText:{
        marginLeft:10
    },
    color:{
        width:"24px",
        height:"24px",
        borderRadius:"50%",
        background:"red",
        ...props.style
    }
    }))
    const {image,label,color}=props;
    const classes=useStyles()
    return (
        <div className={classes.mainContainer}>
             {image && <img src={image} className={classes.image} alt="" />}
             {color && <div className={classes.color}></div>}
                    <div className={classes.mainText}>{label}</div>
        </div>
    )
}

export default ImageButton
