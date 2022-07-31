import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import { colors } from '../../../utils/index'
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
import { useRouter } from 'next/router';
import Divider from '@/components/elements/Divider';
import book1 from '@/public/images/book1.jpg';
import book2 from '@/public/images/book2.jpg';
import book3 from '@/public/images/book3.jpg';
import book4 from '@/public/images/book4.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { useClickOutside } from 'react-click-outside-hook';
import { getCategoriesList } from '@/store/actions/categories';
import { useSelector, useDispatch } from 'react-redux';
import PrimaryButton from '@/components/elements/PrimaryButton';
import { profileFetch } from '@/store/actions/profile';
import { getCartList } from '@/store/actions/cart';

const useStyles = makeStyles(theme => ({
    topBar: {
        position: "fixed",
        top: 0,
        zIndex: "10",
        background: "#fff",
        backgroundColor: "#fff",
        width: "100vw",
        marginTop: "-4px",
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
        [theme.breakpoints.down('md')]: {
            paddingTop: "20px"
        },
        [theme.breakpoints.down('sm')]: {
            // padding: "10px 10px"
            padding: "16px 0",
            width: "90%",
            margin: "0 auto"
        }
    },
    logoText: {
        fontSize: "32px",
        lineHeight: "37px",
        fontWeight: "400",
        color: colors.primary,
        cursor: "pointer",
        userSelect: "none",

    },
    userContainer: {
        display: "flex",
        alignItems: "center",
        padding: " 10px",
        position: "relative",
        userSelect: "none",
        minWidth: "135px",
        borderRadius: 4,
        marginLeft: "20px",
        cursor: "pointer",
        paddingLeft: "15px",
        transition: "all 250ms ease-in-out",
        color: colors.primary,

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
        paddingTop: "2px",
        flex: 1,
        // marginLeft:100,
        justifyContent: "center",
        textDecoration: "none",

        [theme.breakpoints.down('md')]: {
            display: "none"
        }
    },
    link: {
        margin: "0 10px",
        padding: "20px ",
        fontSize: "20px",
        fontWeight: 700,
        display: "flex",
        cursor: "pointer",
        lineHeight: "22px",
        transition: "all 250ms ease-in-out",
        color: colors.primary,
        textDecoration: "none",
        '& span': {
            display: "flex",
            alignItems: "center",
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
    bookCategories: {
        margin: "0 10px",
        // padding: "10px 10px",
        fontSize: "20px",
        fontWeight: 700,
        cursor: "pointer",
        lineHeight: "22px",
        transition: "all 250ms ease-in-out",
        color: colors.primary,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            padding: "20px 0px !important"
        },
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
        '& span': {
            display: "flex",
            alignItems: "center"
        },
        '&:hover': {
            '& $booksCategoriesContainer': {
                display: "grid"
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
        cursor: "pointer",
        color: colors.primary

    },
    personIcon: {
        marginLeft: "10px",
        cursor: "pointer",
        color: colors.primary
    },
    search: {
        margin: " 0 20px",
        display: "flex",
        alignItems: "center"
    },

    dropDownIcon: {
        marginLeft: "10px",
        cursor: "pointer",
        color: colors.primary
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
                margin: 0,
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
        color: colors.primary,
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
        zIndex: "10000000",
        // minHeight: "400px",
        backgroundColor: colors.background
    },
    booksCategoriesContainer: {
        position: 'absolute',
        top: "60px",
        marginTop: "5px",
        width: "auto",
        justifyContent: "center",
        margin: "auto",
        height: "500px",
        overflow: "auto",
        left: "50%",
        transform: 'translate(-50%,0)',
        zIndex: "1000",
        background: "#fff",
        userSelect: "none",
        padding: "24px 80px",
        display: "none",
        // flexWrap:"wrap",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "20px",
        // display:"block",

        alignItems: "center",
        '&>*': {
            flex: "1",
            // margin: "0 10px",
            [theme.breakpoints.down('md')]: {
                // display:'flex',
                // justifyContent:"space-between",

            }
        },
        [theme.breakpoints.down('lg')]: {
            top: "100px"
        },
        [theme.breakpoints.down('md')]: {
            marginTop: "65px",
            padding: "24px 16px",
            marginTop: "30px"
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 60
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
        justifyContent: "center"
    },
    categories: {
        //        
        [theme.breakpoints.down('md')]: {
            marginBottom: "24px",
            flex: 1,
            '&:last-child': {
                marginBottom: 0
            }

        },
        '& img': {
            // width: "auto",
            height: "400px",
            // borderRadius: "4px",
            objectFit: "cover",
            minWidth:"100%",
            [theme.breakpoints.down('md')]: {
                // width:"200px",
                // height:"120px",
            },
            [theme.breakpoints.down('sm')]: {
                width: "100px",
                height: "60px"
            }
        }
    },
    dropDown: {
        position: "absolute",
        userSelect: "none",
        top: "65px",
        minWidth: "135px",
        right: "35px",
        zIndex: "10000",
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
        cursor: "pointer",
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
    searchBarCOntainer: {
        // display:"flex",
        // alignItems:'center',
        // position:"relative",
        marginRight: "24px",
        position: "absolute",
        top: 12,
        right: "300px"

    },
    searchBar: {
        display: "flex"
    },
    search: {
        [theme.breakpoints.up('lg')]: {
            width: "300px"
        },
        width: "200px",
        ouyline: "none",
        border: "none",
        padding: "8px 24px",
        border: `1px solid ${colors.gray}`,
        borderRadius: "40px",
        fontSize: "16px",
        lineHeight: "22px",
        color: colors.gray,
        '&:focus': {
            outline: "none"
        }
    },
    searchIcon: {
        position: "absolute",
        top: "8px",
        right: "8px",
        cursor: "pointer"
    },
    searchIconContainer: {
        marginRight: 24,
        position: "absolute",
        top: 15,
        right: "307px"
    },
    icon: {
        cursor: "pointer",
        marginTop: 5

    },
    categoryDetails: {
        backgroundColor: colors.primary,
        padding: "16px",
        textAlign: "center",
        marginTop: "-4px",
        fontSize: 16,
        color: "#fff"
    },
    favIcon: {
        marginRight: "20px",
        color: "grey",
        cursor: "pointer",
        '&:hover': {
            color: colors.primary
        }
    },
    cartContainer: {
        display: "flex",
        alignItems: "center"
    },
    register:{
        marginLeft:" 40px",
        padding:"12px 20px",
        borderRadius:"4px",
        background:colors.primary,
        color:"#fff",
        fontWeight:700,
        cursor:"pointer",
        transform:"scale(1)",
        transition:"transform 250ms ease-in-out",
        '&:hover':{
            transform:"scale(1.03)"
        }
    }

}))
const TopBar = () => {
    const token = useSelector(state=>state.auth.token)
    const [profileRef, profileClickOutside] = useClickOutside()
    const classes = useStyles()
    const router = useRouter()
    const [categories, setCategories] = useState(false)
    const [sunGlasses, setSunGlasses] = useState(false)
    const [brands, setBrands] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const dispatch = useDispatch()


    const categoriesList = useSelector(state => state.categories.categoriesList)
    const cart = useSelector(state=> state.cart.cart)




    useEffect(() => {
        dispatch(getCategoriesList())
    }, [])

    // useEffect(()=>{
    //     if(token){
    //         dispatch(profileFetch())
    //     }
    // },[token])

    const collapseContainer = (e) => {
        if (e) {
            e.stopPropagation()
        }

        setDropDown(false)
    }

    useEffect(() => {
        if (profileClickOutside) collapseContainer()
    }, [profileClickOutside])

    useEffect(()=>{
        dispatch(getCartList())
    },[])

    const [ update, setUpdate ] = useState(false)


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 4,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: colors.primary
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
    const handleDropDown = (e) => {
        console.log(e, "event")
        e.isPropagationStopped()
        e.isDefaultPrevented()
        e.defaultPrevented = true
        setDropDown(!dropDown)
    }
    console.log(categories, "eyq")
    return (
        <>
            <div className={classes.topBar}>
                <div className={classes.topBarContainer}>
                    <h2 onClick={() => router.push('/')} className={classes.logoText}>Book Store</h2>
                    {/* <ul className={classes.links}>
                    <li className={classes.link}>EyeGlasses</li>
                    <li className={classes.link}>Sunglasses</li>
                    <li className={classes.link}>Brands</li>
                </ul> */}
                    <ul className={classes.links}>
                        <li onClick={() => router.push('/products')} className={classes.link}>

                            Products

                        </li>
                        <li className={classes.bookCategories}>
                            <div>
                                <span>
                                    Categories
                                    <ArrowDropDownIcon />
                                </span>
                                <div className={classes.booksCategoriesContainer}>
                                    {categoriesList.length > 0 ? categoriesList.map((cat, index) => {
                                        console.log(cat, "cc")
                                        return (
                                            <div onClick={()=>router.push(`/categories/${cat.id}`)} className={classes.categories}>
                                                <img src={cat.image} className={classes.categoriesImg} />
                                                <div className={classes.categoryDetails}>{cat.category_name} </div>
                                            </div>
                                        )
                                    })
                                        : ""}
                                </div>
                            </div>

                        </li>

                    </ul>
                    <div className={classes.right}>
                        <div className={classes.info}>
                            {showSearch ?
                                <div className={classes.searchBarCOntainer}>
                                    <div className={classes.searchBar}>
                                        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" type="text" className={classes.search} />
                                        {searchValue.length > 0 ? <CloseOutlinedIcon onClick={() => setShowSearch(false)} className={classes.searchIcon} /> :
                                            <SearchIcon onClick={() => setShowSearch(false)} className={classes.searchIcon} />
                                        }
                                    </div>

                                </div>
                                : <></>
                            }
                            <div className={classes.cartContainer}>
                                <FavoriteOutlinedIcon className={classes.favIcon} />
                                {/* <ShoppingCartIcon onClick={()=>router.push('/cart')} className={classes.cartIcon} /> */}
                                <IconButton onClick={()=>router.push('/cart')} aria-label="cart">
                                    <StyledBadge badgeContent={cart.length} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </div>
                        </div>
                        {(token) ? (
                            <>
                                <div onClick={handleDropDown} className={classes.userContainer}>
                                    <span>Profile</span>
                                    <AccountCircleOutlinedIcon className={classes.personIcon} />
                                    {dropDown ? <ExpandLessIcon className={classes.dropDownIcon} /> : <ExpandMoreIcon className={classes.dropDownIcon} />}
                                </div>


                                {dropDown &&

                                    <div className={classes.dropDown}>
                                        <div className={classes.dropDownContainer}>
                                            <div onClick={() => router.push('/account-details')} className={classes.option}>
                                                <span>Account Details</span>
                                            </div>
                                            <div onClick={()=>{localStorage.removeItem('token');window.location.reload()}} className={classes.option}>
                                                <span>Logout</span>
                                            </div>
                                        </div>
                                    </div>

                                }
                            </>
                        ) : <PrimaryButton actionClick={()=>router.push('/register-account')} title="Register" style={{marginLeft:40}}/>
                        }
                    </div>
                </div>
                <ul className={classes.resLinks}>
                    <li className={classes.bookCategories}>
                        <div>
                            <span>
                                Categories
                                <ArrowDropDownIcon />
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
