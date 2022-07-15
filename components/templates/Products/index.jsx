import React,{useState, useEffect} from 'react'
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
import NavigationBox from '@/components/NavigationBox'
import HomeLayout from '@/components/layouts/HomeLayout'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsList } from '@/store/actions/products'
import bgImage from '@/public/images/book4.jpg'


const useStyles = makeStyles(theme => ({
    main: {
        padding: "40px",
        marginTop:"65px",
        [theme.breakpoints.down('md')]: {
            padding: "0",
            width:"90%",
            margin:"0 auto",
            marginTop:"140px"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:"140px"
        }
    },
    banner: {
        height: "450px",
        background: `url(${bgImage.src})`,
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
        color:"#fff",
        fontSize: "40px",
        lineheight: "51px",
        textTransform: "capitalize"
    },
    sunglasses: {
        width:"100%",
        display: "grid",
        gridTemplateColumns: " repeat(3,1fr)",
        gridRowGap: "40px",
        gridColumnGap: "20px",
        margin: "20px 0",
        padding: "40px 80px",
        [theme.breakpoints.up("lg")]: {
        gridColumnGap: "20px",
        gridTemplateColumns: " repeat(3,1fr)",

        },
        [theme.breakpoints.down('lg')]: {
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
        marginTop:'200px',
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
        zIndex:"20",
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
        borderRadius:4,
        "&:hover":{
            border:`1px solid ${colors.black}`
        }
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
    
},
gridContainer:{
    // width:'300px',
    // marginTop:60
},
categories:{
    fontSize:24
},
cat:{
    margin:"10px 0px",
    padding:"10px 8px",
    background:colors.primary,
    color:"#fff",
    cursor:"pointer",
    borderRadius:"4px"
},
activeCat:{
    backgroundColor:"#000"
},
searchContainer:{
    marginTop:40,
    display:"flex",
    justifyContent:"flex-end"
},
search:{
    width:"250px",
    padding:"10px 16px",
    border:"none",
    boxShadow:"4px 4px 12px rgba(0,0,0,0.1)",
    borderRadius:"4px",
    fontSize:"16px",
    "&:focus":{
        border:"none",
        outline:"none"
    }
},
filterContainer:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:'flex-start',
    justifyContent:"flex-end"
}
}))
export const Products = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [searchText, setSearchText ] = useState("")
    const [categories, setCategories] = useState(null) 
    const productsList = useSelector(state=>state.products.productsList)
    const categoriesList = useSelector(state=>state.categories.categoriesList)
    const price = productsList.length>0 && productsList.map(product=>product.price)
    console.log(categoriesList,"catList")



    const bannerActive = useMediaQuery("(min-width:900px)")
    console.log(bannerActive, "acctive")
    const [showFilterOptions,setShowFilterOptions]=useState(false)

    const filterShowHandler=()=>{
        setShowFilterOptions(true)
    }
    console.log(showFilterOptions,"filter")

    const specificCategories = (cat) => {
        setCategories(cat)
    }


    useEffect(()=>{
        dispatch(getProductsList(categories?categories.id:"",searchText))
    },[categories&&categories.id,searchText])
    return (
        <>
        <HomeLayout>
        <div className={classes.root}>
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
                <div className={classes.filterContainer}>
               

                <div className={classes.searchContainer}>
                    <input onChange={(e)=>setSearchText(e.target.value)} placeholder="Search" className={classes.search} type="search"/>
                </div>
                </div>
               {/* <FilterBox minPriceHandler={minPriceHandler} maxPriceHandler={maxPriceHandler} minPrice={minPrice} maxPrice={maxPrice}/> */}
                <div className={classes.sunglassesContainer}>
                <div className={classes.gridContainer}>
                        <div  className={classes.categories}>Categories </div>
                        {categoriesList.length>0 && categoriesList.map((cat,index)=>{
                            return (
                                <div onClick={()=>specificCategories(cat)} key={index} className={`${classes.cat} ${categories && cat.id==categories.id && classes.activeCat}`}>{cat.category_name}</div>
                            )
                        })}
                    </div>
                    <div className={classes.sunglasses}>
                   
                        {productsList.map((product,index)=>{
                            return(
                                <Product key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} image={product.image}/>
                            )
                        })}
                        {/* {glassesData.map((data, index) => {
                            return <Product key={index} title={data.title} image={data.src} colors={data.colors} price={data.price} />
                        })} */}
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
            </div>
         <div className={classes.selectionContainer}>
         <div className={classes.selectionText}>Selection(0)</div>
         <ButtonIcon/>
     </div>
        </div>
        </Modal>
     </>
            }
            
            </div>
            </HomeLayout>
        </>
    )
}
export default Products  