import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useRouter } from 'next/dist/client/router';
const useStyles=makeStyles(theme=>({
root:{
boxShadow:"0px -1px 0px rgba(0, 0, 0, 0.1)",
padding:"13px 16px",
position:"fixed",
zIndex:"100000000000000000000000000000000000000000000000000000000000",
bottom:0,
width:"100%",
height:"80px",
background:"#fff",
[theme.breakpoints.up('md')]:{
    display:"none"
}

},
stickyBottonNavBarContainer:{
    width:"100%",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-evenly"  
},
navLinkContainer:{
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
},
navLinkText:{
    fontSize:"12px",
    marginTop:7,
    '&:hover':{
        color:colors.primary
    }
},
icon:{
    '&:hover':{
        color:colors.primary
    }

}
}))
     
const StickyBottomNavBar = () => {
    const classes=useStyles()
    const router=useRouter()
    return (
        <div className={classes.root}>
            <div className={classes.stickyBottonNavBarContainer}>
                <div onClick={()=>router.push('/')} className={classes.navLinkContainer}>
                    <HomeOutlinedIcon className={classes.icon}/>
                    <div className={classes.navLinkText}>Home</div>
                </div>
                <div onClick={()=>router.push('/search')} className={classes.navLinkContainer}>
                    <SearchOutlinedIcon className={classes.icon}/>
                    <div className={classes.navLinkText}>Search</div>
                </div>
                <div onClick={()=>router.push('/cart')} className={classes.navLinkContainer}>
                    <LocalMallOutlinedIcon className={classes.icon}/>
                    <div className={classes.navLinkText}>Cart</div>
                </div>
                <div onClick={()=>router.push('/account-details')} className={classes.navLinkContainer}>
                    <AccountCircleOutlinedIcon className={classes.icon}/>
                    <div className={classes.navLinkText}>Profile</div>
                </div>

            </div>
        </div>
    )
}

export default StickyBottomNavBar
