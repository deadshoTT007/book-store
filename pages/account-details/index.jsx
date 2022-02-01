import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import IconText from '@/components/elements/IconText'
import TopBar from '@/components/modules/TopBar'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Input from '@/components/elements/Input'
import { emailRegex } from '@/utils/index'
import AccountDetails from '@/components/Account/AccountDetails/AccountDetails'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Divider from '@/components/elements/Divider'
import SecondaryButton from '@/components/elements/SecondaryButton'
import HomeLayout from '@/components/layouts/HomeLayout'
import AccountBook from '@/components/Account/AccountDetails/AccountBook'
import PrimaryButton from '@/components/elements/PrimaryButton'
const useStyles=makeStyles(theme=>({
    mainContainer:{
        width:"70%",
        margin:"40px auto",
        marginTop:"105px",
        display:'grid',
        gridTemplateColumns:"250px auto",
        gridGap:'24px',
        [theme.breakpoints.down('md')]:{
            marginTop:"140px"
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:"180px"
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
        fontSize:"16px"
    },
    personSettingsContainer:{
// display:"flex",
// flexDirection:"column",
// alignItems:"center"
padding:"0 24px"
    },

addressBookTextContainer:{
    padding:"16px 40px",
    background:colors.mainGray,
},
addressText:{
    textAlign:'center',
    fontWeight:"500",
    fontSize:"20px",
    lineHeight:"24px",
    color:colors.black,
    margin:"16px 0",
    height:"40px",
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
mainListContainer:{
},
mainPersonDetailsContainer:{
    padding:"24px",
    borderRadius:4,
    background:colors.background,
    margin:"24px 0"
    
},

personDetailsContainer:{
    display:'flex',
    justifyContent:"space-between"
},




}))
const AccountDetail = () => {
    const classes=useStyles()
    const [showMore,setShowMore]=useState(false)

   
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
                    <div className={classes.personSettingsContainer}>
<IconText style={{justifyContent:"space-between"}} title="Account Details" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>
<IconText style={{justifyContent:"space-between"}} title="Address Book" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>
<IconText style={{justifyContent:"space-between"}} title="Order History" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>
<IconText style={{justifyContent:"space-between"}} title="Change Password" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>
<IconText style={{justifyContent:"space-between"}} title="Help" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>
<IconText style={{justifyContent:"space-between"}} title="Sign out" icon={<ArrowForwardIosOutlinedIcon className={classes.icon}/>}/>

                    </div>
                </div>
                {/* <AccountDetails/> */}
                <div className={classes.addressBookContainer}>
                    <div className={classes.addressBookTextContainer}>
                        <div className={classes.addressText}>Address Book</div>
                    </div>
                    <div className={classes.mainPersonDetailsContainer}>
                    <div className={classes.mainListContainer}>
                        <div className={classes.personDetailsContainer}>
                            <div className={classes.personHeaderText}>Kishor Ghising</div>
                            {showMore ? <ExpandLessOutlinedIcon onClick={()=>setShowMore(false)} className={classes.bigIcon}/>:
                            <ExpandMoreOutlinedIcon onClick={()=>setShowMore(true)} className={classes.bigIcon}/>
                            
                            }
                        </div>
                    </div>
                    {showMore && <AccountBook/>}
            </div>
                    <PrimaryButton title="Add new address book" parentStyle={{justifyContent:"center"}}/>
        </div>
        </div>
        </div>

        </HomeLayout>
    )
}

export default AccountDetail
