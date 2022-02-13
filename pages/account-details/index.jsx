import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import IconText from '@/components/elements/IconText'
import TopBar from '@/components/modules/TopBar'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Input from '@/components/elements/Input'
import { emailRegex } from '@/utils/index'
import AccountDetails from '@/components/Account/AccountDetails/AccountDetails'
import Divider from '@/components/elements/Divider'
import SecondaryButton from '@/components/elements/SecondaryButton'
import HomeLayout from '@/components/layouts/HomeLayout'
import AccountBook from '@/components/Account/AccountDetails/AccountBook'
import PrimaryButton from '@/components/elements/PrimaryButton'
import ChangeAccountPassword from '@/components/Account/AccountDetails/ChangeAccountPassword'
import SignOutAccount from '@/components/Account/SignOutAccount'
import AccountHelp from '@/components/Account/AccountHelp'
import AccountOrderHistory from '@/components/Account/AccountOrderHistory'
import { useMediaQuery } from '@mui/material'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

const sliderData=[
    {
        value:"Account Details",
        name:"account_details"
    },
    {
        value:"Address Book",
        name:"address_book"
    },
    {
        value:"Order History",
        name:"order_history"
    },
    {
        value:"Change Password",
        name:"change_password"
    },
    {
        value:"Help",
        name:"help"
    },
    {
        value:"Sign out",
        name:"sign_out"
    },
]

