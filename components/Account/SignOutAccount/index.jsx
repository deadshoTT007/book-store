import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import { useRouter } from 'next/router'


const useStyles=makeStyles(theme=>({
signOutContainer:{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    background:colors.background,
    padding:"16px 40px"
},
signOutMainContainer:{
    margin:"24px 0",
    padding:"24px",
    background:colors.background,
    borderRadius:4
},
headerText:{
    fontSize:20,
    lineHeight:"25px",
    fontWeight:500,
    // marginBottom:8,
    color:colors.black,
    // height:'65px',
    display:'flex',
    margin:"24px 0",
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
        // height:"auto"
    }
},
description:{
    fontSize:16,
    lineHeight:"22px",
    color:colors.black
},
signoutText:{
    fontSize:16,
    lineHeight:"19px",
    color:colors.black,
    fontWeight:500,
    marginBottom:8
}
}))
const SignOutAccount = () => {
    const router = useRouter()
    const classes=useStyles()
    return (
        <div className={classes.main}>
            <div className={classes.signOutContainer}>
                <div className={classes.headerText}>Sign Out</div>
            </div>
            <div className={classes.signOutMainContainer}>
                <div className={classes.signoutText}>Signout</div>
                <div className={classes.description}>You will be signout from you account.</div>
                <PrimaryButton title="Signout" actionClick={()=>{ localStorage.removeItem('token'); window.location.reload(); router.push('/') }}  smallParentStyle={{justifyContent:"flex-start"}} parentStyle={{justifyContent:"center"}} style={{marginTop:24}} />
            </div>
            
        </div>
    )
}

export default SignOutAccount
