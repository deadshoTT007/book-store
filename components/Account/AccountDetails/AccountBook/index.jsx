import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import Divider from '@/components/elements/Divider'
import SecondaryButton from '@/components/elements/SecondaryButton'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PrimaryButton from '@/components/elements/PrimaryButton'
import NewAddressBook from './NewAddressBook'
const useStyles=makeStyles(theme=>({
    personDetailsTextContainer:{
        display:"grid",
        // gridTemplateColumns:"auto auto",
        gridTemplateColumns:"300px 300px",
        [theme.breakpoints.down('lg')]:{
            gridTemplateColumns:"repeat(2,1fr)"
        }
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
        },
        addressBookTextContainer:{
            padding:"16px 40px",
            background:colors.mainGray,
        },
        addressText:{
            textAlign:'center',
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"25px",
            color:colors.black,
            margin:"24px 0",
            // height:"40px",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            [theme.breakpoints.down('md')]:{
                // height:"auto",
                margin:"24px 0"
        }
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
        bigIcon:{
            cursor:"pointer"
        }
        
}))

const AccountBook = () => {
    const classes=useStyles()
    const [showMore,setShowMore]=useState(false)
    const [showAddressBook,setShowAddressBook]=useState(false)
    const closeAddressBookHandler=()=>{
        setShowAddressBook(false)
    }


    return (
        <>
         <div className={classes.addressBookContainer}>
                    <div className={classes.addressBookTextContainer}>
                        <div className={classes.addressText}>Address Book</div>
                    </div>
                    {showAddressBook?<NewAddressBook closeAddressBookHandler={closeAddressBookHandler}/>:
                      <div className={classes.mainPersonDetailsContainer}>
                      <div className={classes.mainListContainer}>
                          <div className={classes.personDetailsContainer}>
                              <div className={classes.personHeaderText}>Kishor Ghising</div>
                              {showMore ? <ExpandLessOutlinedIcon onClick={()=>setShowMore(false)} className={classes.bigIcon}/>:
                              <ExpandMoreOutlinedIcon onClick={()=>setShowMore(true)} className={classes.bigIcon}/>
                              
                              }
                          </div>
                      </div>
                      {showMore && 
                      <div>
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
                      </div>
                      }
              </div>
                    }
                  
                {!showAddressBook && <PrimaryButton actionClick={()=>setShowAddressBook(true)} title="Add new address book" parentStyle={{justifyContent:"center"}}/>}    
        </div>
       

</>
    )
}

export default AccountBook
