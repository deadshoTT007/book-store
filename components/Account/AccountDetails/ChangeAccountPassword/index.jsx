import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import ChangePasswordInput from './ChangePasswordInput'
const useStyles=makeStyles(theme=>({
changePasswordBanerContainer:{
    padding:"16px 40px",
    borderRadius:4,
    background:colors.background,
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
},
headerText:{
    // height:"75px",
    display:'flex',
    alignItems:'center',
    fontWeight:"500",
    fontSize:"20px",
    margin:"24px 0",
    lineHeight:"25px",
    // padding:"16px 40px",
    color:colors.black,
    [theme.breakpoints.down('md')]:{
    // height:"auto"
    }
},
changePasswordContainer:{
    padding:"24px",
    background:colors.background,
    margin:"24px 0",
    borderRadius:4
},
changePasswordText:{
    fontSize:16,
    fontWeight:500,
    lineHeight:"19px",
    color:colors.black,
    marginBottom:8
},
descriptionText:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black
}
}))
const ChangeAccountPassword = () => {
    const classes=useStyles()
    const [changePassword,setChangePassword]=useState(false)
    const changePasswordHandler=()=>{
        setChangePassword(false)
    }
    return (
        <div className={classes.main}>
            <div className={classes.changePasswordBanerContainer}>
                <div className={classes.headerText}>Change password</div>
            </div>
            {changePassword?<ChangePasswordInput changePasswordHandler={changePasswordHandler}/>:
            <div className={classes.changePasswordContainer}>
            <div className={classes.changePasswordText}>Change password</div>
            <div className={classes.descriptionText}>You will be redirect to change password page. You have to verify yourself to change new password.</div>
            <PrimaryButton actionClick={()=>setChangePassword(true)} title="Change password" smallParentStyle={{justifyContent:"flex-start"}} style={{marginTop:"24px"}}/>
        </div>
            }
            
        </div>
    )
}

export default ChangeAccountPassword
