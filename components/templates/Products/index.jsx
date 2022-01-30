import React,{useState} from 'react'
import {makeStyles} from '@mui/styles'
import { colors } from '../../../utils/index'
import TopBar from '@/components/modules/TopBar'
import Product from '@/components/modules/Product'
import { useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import FilterBox from '@/components/elements/FilterBox'
import RangeSlider from '@/components/elements/RangeSlider'
import { Modal } from '@mui/material'
import StickyBottomNavBar from '@/components/elements/StickyBottomNavbar'
import ButtonIcon from '@/components/elements/ButtonIcon'
import ImageButton from '@/components/elements/ImageButton'
const bgImage = 'https://post.healthline.com/wp-content/uploads/2020/09/woman-enjoying-morning-coffee-thumb.jpg'
const imageBg="https://media.baamboozle.com/uploads/images/120677/1602612165_18008"
const womenSunglassesData = [
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
]
const useStyles = makeStyles(theme => ({
    main: {
        padding: "40px",
        [theme.breakpoints.down('md')]: {
            padding: "40px 20px"
        }
    },
    banner: {
        height: "450px",
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
        display: 'flex',
        alignItems: "center",
        padding: "40px"
    },
    bannerText: {
        fontFamily: "Lora",
        fontWeight: "700",
        fontSize: "40px",
        lineheight: "51px",
        color: colors.black,
        textTransform: "capitalize"
    },
    sunglasses: {
        display: "grid",
        gridTemplateColumns: " 1fr 1fr 1fr",
        gridRowGap: "80px",
        gridColumnGap: "40px",
        margin: "20px 0",
        padding: "40px 80px",
        [theme.breakpoints.up("lg")]: {
            gridColumnGap: "80px"
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: " 1fr 1fr ",
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: "1fr",
            padding: "20px 20px"
        }

    },
    sunglassesContainer: {
        display: 'flex',
        justifyContent: "center",
        [theme.breakpoints.down('md')]:{
            width:"100%",
            display:"block"
        }
    },
    heroImgContainer: {
        '& img': {
            width: "100%",
            height: "300px",
            objectFit: "cover"
        }
    },
    heroSectionText: {
        marginTop: "10px",
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: "Lora",
        color: colors.black,
        textTransform: "capitalize"
    },
    filterRootContainer:{
        width:'100%',
        // padding:"16px",
        marginTop:'100px',
        background:"#fff",
        borderRadius:"32px 32px 0px  0px",
        // backgroundColor:colors.background
    },
    filterTextContainer:{
        display:'flex',
        justifyContent:"space-between",
        padding:"16px",
        boxShadow:"0px 1px 0px rgba(0, 0, 0, 0.1)"
   },
    filterText:{
        fontSize:"20px",
        fontWeight:"700",
        lineHeight:"25px",
        color:colors.black
    },
    icon:{
        color:colors.black,
        cursor:"pointer"
    },
    rangeContainer:{
        marginTop:16,
        padding:"0 16px",
        background:"#fff",
        borderRadius:"4px"
    },
    mainFilterText:{
        fontWeight:500,
        fontSize:"16px",
        lineHeight:"19px",
        color:colors.gray,
        marginBottom:"14px"
    },
    container:{
        marginTop:24,
        padding:"0 16px",
        
    },
    frameText:{
        fontSize:"16px",
        lineHeight:"19px",
        fontWeight:500,
        color:colors.gray,
        marginBottom:16
    },
    sizeMainContainer:{
        display:"flex",
        alignItems:"center",
        flexWrap:"wrap",
        // justifyContent:"space-evenly",
        gap:"24px",
        marginBottom:25,
        '&>*':{
            // flex:1,
        }

    },
    sizeContainer:{
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        // maxWidth:"100px",
        padding:"4px 8px",
        borderRadius:"4px",
        border:`1px solid ${colors.lightGray}`
    },
    modal:{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(129, 125, 145, 0.61)",
        // opacity: "0.6",
        position: "absolute",
        top: "0%",
        left: "0",
        [theme.breakpoints.up('md')]:{
            display:'none'
        },

        '& div': {
            outline: "none",
        },
    },
    shapeContainer:{
        marginTop:24,
        padding:"0 16px",

    },
    shapeBoxesContainer:{
        display:'flex',
        flexWrap:"wrap",
        gap:"24px",
        marginTop:"24px"
    },
    boxContainer:{
        border:`1px solid ${colors.lightGray}`,
        padding:8,
        borderRadius:4
    },
    filterMainContainer:{
        height:"60vh",
        overflow:"auto"
    },
    selectionContainer:{
        padding:"12px 16px",
        borderRadius:"12px 12px 0px 0px",
        height:"80px",
        background:colors.mainGray,
        position:"fixed",
        bottom:"80px",
        width:"100%",
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center"
    },
colorContainer:{
    display:'flex',
    flexWrap:"wrap",
    gap:"24px",
    marginTop:24
},
materialContainer:{
    display:'flex',
    flexWrap:"wrap",
    gap:"24px",
    marginTop:24
},
materialText:{
    fontSize:"16px",
    lineHeight:"22px",
    
}
}))
export const SunglassWomens = () => {
    const classes = useStyles()
    const bannerActive = useMediaQuery("(min-width:900px)")
    console.log(bannerActive, "acctive")
    const [showFilterOptions,setShowFilterOptions]=useState(false)

    const filterShowHandler=()=>{
        setShowFilterOptions(true)
    }
    console.log(showFilterOptions,"filter")
    return (
        <>
        <div className={classes.root}>
            <TopBar />
            <div className={classes.main}>
                {bannerActive ? <div className={classes.banner}>
                    <div className={classes.bannerContainer}>
                        <div className={classes.bannerText}>Glasses that work hard.<br></br>
                            Just as hard as you do.</div>
                    </div>
                </div> : <div className={classes.heroSection}>
                    <div className={classes.heroImgContainer}>
                        <img src={bgImage} alt="Lady wearing glasses" />
                    </div>
                    <div className={classes.heroSectionText}>Glasses that work hard.<br></br>
                        Just as hard as you do.</div>
                </div>}
<FilterBox filterShowHandler={filterShowHandler} showFilterOptions={showFilterOptions}/>
                <div className={classes.sunglassesContainer}>
                    <div className={classes.sunglasses}>
                        {womenSunglassesData.map((sunglass, index) => {
                            return <Product key={index} title={sunglass.title} image={sunglass.src} colors={sunglass.colors} price={sunglass.price} />
                        })}
                    </div>
                </div>
            </div>
            {showFilterOptions &&
            <>
            <Modal open={showFilterOptions} onClose={()=>setShowFilterOptions(false)} className={classes.modal}>
            <div className={classes.filterRootContainer}>
                <div className={classes.filterTextContainer}>
                    <div className={classes.filterText}>Filter</div>
                    <CloseIcon onClick={()=>setShowFilterOptions(false)} className={classes.icon}/>
                </div>
            <div className={classes.filterMainContainer}>
                <div className={classes.container}>
                    <div className={classes.mainFilterText}>Price</div>
                    <RangeSlider parentStyle={{width:"100%"}} minRange="50" maxRange="500"/>
                </div>
                <div className={classes.container}>
                    <div className={classes.frameText}>Frame Width</div>
                    <div className={classes.sizeMainContainer}>
                        <div className={classes.sizeContainer}>Small</div>
                        <div className={classes.sizeContainer}>Medium</div>
                        <div className={classes.sizeContainer}>Large</div>
                        <div className={classes.sizeContainer}>Extra-large</div>
                    </div>
                    <RangeSlider minRange="Small" maxRange="Extra-large" parentStyle={{width:"100%"}}/>
                </div>
                <div className={classes.container}>
                    <div classNmae={classes.mainFilterText}>Shapes</div>
                    <div className={classes.shapeBoxesContainer}>
                        <div className={classes.boxContainer}>
                    <ImageButton image='/images/Rectangle 54.png' label="Rectangle"/>
                        </div>

                        <div className={classes.boxContainer}>
                    <ImageButton image='/images/square.png' label="Square"/>
                        </div>

                        <div className={classes.boxContainer}>
                    <ImageButton image='/images/Polygon.png' label="Geometric"/>
                        </div>

                        <div className={classes.boxContainer}>
                    <ImageButton image='/images/heart.png' label="Heart"/>
                        </div>
                        
                    </div>
                </div>
              <div className={classes.container}>
              <div classNmae={classes.mainFilterText}>Colors</div>
              <div className={classes.colorContainer}>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#E53C3C"}} color='red' style label="Red"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#3CB2E5"}} color='blue' label="Blue"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#AA0909"}} color='darkRed' label="Dark Red"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#D7E53C"}} color='yellow' label="Pale Yellow"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#6B4B4B"}} color='brown' label="Brown"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#903CE5"}} color='purple' label="Purple"/>
                     </div>
                     <div className={classes.boxContainer}>
                         <ImageButton style={{backgroundColor:"#0D0D0D"}} color='black' label="Rectangle"/>
                     </div>
                     </div>
              </div>

              <div className={classes.container}>
              <div classNmae={classes.mainFilterText}>Materials</div>
              <div className={classes.materialContainer}>
                     <div className={classes.boxContainer}>
            <div className={classes.materialText}>Acetate</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Wood</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Metal</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Titanium</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Plastic</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Carbon fiber</div>
            </div>
            <div className={classes.boxContainer}>
            <div className={classes.materialText}>Aluminium</div>
            </div>
            </div>
              </div>
               
            </div>
         <div className={classes.selectionContainer}>
         <div className={classes.selectionText}>Selection(0)</div>
         <ButtonIcon/>
     </div>
     <StickyBottomNavBar/>
        </div>
        </Modal>
     </>
            }
            
            </div>
        </>
    )
}
export default SunglassWomens  