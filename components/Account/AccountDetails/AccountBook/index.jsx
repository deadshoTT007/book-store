import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import Divider from '@/components/elements/Divider'
import SecondaryButton from '@/components/elements/SecondaryButton'
const useStyles=makeStyles(theme=>({
    personDetailsTextContainer:{
        display:"grid",
        // gridTemplateColumns:"auto auto",
        gridTemplateColumns:"300px 300px"
    },
    personDetails:{
        marginTop:"24px"
    },
        personSubHeaderText:{
        fontSize:"12px",
        lineHeight:"17px",
        color:colors.gray,
        marginBottom:4
        },
        personHeaderText:{
            fontSize:"16px",
            lineHeight:"22px",
            color:colors.black
        },
        buttonContainer:{
            display:'flex',
            justifyContent:"flex-end",
            alignItems:'center',
            marginTop:24                                                                                                                        
        }
}))

const AccountBook = () => {
    const classes=useStyles()
    return (
        <>
        <Divider style={{marginTop:16}}/>
        <div className={classes.personDetailsTextContainer}>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>Fullname</div>
                <div className={classes.personHeaderText}>Kishor Ghising</div>
            </div>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>Country</div>
                <div className={classes.personHeaderText}>Nepal</div>
            </div>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>Email</div>
                <div className={classes.personHeaderText}>example@gmail.com</div>
            </div>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>State</div>
                <div className={classes.personHeaderText}>Bagmati</div>
            </div>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>Phone number</div>
                <div className={classes.personHeaderText}>9802356489</div>
            </div>
            <div className={classes.personDetails}>
                <div className={classes.personSubHeaderText}>District</div>
                <div className={classes.personHeaderText}>Bhaktapur</div>
            </div>
        </div> 
        <div className={classes.buttonContainer}>
        <SecondaryButton title="Delete" style={{color:"#E53C3C",border:"1px solid #E53C3C",marginRight:24}}/>
        <SecondaryButton title="Edit" style={{color:colors.black,border:`1px solid ${colors.black}`}}/>
        </div>

</>
    )
}

export default AccountBook
