import React,{useState} from 'react'
import { makeStyles } from '@mui/styles';
import { colors } from '@/utils/index';
import Slider from '@mui/material/Slider';

const RangeSlider = (props) => {
    const useStyles=makeStyles(theme=>({

        rangeContainer:{
            // height:"250px",
            width:"40%",
            margin:"0 auto",
            display:'flex',
            alignItems:"center",
            justifyContent:"center",
            ...props.parentStyle
        },
        minRange:{
            width:"100px",
            marginRight:24,
            fontSize:"20px",
            color:colors.black,
            fontWeight:500
        },
        maxRange:{
            width:"100px",
            marginLeft:24,
            fontSize:"20px",
            color:colors.black,
            fontWeight:500
        },
        rangeSlider:{
            '& .css-14pt78w-MuiSlider-rail':{
                opacity:1,
                backgroundColor:"#E8E8E8",
                borderRadius:"25px",
                height:"4px"
            },
            '& .css-1gv0vcd-MuiSlider-track':{
                color:colors.primary,
                height:"4px"
                // border:`3px solid ${colors.primary}`
            },
            '& .css-eg0mwd-MuiSlider-thumb':{
                color:"#fff",
                width:"20px",
                height:"20px",
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
        }
        }))
        
    const {minRange,maxRange,minPriceHandler,maxPriceHandler}=props;
    const classes=useStyles()
    const [filterValue,setFilterValue]=useState("")
    function valuetext(value) {
        return `${value}°C`;
      }

      console.log(minRange,maxRange,"range")
      
        const [value, setValue] = React.useState([20, 50]);
        const [minValue, setMinValue] = useState(null)
        const [maxValue, setMaxValue] = useState(null)
      
        const handleChange = (event, newValue) => {
            console.log(event,"event")
        //   setValue(newValue);
        //   minPriceHandler(event.value[0])
        //   maxPriceHandler(event.value[1])
        };
    return (
        <div className={classes.root}>
        <div className={classes.rangeContainer}>
                <div className={classes.minRange}>{minRange}</div>
                <Slider
                className={classes.rangeSlider}
                // getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            <div className={classes.maxRange}>{maxRange}</div>
            </div>
            <div className={classes.priceRange}>{minRange} - {maxRange}</div>

            </div>
    )
}

export default RangeSlider
