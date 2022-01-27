import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import { FormControlLabel,Checkbox } from '@mui/material'
import FilterTab from '../FilterTab'
import Slider from '@mui/material/Slider';
import PrimaryButton from '../PrimaryButton'
import CloseIcon from '@mui/icons-material/Close';
import RangeSlider from '../RangeSlider'
import ImageButton from '../ImageButton'


const FilterBox = () => {
    const [filterValue,setFilterValue]=useState("")
    const useStyles=makeStyles(theme=>({
        filterMainContainer:{
            borderRadius:"4px",
            width:"100%"
        },
        closeIcon:{
            position:"absolute",
            top:"30px",
            right:"30px",
            color:colors.primary
        },
        mainFilterContainer:{
            padding:"16px 24px 40px 24px",
            position:"relative",
            minHeight:(filterValue==="price" || filterValue=="nosebridge") ? "250px" : "350px",
            // minHeight:"350px",
            width:"100%",
            display:"flex",
            alignItems:"flex-end",
            border:`1px solid #E8E8E8`,
            background:"#F9F9F9"
            
        
        },
        labelContainer:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"250px",
            gap:"24px"
        },
        checkboxContainer:{
            borderRadius:"4px",
            border:'2px solid #A8FFB8',
            padding:"12px 16px",
            '& .css-j204z7-MuiFormControlLabel-root':{
                marginLeft:"0px"
            }
        },
        rangeContainer:{
            // height:"250px",
            width:"40%",
            minWidth:"800px",
            margin:"0 auto",
            display:'flex',
            alignItems:"center",
            justifyContent:"center",
            [theme.breakpoints.down('md')]:{
                minWidth:"100%",
                width:"80%"
            },
            [theme.breakpoints.down('sm')]:{
                minWidth:"100%",
                width:"100%"
            }
        },
        minPrice:{
            width:"100px",
            marginRight:24,
            fontSize:"20px",
            color:colors.black,
            fontWeight:500
        },
        maxPrice:{
            width:"100px",
            marginLeft:24,
            fontSize:"20px",
            color:colors.black,
            fontWeight:500
        },
        rangeSlider:{
            '& .css-14pt78w-MuiSlider-rail':{
                opacity:1,
                backgroundColor:colors.greenSurface,
                borderRadius:"25px",
                height:"8px"
            },
            '& .css-1gv0vcd-MuiSlider-track':{
                color:colors.primary,
                height:"8px"
                // border:`3px solid ${colors.primary}`
            },
            '& .css-eg0mwd-MuiSlider-thumb':{
                color:"#fff",
                width:"32px",
                height:"32px",
                border:`3px solid ${colors.primary}`
            },
           
        },
        priceRange:{
            fontSize:"16px",
            lineHeight:"19px",
            fontWeight:600,
            color:colors.black,
            textAlign:"center",
            marginTop:"24px"
        },
        sizeContainer:{
            width:"40%",
            minWidth:"800px",
            margin:"0 auto",
            display:'flex',
            marginBottom:"24px",
            justifyContent:"space-evenly",
            [theme.breakpoints.down('md')]:{
                minWidth:"100%",
                width:"80%"
            },
            [theme.breakpoints.down('sm')]:{
                minWidth:"100%",
                width:"100%"
            }
        },
        size:{
            padding:"20px 32px",
            border:`2px solid ${colors.greenSurface}`,
            borderRadius:"4px",
            fontSize:"16px",
            lineHeight:"22px",
        
        },
        mainContainer:{
            width:"30%",
            minWidth:"600px",
            margin:"0 auto",
            [theme.breakpoints.down('md')]:{
                minWidth:"100%",
                width:"80%"
            },
            [theme.breakpoints.down('sm')]:{
                minWidth:"100%",
                width:"100%"
            }
        },
        boxContainer:{
            display:'flex',
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"24px"
        
           
        },
        eachContainer:{
            display:"flex",
            padding:"12px 16px",
            borderRadius:"4px",
            border:"1px solid #8D8D8D",
            alignItems:"center",
           
        },
        selectionText:{
            textAlign:"center",
            marginTop:"24px",
            fontSize:"12px",
            lineHeight:"14px",
            fontWeight:"700",
            color:"#000"
        },
        materialText:{
            fontSize:"16px",
            lineHeight:"22px",
            
        }
        
        }))
    const classes=useStyles()
    // const [price,setPrice]=useState(false)
    // const [materials,setMaterials]=useState(false)
    // const [shapes,setShapes]=useState(false)
    // const [frame,setFrame]=useState(false)
    // const [colors,setColors]=useState(false)
    // const [noseBridge,setNoseBridge]=useState(false)
    function valuetext(value) {
        return `${value}°C`;
      }
      
        const [value, setValue] = React.useState([20, 37]);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
    const filterHandler=(value)=>{
        setFilterValue(value)
    }
    return (
        <div>
            <FilterTab value={filterValue} filterHandler={filterHandler}/>
            {filterValue=="nosebridge"&&
            <div className={classes.mainFilterContainer}> 
            <div className={classes.filterMainContainer}>
                <CloseIcon className={classes.closeIcon}/>
                <div className={classes.mainContainer}>
                 <div className={classes.boxContainer}>
                     <div className={classes.eachContainer}>
                         <ImageButton image='/images/Rectangle 54.png' label="Standard"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton image='/images/Rectangle 54.png' label="Low bridge fit"/>
                     </div>
                </div>
                <div className={classes.selectionText}>Selection(0)</div>
<PrimaryButton title="Apply" style={{marginTop:"24px"}}/>
                </div>
                </div>
                </div>

}
            {filterValue==="price" && 
                        <div className={classes.mainFilterContainer}> 
            <div className={classes.filterMainContainer}>
            <CloseIcon className={classes.closeIcon}/>
          <RangeSlider maxRange="Rs. 100" minRange="Rs. 5000"/>
            <div className={classes.priceRange}>Rs. 100 - Rs. 5000</div>
            <PrimaryButton title="Apply" style={{marginTop:"24px"}}/>
            </div>
            </div>
            }
            {filterValue==="frame" && 
            <div className={classes.mainFilterContainer}>
                <div className={classes.filterMainContainer}>
                <CloseIcon className={classes.closeIcon}/>
<div className={classes.sizeContainer}>
    <div className={classes.size}>Small</div>
    <div className={classes.size}>Medium</div>
    <div className={classes.size}>Large</div>
    <div className={classes.size}>Extra-large</div>
</div>
<RangeSlider minRange="8mm" maxRange="12mm"/>
<div className={classes.priceRange}>8mm - 12mm</div>
            <PrimaryButton title="Apply" style={{marginTop:"24px"}}/>

                </div>
            </div>
            }
            {filterValue==="shapes" && 
             <div className={classes.mainFilterContainer}>
             <div className={classes.filterMainContainer}>
             <CloseIcon className={classes.closeIcon}/>
             <div className={classes.mainContainer}>
                 <div className={classes.boxContainer}>
                     <div className={classes.eachContainer}>
                         <ImageButton image='/images/Rectangle 54.png' label="Rectangle"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton image="images/oval.png" label="Oval"/>
                    </div>
                    <div className={classes.eachContainer}>
                        <ImageButton image="images/square.png" label="Square"/>
                    </div>
                    <div className={classes.eachContainer}>
                        <ImageButton image="images/round.png" label="Round"/>
                    </div>
                    <div className={classes.eachContainer}>
                        <ImageButton image="images/Polygon.png" label="Geometric"/>
                    </div>
                    <div className={classes.eachContainer}>
                        <ImageButton image="images/heart.png" label="Heart"/>

</div>

                 </div>
<div className={classes.selectionText}>Selection(0)</div>
<PrimaryButton title="Apply" style={{marginTop:"24px"}}/>
             </div>
             </div>
             </div>
            }
            {filterValue==="colors" && 
             <div className={classes.mainFilterContainer}>
             <div className={classes.filterMainContainer}>
             <CloseIcon className={classes.closeIcon}/>
             <div className={classes.mainContainer}>
                 <div className={classes.boxContainer}>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#E53C3C"}} color='red' style label="Red"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#3CB2E5"}} color='blue' label="Blue"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#AA0909"}} color='darkRed' label="Dark Red"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#D7E53C"}} color='yellow' label="Pale Yellow"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#6B4B4B"}} color='brown' label="Brown"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#903CE5"}} color='purple' label="Purple"/>
                     </div>
                     <div className={classes.eachContainer}>
                         <ImageButton style={{backgroundColor:"#0D0D0D"}} color='black' label="Rectangle"/>
                     </div>
                     </div>
                     <div className={classes.selectionText}>Selection(0)</div>
                     <PrimaryButton title="Apply" style={{marginTop:"24px"}}/>
             </div>
             </div>
             </div>
            }
            {filterValue==="materials" && 
             <div className={classes.mainFilterContainer}>
             <div className={classes.filterMainContainer}>
             <CloseIcon className={classes.closeIcon}/>
             <div className={classes.mainContainer}>
                 <div className={classes.boxContainer}>
                     <div className={classes.eachContainer}>
            <div className={classes.materialText}>Acetate</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Wood</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Metal</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Titanium</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Plastic</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Carbon fiber</div>
            </div>
            <div className={classes.eachContainer}>
            <div className={classes.materialText}>Aluminium</div>
            </div>
            </div>
            <div className={classes.selectionText}>Selection(0)</div>
            <PrimaryButton title="Apply" style={{marginTop:"24px"}}/>

            </div>
            </div>
            </div>

    }    
            </div>
  )
}

export default FilterBox
