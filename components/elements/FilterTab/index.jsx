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
    border:`1px solid #E8E8E8`,
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    background:"#F9F9F9",
    borderRadius:"4px",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
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
    cursor:"pointer",
    padding:"4px 8px",
fontSize:"16px",
borderRadius:"4px",
border:"2px solid transparent",
userSelect:"none",

'&:hover':{
    color:colors.primary
},
'&:focus':{
    border:`2px solid ${colors.primary}`,
}
},
activeFilterText:{
    cursor:"pointer",
    border:`2px solid ${colors.primary}`,
    padding:"4px 8px",
    userSelect:"none",
    borderRadius:"4px",
    fontSize:"16px"

},
smallTryOnContainer:{
    display:"none",
    [theme.breakpoints.down('md')]:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
    
},
mainToggleCOntainer:{
    display:"flex",
    alignItems:"center"
},
selectedFilterText:{
    borderBottom:`2px solid ${colors.primary}`
}


}))

const FilterTab = (props) => {
    const {value,selectedValue}=props;
    console.log(value,selectedValue,"value")
    const classes=useStyles()
    return (
        <>
        
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
                <li className={`${value==="price"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("price") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("price")}>Price</li>
                <li className={`${value==="shapes"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("shapes") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("shapes")}>Shapes</li>
                <li className={`${value==="frame"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("frame") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("frame")}>Frame width</li>
                <li className={`${value==="colors"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("colors") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("colors")}>Colors</li>
                <li className={`${value==="materials"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("materials") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("materials")}>Materials</li>
                <li className={`${value==="nosebridge"?classes.activeFilterText:classes.filterText} ${selectedValue.includes("nosebridge") && classes.selectedFilterText}`} onClick={()=>props.filterHandler("nosebridge")}>Nose bridge</li>
            </ul>
            <ButtonIcon/>
        </div>
        <div className={classes.smallTryOnContainer}>
            <div className={classes.mainToggleCOntainer}>
                <div className={classes.tryOnText}>Home try on</div>
                <div className={classes.toggleContainer}>
                <FormGroup className={classes.toggleButton}>
  <FormControlLabel  control={<Switch   />} label="" />
</FormGroup>

</div>
</div>
<SecondaryButton actionClick={props.filterShowHandler} title="Filter" style={{border:`1px solid ${colors.black}`,color:colors.black}}/>
            </div>
        </>
    )
}

export default FilterTab
