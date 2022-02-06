import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import HomeLayout from '@/components/layouts/HomeLayout'
import SignIn from '@/components/modules/Account/SignIn'
import Form from '@/components/modules/Account/Form'
const useStyles=makeStyles(theme=>({
root:{
    marginTop:125,
    [theme.breakpoints.down('md')]:{
        marginTop:"160px"
},
[theme.breakpoints.down('md')]:{
    marginTop:"180px"
}

},
formTextContainer:{
    [theme.breakpoints.down('md')]:{
marginBottom:16
    }
},
main:{
    width:"70%",
    margin:"0 auto",
    display:"grid",
    gridGap:"40px",
    gridTemplateColumns:"40% 60%",
    [theme.breakpoints.down('md')]:{
        display:"block",
        width:"90%"
    }
},
formBigHeaderText:{
    fontWeight:700,
    fontSize:24,
    lineHeight:"31px",
    color:colors.black,
    marginBottom:8,
    [theme.breakpoints.down('md')]:{
        display:"none"
},
},
formSmallHeaderText:{
    fontWeight:700,
    fontSize:24,
    lineHeight:"31px",
    color:colors.black,
    marginBottom:8,
    display:"none",
    [theme.breakpoints.down('md')]:{
        display:"block"
}

},
formSubText:{
    fontSize:16,
    fontWeight:400,
    lineHeight:"22px",
    color:colors.black
}
}))
const Signin = () => {
    const classes=useStyles()
    return (

        <HomeLayout footer={true}>
            <div className={classes.root}>
                <div className={classes.main}>
                    <div className={classes.formTextContainer}>
                        <div className={classes.formBigHeaderText}>Welcome to <br></br> Chasma Ghar</div>
                        <div className={classes.formSmallHeaderText}>Welcome to Chasma Ghar</div>
                        <div className={classes.formSubText}>Best place to find personalize and high quality eyewears products.</div>
                    </div>
                    <Form/>
                </div>
            </div>
        </HomeLayout>
    )

}

export default Signin
