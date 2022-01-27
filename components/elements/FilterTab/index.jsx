import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import { FormGroup,FormControlLabel,Switch } from '@mui/material'
import SecondaryButton from '../SecondaryButton'
import ButtonIcon from '../ButtonIcon'
const useStyles=makeStyles(theme=>({
filterBoxContainer:{
    margin:"24px 0",
    padding:"16px 24px",
    border:`1px solid ${colors.black}`,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    background:"#F9F9F9"
},
tryOnContainer:{
display:"flex",
alignItems:"center"
},
tryOnText:{
    fontSize:"16px",
    fontWeight:"500",
    lineHeight:"19px",
    color:colors.black
},
toggleContainer:{
    marginLeft:"14px"
},
toggleButton:{
    background:"transparent",
    '& .css-1yjjitx-MuiSwitch-track':{
        background:"transparent",
        opacity:1,
        border:"2px solid #4A4A4A"

    },
    '& .css-jsexje-MuiSwitch-thumb':{
        boxShadow:"none",
        border:"2px solid #4A4A4A"
    }
},
filterTextContainer:{
    listStyle:"none",
    display:"flex",
    gap:"24px"
},
filterText:{
    cursor:"pointer"
}
}))

const FilterTab = (props) => {
    const {value}=props;
    console.log(value,"value")
    const classes=useStyles()
    return (
        <div className={classes.filterBoxContainer}>
            <div className={classes.tryOnContainer}>
                <div className={classes.tryOnText}>Home try on</div>
                <div className={classes.toggleContainer}>
                <FormGroup className={classes.toggleButton}>
  <FormControlLabel  control={<Switch   />} label="" />
</FormGroup>

</div>
            </div>
            <ul className={classes.filterTextContainer}>
                <li className={`${classes.filterText} ${value==="price"}`} onClick={()=>props.filterHandler("price")}>Price</li>
                <li className={classes.filterText} onClick={()=>props.filterHandler("shapes")}>Shapes</li>
                <li className={classes.filterText} onClick={()=>props.filterHandler("frame")}>Frame width</li>
                <li className={classes.filterText} onClick={()=>props.filterHandler("colors")}>Colors</li>
                <li className={classes.filterText} onClick={()=>props.filterHandler("materials")}>Materials</li>
                <li className={classes.filterText} onClick={()=>props.filterHandler("nosebridge")}>Nose bridge</li>
            </ul>
            <ButtonIcon/>
        </div>
    )
}

export default FilterTab
