import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import {colors} from '../../../utils/index'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecondaryButton from '@/components/elements/SecondaryButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRouter } from 'next/dist/client/router';
import Divider from '@/components/elements/Divider';
import book1 from '@/public/images/book1.jpg';
import book2 from '@/public/images/book2.jpg';
import book3 from '@/public/images/book3.jpg';
import book4 from '@/public/images/book4.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(theme => ({
    topBar: {
        position:"fixed",
        top:0,
        zIndex:"10",
        background:"#fff",
        backgroundColor:"#fff",
        width: "100vw",
        marginTop:"-4px",
        // minHeight: "5vh",
        // overflow: "hidden",
        // minHeight: "8vh",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down('sm')]: {
        }

    },
    topBarContainer: {
        padding: "0px 40px",
        display: "flex",
        alignItems: "center",

        justifyContent: "space-between",
        [theme.breakpoints.down('md')]:{
            paddingTop:"20px"
        },
        [theme.breakpoints.down('sm')]: {
            // padding: "10px 10px"
            padding:"16px 0",
            width:"90%",
            margin:"0 auto"
        }
    },
    logoText: {
        fontSize: "32px",
        lineHeight: "37px",
        fontWeight: "400",
        color: colors.primary,
        cursor:"pointer",
        userSelect: "none",

    },
    userContainer: {
        display: "flex",
        alignItems: "center",
        padding: " 10px",
        position: "relative",
        userSelect: "none",
        minWidth: "135px",
        borderRadius:4,
        marginLeft: "20px",
        cursor:"pointer",
        paddingLeft: "15px",
        transition: "all 250ms ease-in-out",
        color:colors.primary,

        '&:hover': {
            backgroundColor: "#CDFFD6"
        },
        '& img': {
            width: "20px",
            height: "20px",
            objectFit: "cover",
            borderRadius: "50%"
        },
        '& span': {
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "400"
        }
    },
    right: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    info: {
        display: "flex",
        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    links: {
        listStyle: "none",
        display: "flex",
        paddingTop:"2px",
        flex:1,
        // marginLeft:100,
        justifyContent:"center",
        textDecoration:"none",

        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    link: {
        margin: "0 10px",
        padding: "20px ",
        fontSize: "20px",
        fontWeight:700,
        display:"flex",
        cursor:"pointer",
        lineHeight: "22px",
        transition: "all 250ms ease-in-out",
        color:colors.primary,
        textDecoration:"none",
        '& span':{
            display:"flex",
            alignItems:"center",
        },
        // '&:hover': {
        //     color: colors.primary,
        // },
        // '&:active': {
        //     border: `3px solid ${colors.primary}`,
        //     // borderRadius: "4px"
        // },
        '&:focus': {
            borderBottom: `1px solid ${colors.primary}`,
            backgroundColor: "red"
        },
        // background: "red",
        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
    bookCategories:{
        margin: "0 10px",
        // padding: "10px 10px",
        fontSize: "20px",
        fontWeight:700,
        cursor:"pointer",
        lineHeight: "22px",
        transition: "all 250ms ease-in-out",
        color:colors.primary,
        textDecoration:"none",
        display:"flex",
        alignItems:"center",
        [theme.breakpoints.down('md')]:{
            padding:"20px 0px !important"
        },
        [theme.breakpoints.down('sm')]:{
            display:"none"
        },
        '& span':{
            display:"flex",
            alignItems:"center"
        },
        '&:hover':{
            '& $booksCategoriesContainer':{
                display:"flex"
            },
           
        }
    },
    iconContainer: {
        borderLeft: "1px solid #000",
        borderRight: "1px solid #000",
        padding: "0 20px",
        display: "flex",
        alignItems: "center"
    },
    cartIcon: {
        marginRight: "10px",
        cursor:"pointer",
        color:colors.primary

    },
    personIcon: {
        marginLeft: "10px",
        cursor:"pointer",
        color:colors.primary
    },
    search: {
        margin: " 0 20px",
        display: "flex",
        alignItems: "center"
    },

    dropDownIcon: {
        marginLeft: "10px",
        cursor: "pointer",
        color:colors.primary
    },
    profileImage: {
        marginLeft: "10px"
    },
    resLinks: {
        display: "none",
        [theme.breakpoints.down('md')]: {
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            // padding: "20px 0",
            '& li': {
                margin: "0 10px",
                padding: "0 10px",
                fontSize: "16px",
                lineHeight: "22px"
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            // margin: "0 10px",
            padding: "  0 20px",
            '& li': {
                margin:0,
                // margin: "0 10px",
                padding: "10px 0px",
                fontSize: "16px",
                lineHeight: "22px"
            }
        }
    },
    linkContainer: {
        // margin: "0 auto"
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        // paddingBottom: "30px"
    },
    navlinks: {
        color:colors.primary,
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "400",
        textDecoration: "none",
        userSelect: "none",

        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
    active: {
        borderRadius: "4px",
        border: `3px solid ${colors.primary}`
    },
    categories: {
        width: "100vw",
        zIndex:"10000000",
        // minHeight: "400px",
        backgroundColor: colors.background
    },
    booksCategoriesContainer: {
        position:'absolute',
        top:"60px",
        marginTop:"5px",
        width:"auto",
        justifyContent:"center",
        margin:"auto",
        left:"50%",
        transform:'translate(-50%,0)',
        zIndex:"1000",
        background:"#fff",
        userSelect:"none",
        padding: "24px 80px",
        display: "none",
        // display:"block",
       
        alignItems: "center",
        '&>*': {
            flex: "1",
            margin: "0 10px",
            [theme.breakpoints.down('md')]:{
                // display:'flex',
                // justifyContent:"space-between",
               
            }
        },
        [theme.breakpoints.down('lg')]:{
            top:"100px"
        },
        [theme.breakpoints.down('md')]:{
            marginTop:"65px",
            padding:"24px 16px",
            marginTop:"30px"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:60
        },

        // [theme.breakpoints.down('sm')]:{
        //     display:"block",
        //     padding:"32px 24px",
        //     top:165

        // }
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
    },
    categories: {
//        
        [theme.breakpoints.down('md')]:{
marginBottom:"24px",
flex:1,
'&:last-child':{
    marginBottom:0
}

        },
        '& img': {
            width: "auto",
            height: "400px",
            // borderRadius: "4px",
            objectFit: "contain",
            [theme.breakpoints.down('md')]:{
                // width:"200px",
                // height:"120px",
            },
            [theme.breakpoints.down('sm')]:{
                width:"100px",
                height:"60px"
            }
        }
    },
    dropDown: {
        position: "absolute",
        userSelect: "none",
        top: "65px",
        minWidth: "135px",
        right: "35px",
        zIndex:"10000",
        // height: "120px",
        display: "flex",
        alignItems: "center",
        boxShadow: " 0px 0px 16px rgba(0, 0, 0, 0.12)",
        borderRadius: "4px",
        background: colors.background,
        '& img': {
            width: "20px",
            height: "20px",
            objectFit: "cover",
            borderRadius: "50%"
        }
    },
    dropDownContainer: {
        width: "100%",

    },
    option: {
        display: "flex",
        justifyContent: "center",
        cursor:"pointer",
        alignItems: "center",
        width: "100%",
        margin: "0px auto",
        // background: "red",
        padding: "20px 0",
        '&:not(:last-child)': {
            // borderBottom: `1px solid ${colors.primary}`

        },
        '&:hover': {
            backgroundColor: "#CDFFD6"
        }
        // borderBottom: `1px solid ${colors.primary}`
        // margin: " 10px",
    },
    searchBarCOntainer:{
        // display:"flex",
        // alignItems:'center',
        // position:"relative",
        marginRight:"24px",
        position:"absolute",
        top:12,
        right:"300px"

    },
    searchBar:{
        display:"flex"
    },
    search:{
        [theme.breakpoints.up('lg')]:{
            width:"300px"
    },
    width:"200px",
    ouyline:"none",
    border:"none",
    padding:"8px 24px",
    border:`1px solid ${colors.gray}`,
    borderRadius:"40px",
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.gray,
    '&:focus':{
        outline:"none"
    }
    },
    searchIcon:{
        position:"absolute",
        top:"8px",
        right:"8px",
        cursor:"pointer"
    },
    searchIconContainer:{
        marginRight:24,
        position:"absolute",
        top:15,
        right:"307px"
    },
    icon:{
        cursor:"pointer",
        marginTop:5

    },
   categoryDetails:{
       backgroundColor:colors.primary,
       padding:"16px",
       textAlign:"center",
       marginTop:"-4px",
       fontSize:16,
       color:"#fff"
   },
   favIcon:{
       marginRight:"20px",
       color:"grey",
       cursor:"pointer",
       '&:hover':{
           color:colors.primary
       }
   },
   cartContainer:{
       display:"flex",
       alignItems:"center"
   }

}))
const TopBar = () => {
    const [ token, setToken ] = useState(false)
    const classes = useStyles()
    const router=useRouter()
    const [categories, setCategories] = useState(false)
    const [sunGlasses, setSunGlasses] = useState(false)
    const [brands, setBrands] = useState(false)
    const [dropDown, setDropDown] = useState(false)
const [showSearch,setShowSearch]=useState(false)
const [searchValue,setSearchValue]=useState("")

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      backgroundColor:colors.primary
    },
  }));

    const handleClick = (name) => {
        if (name === "categories") {
            setCategories(true)
            setSunGlasses(false)
            setBrands(false)
        }
        else if (name === "sunGlasses") {
            setCategories(false)
            setSunGlasses(true)
            setBrands(false)

        }
        else {
            setCategories(false)
            setSunGlasses(false)
            setBrands(true)
        }
    }
    const handleDropDown = () => {
        setDropDown(!dropDown)
    }
    console.log(categories,"eyq")
    return (
        <>
            <div className={classes.topBar}>
                <div className={classes.topBarContainer}>
                    <h2 onClick={()=>router.push('/')} className={classes.logoText}>Book Store</h2>
                    {/* <ul className={classes.links}>
                    <li className={classes.link}>EyeGlasses</li>
                    <li className={classes.link}>Sunglasses</li>
                    <li className={classes.link}>Brands</li>
                </ul> */}
                    <ul className={classes.links}>
                    <li  className={classes.link}>
                       
                            Products
                       
                        </li>
                    <li className={classes.bookCategories}>
                                <div>
                                <span>
                                Categories
                                <ArrowDropDownIcon/>
                                </span>
                    <div className={classes.booksCategoriesContainer}>
                        <div className={classes.categories}>
                            <img src={book1.src} className={classes.categoriesImg} />
                            <div className={classes.categoryDetails}>Adventurous Eating Rs.500 </div>
                        </div>
                        <div className={classes.categories}>
                        <img src={book2.src} className={classes.categoriesImg} />
                        <div className={classes.categoryDetails}>Girls At The Golden City Rs.200 </div>
                        </div>
                        <div className={classes.categories}>
                        <img src={book3.src} className={classes.categoriesImg} />
                        <div className={classes.categoryDetails}>Endless Summer Rs.400</div>
                        </div>

                    </div>
                </div>
                            
                        </li>
                       
                    </ul>
                    <div className={classes.right}>
                        <div className={classes.info}>
                            {showSearch?
                         <div className={classes.searchBarCOntainer}>
                         <div className={classes.searchBar}>
                             <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search" type="text" className={classes.search}/>
                             {searchValue.length>0?<CloseOutlinedIcon onClick={()=>setShowSearch(false)} className={classes.searchIcon}/>:
                         <SearchIcon onClick={()=>setShowSearch(false)} className={classes.searchIcon} />
                             }
                         </div>

                     </div>
                     :<></>   
                        }                                       
                            <div className={classes.cartContainer}>
                        <FavoriteOutlinedIcon className={classes.favIcon} />
                                {/* <ShoppingCartIcon onClick={()=>router.push('/cart')} className={classes.cartIcon} /> */}
                                <IconButton  aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
                            </div>
                        </div>

                        <div onClick={handleDropDown} className={classes.userContainer}>
                            <span>Profile</span>
                            <AccountCircleOutlinedIcon className={classes.personIcon} />
                            {/* <img className={classes.profileImage} src="data:image/png;base64,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" /> */}
                            {dropDown ? <ExpandLessIcon className={classes.dropDownIcon}  /> : <ExpandMoreIcon className={classes.dropDownIcon} onClick={handleDropDown} />}
                        </div>
                        

                        {(dropDown) && (
                            token?
                            <div className={classes.dropDown}>
                            <div className={classes.dropDownContainer}>
                                <div onClick={()=>router.push('/account-details')} className={classes.option}>
                                    <span>Account Details</span>
                                </div>
                                <div className={classes.option}>
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>:
                        <div className={classes.dropDown}>
                        <div className={classes.dropDownContainer}>
                            <div onClick={()=>router.push('/register-account')} className={classes.option}>
                                <span>Login</span>
                            </div>
                            {/* <div className={classes.option}>
                                <span>Logout</span>
                            </div> */}
                        </div>
                    </div>

                        )}
                    </div>
                </div>
                <ul className={classes.resLinks}>
                <li className={classes.bookCategories}>
                                <div>
                                <span>
                                Categories
                                <ArrowDropDownIcon/>
                                </span>
                    <div className={classes.booksCategoriesContainer}>
                        
                        <div className={classes.categories}>
                        <img src={book2.src} className={classes.categoriesImg} />
                        <div className={classes.categoryDetails}>Girls At The Golden City Rs.200 </div>
                        </div>
                        <div className={classes.categories}>
                        <img src={book3.src} className={classes.categoriesImg} />
                        <div className={classes.categoryDetails}>Endless Summer Rs.400</div>
                        </div>

                    </div>
                </div>
                            
                        </li>
                </ul>
               
            </div>
           
        </>
    )
}
export default TopBar