const useStyles=makeStyles(theme=>({
    mainContainer:{
        width:"70%",
        margin:"40px auto",
        marginTop:"105px",
        display:'grid',
        gridTemplateColumns:"250px auto",
        gridGap:'24px',
        [theme.breakpoints.down('lg')]:{
        width:"80%",
        marginTop:"120px"
        },
        [theme.breakpoints.down('md')]:{
            marginTop:"150px",
            gridTemplateColumns:"1fr",
            width:"90%",
            // overflow:"hidden"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:"150px"
        }
    },
    personInfoContainer:{
        padding:24,
        borderRadius:"4px",
        background:colors.mainGray,
    },
    subText:{
        fontSize:"16px",
        lineHeight:"22px",
        color:colors.black
    },
    headerText:{
        fontSize:"24px",
        fontWeight:"500",
        lineHeight:"28px",
        color:colors.black,
        marginTop:8
    },
    icon:{
        marginLeft:"40px",
        fontSize:"16px",
    },
    activeIcon:{
        marginLeft:"40px",
        fontSize:"16px",
        color:colors.primary
    },
    personSettingsContainer:{
// display:"flex",
// flexDirection:"column",
// alignItems:"center"
padding:"0 24px"
    },

   
    accountContainer:{
        // display:"flex !important",
        // gridTemplateColumns:"repeat(4,1fr)"
    },
    carousel: {
        // display:"none",
        [theme.breakpoints.down('md')]:{
display:"block"
        },
        '&  .slick-dots': {
            margin: 0,
            marginTop:'8px',
            padding: 0,
            width: '100%',
            'list-style-type': 'none',
            'text-align': 'center',
            display: 'block',

            '&  li': {
                display: 'inline-block',
                // 'margin-right': '10px',
                'vertical-align': 'top',
                // color:'red',
                // backgroundColor:'red',
                cursor: 'default',
                '&:last-child': {
                    'margin-right': 0,
                },
                '& button::before': {
                    display: 'none',
                },
                '&  button': {
                    display: 'block',
                    // 'vertical-align': 'top',
                    padding: 0,
                    'font-size': 0,
                    'border-radius': 0,
                    border: 'none',
                    width: '8px',
                    height: '8px',
                    backgroundColor:"#E8E8E8", //4B8AF3
                    // opacity:0.5,
                    'border-radius': '50%',
                    background: 'white',
                },
            },
            '& .slick-active': {
                '& button': { backgroundColor: 'white' },
            },
        },
    },

sliderDetails:{
    borderRadius:4,
    height:"64px",
    display:"flex !important",
    alignItems:'center',
    justifyContent:"center",
    
},
sliderText:{
    padding:"8px 16px",
    background:colors.background,
    margin:"0 12px",
    borderRadius:4,
    height:'100%',
    fontSize:12,
    lineHeight:"17px",
    color:colors.black,
    display:'flex',
    alignItems:'center',
    textAlign:'center'

},
activeSliderText:{
    background:"#A8FFB8"
}



}))
const AccountDetail = () => {
    const classes=useStyles()
    const active=useMediaQuery("(min-width:900px)")
    const [accountName,setAccountName]=useState("account_details")


   const accountDetailsHandler=(value)=>{
setAccountName(value)
   }
   const carouselStandard = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
    // nextArrow: <ArrowForwardIosOutlinedIcon />,
    // prevArrow: <ArrowBackIosOutlinedIcon />,
    // responsive: [
    //     {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 2,
    //             infinite: true,
    //             dots: true,
    //         },
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 2,
    //             initialSlide: 4,
    //         },
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 2,
    //             initialSlide: 4,
    //         },
    //     },
    // ],
}
   console.log(accountName,"name")
    return (
        <HomeLayout>
        <div className={classes.root}>
            <TopBar/>
            <div className={classes.mainContainer}>
                <div className={classes.accountDetailsInfoLeft}>
                    <div className={classes.personInfoContainer}>
                        <div className={classes.subText}>Welcome!</div>
                        <div className={classes.headerText}>Kishor Ghising</div>
                    </div>
                    {active?
                    <div className={classes.personSettingsContainer}>
                    <IconText name={accountName} value="account_details" actionClick={()=>accountDetailsHandler("account_details")} style={{justifyContent:"space-between"}} title="Account Details" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="account_details"?classes.activeIcon:classes.icon}`}/>}/>
                    <IconText name={accountName} value="address_book" actionClick={()=>accountDetailsHandler("address_book")} style={{justifyContent:"space-between"}} title="Address Book" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="address_book"?classes.activeIcon:classes.icon}`}/>}/>
                    <IconText name={accountName} value="order_history" actionClick={()=>accountDetailsHandler("order_history")} style={{justifyContent:"space-between"}} title="Order History" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="order_history"?classes.activeIcon:classes.icon}`}/>}/>
                    <IconText name={accountName} value="change_password" actionClick={()=>accountDetailsHandler("change_password")} style={{justifyContent:"space-between"}} title="Change Password" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="change_password"?classes.activeIcon:classes.icon}`}/>}/>
                    <IconText name={accountName} value="help" actionClick={()=>accountDetailsHandler("help")} style={{justifyContent:"space-between"}} title="Help" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="help"?classes.activeIcon:classes.icon}`}/>}/>
                    <IconText name={accountName} value="sign_out" actionClick={()=>accountDetailsHandler("sign_out")} style={{justifyContent:"space-between"}} title="Sign out" icon={<ArrowForwardIosOutlinedIcon className={`${accountName==="sign_out"?classes.activeIcon:classes.icon}`}/>}/>
                    
                                        </div>
                :""
                }
               
                
                {/* <Slider className={classes.carousel} {...carouselStandard}>
                    {sliderData.map((data,index)=>{
                    return(
                        <div key={index} className={classes.sliderDetails}>
                            <div className={`${classes.sliderText} ${accountName==data.name&&classes.activeSliderText}`} onClick={()=>accountDetailsHandler(data.name)}>
                            {data.value}
                            </div>
                        </div>
                        )   
                        
                    })}
                </Slider> */}
                   
                </div>
                {accountName==="account_details" &&<AccountDetails/>}
                {accountName==="address_book" && <AccountBook/>}
                {accountName==="change_password" && <ChangeAccountPassword/>}
                {accountName==="sign_out" && <SignOutAccount/>}
                {accountName==="help" && <AccountHelp/>}
               {accountName==="order_history" && <AccountOrderHistory/>}
        </div>
        </div>

        </HomeLayout>
    )
}

export default AccountDetail
