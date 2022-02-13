import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import {colors} from '../../../utils/index'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SecondaryButton from '@/components/elements/SecondaryButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRouter } from 'next/dist/client/router';
import Divider from '@/components/elements/Divider';
const useStyles = makeStyles(theme => ({
    topBar: {
        position:"fixed",
        top:0,
        zIndex:"10",
        background:"#fff",
        width: "100vw",
        // minHeight: "5vh",
        // overflow: "hidden",
        // minHeight: "8vh",
        boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down('sm')]: {
        }

    },
    topBarContainer: {
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",

        justifyContent: "space-between",
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
        color: "#000",
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
        padding: "10px 10px",
        fontSize: "16px",
        lineHeight: "22px",
        transition: "all 250ms ease-in-out",
        color: colors.black,
textDecoration:"none",
        '&:hover': {
            color: colors.primary,
        },
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
    iconContainer: {
        borderLeft: "1px solid #000",
        borderRight: "1px solid #000",
        padding: "0 20px",
        display: "flex",
        alignItems: "center"
    },
    cartIcon: {
        marginRight: "10px",
        cursor:"pointer"

    },
    personIcon: {
        marginLeft: "10px",
        cursor:"pointer"
    },
    search: {
        margin: " 0 20px",
        display: "flex",
        alignItems: "center"
    },

    dropDownIcon: {
        marginLeft: "10px",
        cursor: "pointer"
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
            padding: "20px 0",
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
        color: colors.black,
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
    eyeGlasses: {
        width: "100vw",
        zIndex:"10000000",
        // minHeight: "400px",
        backgroundColor: colors.background
    },
    eyeGlassesContainer: {
        position:'fixed',
        top:"60px",
        width:"100%",
        zIndex:"1000",
        background:"#F5FFF7",
        userSelect:"none",
        padding: "24px 80px",
        display: "flex",
        alignItems: "center",
        '&>*': {
            flex: "1",
            margin: "0 10px",
            [theme.breakpoints.down('md')]:{
                display:'flex',
                justifyContent:"space-between",
               
            }
        },
        [theme.breakpoints.down('lg')]:{
top:"90px"
        },
        [theme.breakpoints.down('md')]:{
            display:"block",
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
            width: "100%",
            height: "300px",
            borderRadius: "4px",
            objectFit: "cover",
            [theme.breakpoints.down('md')]:{
                width:"200px",
                height:"120px",
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
        top: "60px",
        minWidth: "135px",
        right: "20px",
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
   

}))
const TopBar = () => {
    const classes = useStyles()
    const router=useRouter()
    const [eyeGlasses, setEyeGlasses] = useState(false)
    const [sunGlasses, setSunGlasses] = useState(false)
    const [brands, setBrands] = useState(false)
    const [dropDown, setDropDown] = useState(false)
const [showSearch,setShowSearch]=useState(false)
const [searchValue,setSearchValue]=useState("")

    const handleClick = (name) => {
        if (name === "eyeGlasses") {
            setEyeGlasses(true)
            setSunGlasses(false)
            setBrands(false)
        }
        else if (name === "sunGlasses") {
            setEyeGlasses(false)
            setSunGlasses(true)
            setBrands(false)

        }
        else {
            setEyeGlasses(false)
            setSunGlasses(false)
            setBrands(true)
        }
    }
    const handleDropDown = () => {
        setDropDown(!dropDown)
    }
    console.log(eyeGlasses,"eyq")
    return (
        <>
            <div className={classes.topBar}>
                <div className={classes.topBarContainer}>
                    <h2 onClick={()=>router.push('/')} className={classes.logoText}>Chasma Ghar</h2>
                    {/* <ul className={classes.links}>
                    <li className={classes.link}>EyeGlasses</li>
                    <li className={classes.link}>Sunglasses</li>
                    <li className={classes.link}>Brands</li>
                </ul> */}
                    <ul className={classes.links}>
                        <li className={classes.link}>
                            <Link href="#" className={classes.navlinks}>
                                <a className={`${classes.link} ${eyeGlasses ? classes.active : ""}`} onClick={() => handleClick("eyeGlasses")}>EyeGlasses</a>
                            </Link>
                        </li>
                        <li className={classes.link}>
                            <Link href="#" className={classes.navlinks}>
                                <a className={`${classes.link} ${sunGlasses ? classes.active : ""}`} onClick={() => handleClick("sunGlasses")}>Sunglasses</a>
                            </Link>
                        </li>
                        <li className={classes.link}>
                            <Link href="#" className={classes.navlinks}>
                                <a className={`${classes.link} ${brands ? classes.active : ""}`} onClick={() => handleClick("brands")}>Brands</a>
                            </Link>
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
                     :
                     <div className={classes.searchIconContainer}>
                     <SearchIcon onClick={()=>setShowSearch(true)} className={classes.icon} />
                     </div>    
                        }                                       
                            <div className={classes.iconContainer}>
                                <ShoppingCartIcon onClick={()=>router.push('/cart')} className={classes.cartIcon} />
                                <AccountCircleOutlinedIcon onClick={()=>router.push('/account-details')} className={classes.personIcon} />
                            </div>
                        </div>

                        <div onClick={handleDropDown} className={classes.userContainer}>
                            <span>Nepali</span>
                            <img className={classes.profileImage} src="data:image/png;base64,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" />
                            {dropDown ? <ExpandLessIcon className={classes.dropDownIcon}  /> : <ExpandMoreIcon className={classes.dropDownIcon} onClick={handleDropDown} />}
                        </div>

                        {dropDown ?
                            <div className={classes.dropDown}>
                                <div className={classes.dropDownContainer}>
                                    <div className={classes.option}>
                                        <span>Nepali</span>
                                        <img className={classes.profileImage} src="data:image/png;base64,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" />
                                    </div>
                                    <Divider style={{backgroundColor:"#32AE49",width:"80%",margin:"0 auto"}}/>
                                    <div className={classes.option}>
                                        <span>Nepali</span>
                                        <img className={classes.profileImage} src="data:image/png;base64,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" />
                                    </div>
                                </div>
                            </div>
                            : ""}

                    </div>
                </div>
                <ul className={classes.resLinks}>
                    <li className={classes.resLink}>
                        <Link href="#" className={classes.navlinks}>
                            <a className={`${classes.link} ${eyeGlasses ? classes.active : ""}`} onClick={() => handleClick("eyeGlasses")}>EyeGlasses</a>
                        </Link>
                    </li>
                    <li className={classes.resLink}>
                        <Link href="#" className={classes.navlinks}>
                            <a className={`${classes.link} ${sunGlasses? classes.active:""}`} onClick={() => handleClick("sunGlasses")}>Sunglasses</a>
                        </Link>
                    </li>
                    <li className={classes.resLink}>
                        <Link href="#" className={classes.navlinks}>
                            <a className={`${classes.link} ${brands? classes.active:""}`} onClick={() => handleClick("brands")}>Brands</a>
                        </Link>
                    </li>
                </ul>
            </div>
            {eyeGlasses ?
                <div className={classes.eyeGlasses}>
                    <div className={classes.eyeGlassesContainer}>
                        <div className={classes.categories}>
                            <img src="https://cdn.shopify.com/s/files/1/0030/2661/6355/articles/GLCO_Movies_Oldman-hero_300x300.jpg?v=1619383574" className={classes.categoriesImg} />
                            <SecondaryButton smallStyle={{width:"170px"}}  smallParentStyle={{justifyContent:"flex-start"}} parentStyle={{justifyContent:"center",alignItems:"center"}} style={{marginTop:16}} title="For Mens"/>
                        </div>
                        <div className={classes.categories}>
                            <img src="https://i.pinimg.com/474x/5a/39/8f/5a398fa7f26d5d5453e7f2856b632637.jpg" className={classes.categoriesImg} />
                            <SecondaryButton smallStyle={{width:"170px"}} smallParentStyle={{justifyContent:"flex-start"}} parentStyle={{justifyContent:"center",alignItems:"center"}} style={{marginTop:16}} title="For Womens"/>
                        </div>
                        <div className={classes.categories}>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYVGRgaGhwYGhgYGBgYGBgaGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy42NTEBDAwMEA8QHhISHzQkJCQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDE0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA+EAABAwIEBAMGBAQFBAMAAAABAAIRAyEEEjFBBSJRYQZxgRMyQpGhsVLB0fAjYoLhBxSi0vEVFlOSJENy/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAkEQACAgEFAAICAwAAAAAAAAAAAQIREgMhMUFRYYEikQRCUv/aAAwDAQACEQMRAD8A8sDQnDQpNe38I+qm2oz8DfqsKOiylzAo5Fc9zTo0DyTEDoPkgREsHVLKFKB2+SdtIdQEB9EfZhT9kOqY0h1Tmm0blH2H0IUwn9mEmtYnIYlT9Ha8GDQnyBNlZ3SFJkap0F/BZ7MJ8gVYY3uk0N/YKVP0LXhMUwpezHVUkNSbCrF+iyXgU2h3+qk2mBuqAB3+Ssys/mSxl6VmvCYaOqn7MKkMb3U20gjF+hl8FjaQG6l7FVGk3qVIU2dSjF+jyXhY2gFY7DjqFV7JvVPkZ+5Sp+hkvBOpeSi9o6qRYzt9UjRb0H1TSE2DnzROGw87pU6bAZytPYyjGVmjSnT/ANX6ptiS9F7KE7Wd0zKoDiSxhna8D6qQqt/Azyv+qQW/BnMThnmpCqD/APWz5u/VSdUb/wCNg9Xfqgd/BFtMlSFEqLHD8Dfm79VIPE+635u/VOmFrwl/lwkn9o38LP8AV+qSKYrXhxgKcKAUggRIFSDlBIJUOyQThRzJZkCLAUsyrzJFyKCyReolygXqJenQWWhykHofMpZkUGQU09FbSoON0NQdcC63KJawBztToEqYWimjgesk9B+aOZwhx0bl8hJ9SrsJiCDIbfW+3pqtB/FSGwWS7uRA8xt6Qh/AGDiMDG5P76AICowt/EPRbGJxz3auY0bBrQfqZlCPYNXG/kAfpCaBmeyteDEdUQHJ3YYHy9SqshbpcbW0RsCbLgQptAVQCkJTodlpapMaFANU2HsVLRSaHLQmDFcG20T5eyVlURbRVzKKTT2VklS2xpIj7JIs7KQB6JFhSGVwmLSplh7KQYeytEsoylW5QrBRJ2+oU2Yc9vmFWSIxYPHZJGexPT7JKskLFnC5k+ZMClKCB8yReolMihWyWZNmUUxKdBZIlMXKJKYlAhyUpUCU0p0BOU4cq8ysoiSigsPw3KMx/utHDaF5BLj8X4R0b0Pf8llU7nsP3K26ALwJBjYdot6n81BSC8PijENAaPqfM6/vVUYp8uGh6CLCd4TspEabkeg/SyLw+Bkkunr3PYfb0UloHp0wb3A2O56qL6UCLntK22UrZGt2uRbvA7I3D8ItJG3mfRS5JFqNnNUKO0R6IxvDS8coki0dVrf5CDYfsrf4XgMgzHupchuNHnuNwGR0W9EMWQul4tgzmf5yFzdQnotou0ZSVMYPCk16oyqQCdILYS1/dSc62qHYR0UmnsodFJl1J6va9CteBsptegpMJa9KeyHLzsrGvQBbZWAjoh/aBSa8IEFNeOiReNpQvtE+ZFCsLDm90kHISTpBbONlNKZJWY2PKYlJNCAESkSkmQAxKjKchMQqAiSlKRTIJHVtMxKqCnTQxoNwz4F/XyW1w6uNzAi58zf99lgNct3g3CH1iJOVn39FlJ0bQjZrYSuHXaOw+/5LX4TSL3REyfQAaBaGD8OsDA3M+N4IE/ISuh4bgmUxlY0D7nzKxcrNcUgbC8MHTy9FrNwQ3RVNoROWyVCcnZijh7cwtYfVX1KVoRNWyDrPsoG7ZgcTwwJXH8UwuV5ad7j1XfYmnI8lxPickvZGoJHmCP7LfTZnJGC+nCjlSxdXI4Axf5qArBaMSothKFAVEi8pDtEyFNqoDypB5ToWSLVMKpjiVYCUqKTLAE4aVFrlY09yluPYbIU7QpeqRCe4th8vdJQhJAjkMw7pF4VrXx8ITF3YKrM6Ks4TZwrD5BNbojYVMqLwmzBWuLeigXN6KkJkMwTZlIuHRNI6JiGzJSiMNg6lQkUqb3kCSGNLoHeBZanDvCmLrCWUXAdXQwf6rlDaXIJN8GHIUmkSu9H+GzyyW1mGpuwtIbPTNM+sLDf4PxLX5HUoj4i4ZT5EXPyUZxfZWEuDLwtEZgTou94MYAWRxHwpVw1FtV72OBcGw0ukTobjstDgj5AWM3Z0aax5O2wb7BaFF11lYAiLkfNajCOoWVM0k0alEq8ILD1RGoss7FccbJbTl7hrkEx5nQeqtJsxbVmvVCAxbgGk9LwsV+PeXc72M7OfJ/8AUfqrazXOYXMfSeQJjKf9yHApSfhLh724hpDHBsGNLoHjnhXk9oKsluzm6k2EEHv0QXBMeXva1rGNeXgHI0CWgy6fSU3E6mKw2SlVIdTL2kVOY5r2a9x0I76wm4uPY4yU5VVUdCygymyjQLGOD5zB7WuECJsRBJJVLPDuFbiSxuGpRlBILZEu6NNhpsN1PH4oZ8K/4Ycyf5jlI+gKPx9X2ddlU+5Ua1s7B4mJ8wfos7ZWNvj0IfwHBkZXYej0sxoPoQJWDxvwBRcxzsNLHgSGZiWO/l5pI85WrxLGFlRjmw72nKDsIuQVtYSS2SZP0+SuMnZEo0rPA8kEtNiDBB1BFiCNirAwdQt/x9wltPFucBDao9oI0zGz/qJ/qXNCi3qVqmRQSKY6/UJ/Z9/qhxSH4vopCn3TtBT8LvZ91JlPuqm0e6l7LunYUwhtLupBiGbRPVTZRg3KX2L6LfZpJ8g/ZKZA/o4zMkSowkrozsWZIuSlNKBNjFRITylmVCGhdX4Q8JnEfxKkikNhYuj7DuuUJXu3hKmBRY1oFmgRpoFnqSaWxenFN79EqHssO1jWtaxh5eUAAHaY6rWD2kZ2X69/7puJ4bOxzHMaZHUH7rk+G4mphCRUY80p7HL9dFy8nXGEWjpeK1AymazJ5RmMXlo1+Qv6IGnVbiqZLHAOIJa7XK7QKzh2PY9xbYMdJaJBtuP31WXwDw6+lVqFtSGZyGBuhbtM77W6IopJR5/Zh124h9anhq7gD7sloc0uEy4TIMxaNiEPh8C91R9Nz5DHFsiSDG4BWx4+4iyk6i0QXtdn1vlnc9yPus3BYV7QTScCHjlcb2O/mNxsQuhSuKa2OdJZO97Lca3CUBD383QXPyCEZjqQBdTfUbt8bHAxIjQGxHzRb/DLKjMj3Ec2Zz45ydNeijj+GsAFJmd7iQ4ue5znOLWho1OzQB0ACacfXYmpXulQRwxuLrUnvbUJaATltndA5oMT9Vu4NmbCMNOACwTlsQ7R/rMpvCD8pLPw/s/WVoN4c+i95ota+m8kupOMQ46lh2noplO9hR08XZxOO8MmpiC6mW5HMyn2gzOaTEuZezrSDtOi63hvh5rBZxktAIaSG2ETHU9URkIMjDPB7uZHzzI3DYOs8Xc2m065ed8diQA36pSm2qZaUY7qzigw0H56U8kF5195zhB8w1dph6tLFUg14a5p1aeo6q9/CGNY5gbZ2pN3OPUnqvPcTi34So/msPh69I7qG8tvCo1u+OzqcVwnKx1E5yJDqTwZIIuJPbSTr3V+BzupuoYpjbtjcteDux2x7aj5ILhfiJmIDCDcTI3m2vyK6rD1GvCVFObXJxGEdXOIYyqZbTEMtBdPxPO7oAXfYP3VzuPpgYhrurSPULbwFQBt0k9xS/JI5P8AxQwhNOlVA9x5aT0DxafVo+a88dh3ABzmuAddpIIDo1g7r1vjWKbWmgAC0j+IbQG6/OyDxWBp1KWR4loENiAOUQCw9QJt91tBWjnnPFpHmDWKYYtHi3AamHcc4JZPK+DB6T0KzQniWpJq0WBnZLKOijCfKnQ7HgdEmu7JMancy+qKJsnHYpKWXzSRQ7OITJklZgJRKkmTArTwpwlCdiogvd/BlQGiw/yj7Lxjh3DKlcuFNoOUSSXBoA8yfovU/A5c2lTB/CFlrcGmly0d3XZIWLxXCCoMmQdSYHot9gkKupS0PouZ8m6dHP8ADfD1NrTLdQQTvfoj8diWYei97oDWNLneg27k/dHueGiF49/iT4l9s/8Ay9N0sYecg2c8bdw37+S0jDJkz1XW5znEeMHEVn1KnxukfygWaPQAfVdH4YGblzvA/lcW+tiuDXUeD8XlfBOhHyK1nGlaI0pXKmep4bgbHAZn1D/W4fYonEYFlNji1rWiJJ3MdTqfVNwzFggQm44RUYaYflLhque2+WbtJMzvDBzPe7STaei697QPiaPVcVh8PUBYA/Lk3AEO8wR+a6nDsBEPhx7gIaBlmILozAT5fkrMDxAOHfcbpsRi2MFyPIa+gWDjaVQvbVYMnM0EbuaTfONBbRJqtxJWqZ0VevJheXf4lUwKjHdQ76ZV6W0WXmf+Ig9riGMY5uamwktJgy8z9mhXpq5ETaUTk8FjXU3h7DB+h7FejeGvFbH8rjlf0J18juvMTSLTDgQe6QG62lBMzUmj2rGYoETOhkHssjiHHXABjLuNh27lcDhON1mDKXFzejtR5FbuFcWjPY5hrAMGdIJuO3qFEdLfcqWolE7Lh9FrGhocM7hmL3RzOIuB1A7EEK1tQZg06g+4HAg2lz2wLEfnsSsLB15GSIn4D7ro3Y4ix7H5DVG0q5JlwbyzIJLXsNpgxz732A3BW6jRxybbtmq9odLNjMixiQLOYfzkrB4n4Upv5qLiyBJkEsNhp0PrutWnES50iBleAAL3FunzB7IpmcguFiDcn3S49ALkeaGCk1weeYzg9aldwBbrmaQ4X0ndvqECJXrYZ1DR1a6wII6HXVcT4h8Muac+HFjOamNRHxMn4dbJGsdT05xtlKfJCvc5pLXAtI1DgQR6FOx5O6dF5BgHknQHtT1SSxFkcokmShAh4ShKE0IAeEoTQjeF4E1agZMD3nGYhrfeid0xNnR+FaT2Mzt1cS7W2oa2R0MkrteFY5rXZCGtAOQQPiGoyjQaiyxMLSyNs1oAIhrgNYhgP9NztedCiaFDKIbmNoa6853GXWjrG3wd05RUlTIU3F2j0HCYyWyMrh1aQVOpXsuIZVe10Uzlc3K20AS46/zAad7oupxF7gWvvBggHLa+p1Gw2Kxeg+mbLXT5Rh+OvGWUOw9Bx9obPcLZARcNP4o32815YtXxJim1MRUewgtkNaRYENAbI7WssoLWMVFUiHK3bHhGcMxOSo122h8kIEk3uCdbnsPh/EC27T9Fs8Y4OXD2lJ5B1g3BXk3h/jb6XKZc0adR27hek8J8SMeyMwI01081yzg4uzqjqKS2AadTEh0ch7wZ+RK6DCsrOAzOPeBl+qCw8PcSDuugwR0EqXI1UklwTw3DmNObVx63hE1qUhEMaIQ+MrZRG5sBuVLMnJt2wTE1srT12XjWNovfiqzwTnDzmm4LXe5lHlAHkvWeIPDGF79en2aOpXI4DAZ6ji5uji57gJBdHK0Rflb9SttDlmWs0kgDiXCQ5gkcwEZrWOwAF7rkskGDtZekcTInK0X90D8QjWes28lx9bh4fUfGxObKCYI1k7T66rdxbRhCfpmNARNGu5vuuKIqcOGjc2YGCCLR1B/JOMCwDmcSd4EQZi4SUZWa5RaC8Bj7wZgxbaRvH6LpcO1zi10mRGWILmiLXHvs+vquMrYZo9xxLvwxr5Hdbvh7FkSx4InQkEHeMp0BvuqTfZlOK5R0NHFnNIFnbWIIJu/o25+yNZiA6G3A1EXmwIkdOoI2F0A3VrHcgfdrwSWmLyBO0ExpfdXsbEgZSREOEHMQTY7z+hQzM1KNXMC6Q5otlgkZToRLbmdItZOyvlENBBc6OzRBsI2v6lDUXGXNItAEbmAJtHU6SjKD2gwGuboDrPW4gR/ZSAFxng9Ouwh7ecXD2gZxYX6uFjZcHxDw/iKElzCWD4m3EdSNW+oXqLJc4k+6JgWM9yTony7EDp10Jj9+aCoyaPGcqdei1vDGHe4u5xJuG+6DvFuspIs0yieIZCllKZPKBiylRkqRTBMCTWu2+y7Dw3w7LTL3NOZ4LswmWgXbbcEgz/ZYHBcGalQTOVsF36fQ/JdthGG8EhumtyAbco/q02lNLsib6L2UsoDidIIvyl7ph1tRGnZaVFobZw9xtoiS6xcHfNo7yVSxxIYC0wIsBr2Lb3F+xEeSvZhYsDAzXiYkDvsYB9VZmSLDOUXAFgRqS2TbURBvrM+vMeMOIGjR9m0nNVsTOjW+9G97CfNdO2k8TN4JN9Zcb3Nzygj1XmPiTFOrYl4bzBsMaGibNsYjvKQ4rczsDw99UwxsxqTYDzK6HB+FgBmqOzdWtmAOpO61uFguY1jGZHRIgDUTZ3X/AIW3h2hwAPkZFgRtbeQihSkYTOC04tSbG1gTqOt+yDr8CaASGNEdv2F0mGJMtPvNdEjzlo0tY9/0biLMuYkA2zTJiZ6ehVE5M4OrSIzECwsdotdW4PCudzUXZXedjEC43kla3BaAe+q0jUTBjfe/lHqsjCk4fFBrpaA+J3AOhjtIUtI0UnZscF4/UpvyVWkEWJGnqNl6LwjjLHD3h81yeOw7CBUiTYOEc1xYn/jdFYOnFy0NAjYOIzSBJJAGi55advZHRHWio/kzuKfEQbNM+X6oetxFjT+N5sANB2zaBc+6pbncQ3XJZpi0BxGhN9tu6HNR7yG04DQCC8yGgQAcjTcmBN+qI6H+mRL+Qv6oK4hiHPflDpebG3JSaTrf4jb/AIUq1RlJhYx0Aa3uYBHXWT90JQLKTIaSZkucXNJcYvmJN9I7K6kwEB7mgzzjWwvceu9vzW0YpLY5pTcnuCcUJp08782epZgkQJ0GsGPL5KLcGKdK5MEEkg+84G4Pf+3RQDzVxDiZIpwACSYdobwfL5BG8Wc0tN7TMRNxqLa7a9VQkY+FaDmeZOXcDocxP72lRawQSGau6ERudNbmNEXw900XOiS49IOZzo5T5EzNtVcynkAdckiCDMReNNPiKC2zDxZLbNEzN22EHa+ipqY4NHNqRvaPMiZPb9FoYmkHvaJNuYkjLJiRaYAi/wAlnY7BZYzWmIF5IMiZ9EUNMMwHGw8ZHkxIMzpsMug9f1K6XguMb7rnDOBOYizhF3MdaBEfuI4Wu0sIa1sWk2iY6zuqBxypSMloIHU3aT+E+iGFWeotBcW5DBbJBJDfhi4EwL6FWOcYdmMQQY5g205Q7V3z6aLj+D+I2PyueHHqQRpvLTv3uuuwuJBMvaA03zNuDuATqLWspYmqDKLrRImJgaN9fMKwPMF+UQRI1vo1szp+V1TTxAJcYqBg5hA1MAgCBJgeSm17nHNbcAH4bgmYOunzUiD2MEDU2H28kyH9m03L3zvBEeiSBnzmnUJSBTo3JEpSmlXYWlme1v4nAek3+iYHZcFwQZhWuPvPdJiLBw5Z/p+juhWpw5kvDWkhwk7CxF4Ghv0SdUgMbGUN0iXZZJEEWjp6K3CsAhzRJMiOo1OW8zurRi3Zq0mAWBzGZkEXAJvl3uTcdbQifZ3DgdCXOMXt1jbS1kOykCGu5nX+KQQ6BFvIgx5KxsETIsYyluxEi94Fp+fkkIH4ziMtF+UmdnOEOuQ0Qe0j6rI4BSpCl/CytqG0RcmbSdYj7+S2OI4QOZkM5cwtvoXadQgcNwalmLmPIcIBy7yJaIN5/fVCohsow+Nc17adZuV+oJBDXgWBBi8W2WjhKd4YQed1xGhcTbqDP26KjiOCd7E5uZ7P4lNwJMEXAudDEesJuCYsPY5wLbO3BEFxBB69e4TEMCf8w5umZjT3sYI7kwrOItDmEb9nSSWkiNNSJQOJfGKZN5YWd5JkG4J736rQdlIcBPbZoA5tItaN0wOQL34d5cW5hN+0bxuLofipZVAfT96QCPXSDdb7XNewtPNBuD1I03EafJZ1DgYa9rhOTML3kAEGPLWx6bJUUpGxRYaLqYDpztky4Hmi4vowkzHWfTTe2GZhoZsIHvNOaQNb+qo4rQc+qwbZJ1aTd3vBxMbjbrCVHBObMuGXLpNpvpA2cCbj+wS2SqEANeGjOTcCTFtYOlxrqq8NjTUxTKIaQxrM7rkh2RpjrIlzfl3R9HC/CI1gwDJBvJE9JMRo1ZnAG5sZWIgltPJYEXdBcRPy80bUCZp0MJLtAGkkl0CJc4E2nrGo2HkbcXiBTY6XaAwJiJAEgR1v/V8iaNMCNiWwJmDGZwgXmbmew7RkcTeXvbSBJGbmtePyGl0gRfwSllpuzBxLuZzjmsTJEQIOsX7q3ir8zOYAC7Q4xmjINZEgyNba9kZhnOaDLbgcwkmxBAAnX/npCo4nlyPc3KOW+sxoQ87G/U6DrZdh2A8IZNFkNBMg3ECLXuDPn2PdWcRAYzNY6nUtAd0gREfr6R4E9vsg2QQWhpsAenMXQNz8x0RHFA19B24JkA5QQI92bzt9fJA3yZPDqZLcxiXGZ0FzzRF490a7nug8Uw+2sRDRIIMX6SbkDujuFPIbty6yLdQOt9L6KljcoLmkkuJcRpyzpHn6RsVRfYLjqDSGMZ7xc7MbnS5abXME9dFl8X4aCCBo0Z3W0JHu+gk+oXSYQDNLtMkusSRsDBgxfXoFnUGiphatV08+ctPYm2uloHomM5PhxyOyG03E79R3sfovSeGYhxaGyMhuAWicwiWg32uLaeS5D/pHtsO2sy7hmcfIaC2sAAequ4RjKrGgua51MnlcASRAMNdHmQpoHuegis4Gc0gbC2o5DfrpHWUbh6+UOlzpk3sBebAmBEfZYVDjbXDXJMSCAHecQCbR6FaNLijYAGXXXKA0GCNOqhoQSWjZtQ2FwAAbbBJPnd0f6NgeidIR87pJSlKs2HlanAaUvLiCQ0HTqf7SsuV1vh+kGtbO4zH1E3n0QJs3hJaLiIkazYAi49Fo4UHKObLNhbQFxJmwzEAD590CKc2YDB5SIMgxObNuNlo06Z0sXA3kZQRA2/TXKqMw2hV20mTvm1NzaA02vsrqbogNF5vMiLCIa0x0/d0MyzwC/wAw6SwgATFwZ7dirMM0yYMgFx7g9AfXpsPRCYFjq7gWhrC5rRJuSQ6+gMTbqZnTVB4tucl9F+So25aQ5hdYkZmusTJI6+i1S4NEXnpMjt9og7+hKZTze/BIvm3EiYDhrYOG+l+qdkAvD8Q6tScCMrwMr2HNnzCJkdxG15HZY3h2iWYitT0bLXN0+MSL+R+q2cU5tN7XktyvPs6haZGlnNO1je5TYYf/ACarhpyCWmbBuh9HfbVAAPFnFmIocztXAkzIHc/OI6hbGLcBMXsQ6ejRBmdbHceaw/FRh1F4N2mYuHCZsZHmB5LdwxLw140gdLG4sNelv1QDObkNqOZAySbAgROlxYorhuI52tMagm4IMiCJFrCLjoi+IYOAXNgwDcH4idQBpqLeWgWXwWn/ABAXWuQDuDsTtrtZPoEdHjnjOXEDNDYIiNLESNjqO/cpmuygcjpAJnoQ62g6xbvF7qx5LC7LmEDuRYw4CZ6D08lHDsyt/GBtoBzagxOpDrD8lIhmOEA5bkAkOcADBExYCRtA2MaSs7wqf4uIeRewgXmxIgD0v2HZaGKcOdrSMupzWM332Fj9egWX4SJD6xgHKRc294OAA+R16fM6GjeqsIBzG17TAbfrFxE/QbrO4dSL3mo6ZJ5TADYJIHSZkn6aKfE3ktyMObNqREgAgnX9hGYCnlayW80WDZdEHQmCDI/d0gRLEUNM0TuWtLokSNpjlhD4xgNMse4DlmQLHmt+ms6omiSAAQPeJNwcpO5IAHp33Q/EqsMeSCQdBGszpIgatMdd+oANwXnaC0EwHXibC/LbrbfXsiKrLESQAJDmkACbPGwN7fLcFUcHaAxhaG3A5jYeRAjcC5KIxTXWMZSDaDbNpF73g6f8Mb5MzFB4pkh3KYIIHvaHcX06JsMxuTo4uMSRHxGDJ11TlpzXA1yBpIbl1mZ94zl01iQinYciLkEm2nl9S36mdEykZnF6nssM86Zm5WkE6vtY9QB1VfBWZ8I5jdcmkA3BFvd6OO/wpvGRhtKlmDpJcSNo2+un6rI4TxF1F1pDTrG0hKy0rRreC3g03MfAguYe2u17XHbQoLAYo0KtXC1YLHzE95LSO8iyP4th8rv81htDl9oyLGZl0Aakai+u6Nq8Mp42kH3a+w6uk6AnzlAjS4U9poMbVLXVA4BrtxGXfy/ey0sQKTDnjnOs2i9yLwDrbsuZZwSvShjXhwAuSfWCfWUY7hlUwHOZqbFxi15na6loWxs/9Qo/+T5Af7Ulkf8ASH/ib/6j/cklSHseNJJJKixLs+FUvdE2sPRsWPaNkkkCkdFQp5GlzrCBMT/+o1OotbQn1RjQJcLkky0CACLiJjWDF0klRmNTIcJ5gAAT2Nrt5p92Z89yi3ENjTKbRf8Al5ojWSB6nzTpJMTBaeKac7IyuY8B0CRpmBEzsfuiH0HBuslx5dwSI1FonX73SSQyDP4mQ+k+DBZctAsC24PSbDT+6o8MPc5mbQOOYXtERBF/5dP1SST6H0UeMKJHs3XgQfeJAlxFgbiTstLg7oawv0PTaJ7dAfl3uySXQdBGKZ1OV1riI66RBNiENw7Cw9tjmLwCbWMflLTv90kkdAg5lJr2lzZIMjmDYgyXWM9zf9Id1QM+EAazAbcAT7s9CdPunSQSVVnmCQ4yN9ocBFtek+ayPDTiHVnkhx0kiepmCL36pJI6KQdhqUj2pc4ku9W3gADQ6zPVaNN+YNaBOhJtAJi8Ed2GPTqnSQxlrqGVu1tSNWkX/LUXmO6C4q/+GTtEnUWOl7n4RPkkkkhDcGcCwEtF83mXCQCb30+RKtrVQSN4JzEiQRYaE6ifkUkkxsHzNaA9wJbMXJcZ0ab6kelvIKUtcM8kgXHWOaOkdfNMkkUjA8TDPVAEcoA7XAJ9Yj5LHrMiQ7roNvJJJDNolmD4k6nIa4x3HzWrw7j+Qm1nGSDJE6SkkotlOKNP/u8wd/6egtuN/pZBVvFlQ6NFjIn0tA8h9eqZJAKCK/8AuCv+KPQJJJKLZpgj/9k=" className={classes.categoriesImg} />
                            <SecondaryButton smallStyle={{width:"170px"}} smallParentStyle={{justifyContent:"flex-start"}} parentStyle={{justifyContent:"center",alignItems:"center"}} style={{marginTop:16}} title="For Kids"/>
                        </div>

                    </div>
                </div>
                : ""}
        </>
    )
}
export default TopBar
