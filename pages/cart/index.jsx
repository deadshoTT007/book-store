
import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import TopBar from '@/components/modules/TopBar'
import Footer from '@/components/modules/Footer'
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@/components/elements/Divider'
import PrimaryButton from '@/components/elements/PrimaryButton'
import { Link } from '@mui/material'
const useStyles=makeStyles(theme=>({
mainContainer:{
    margin:"28px 0",
    width:"80%",
    padding:"0 40px",
    [theme.breakpoints.down('md')]:{
        width:"90%",
        margin:"24px auto",
        padding:"0px"
    }
},
cartText:{
    color:colors.primary
},
productDetailsContainer:{
    marginTop:28,
    display:"grid",
    gridTemplateColumns:"60% 40%",
    gridGap:"64px",
    [theme.breakpoints.down('md')]:{
        gridTemplateColumns:"1fr"
    }
},
productDetails:{
    marginBottom:"24px",
    position:"relative",
    padding:"40px 24px 40px 40px",
    border:"1px solid #8D8D8D",
    display:"flex",
    borderRadius:"4px",
    [theme.breakpoints.down('md')]:{
        display:"block",
    }
    // justifyContent:""
},
productImage:{
    objectFit:"contain",
    flex:1,
    marginRight:40
},
productDescriptionContainer:{
    flex:1,

},
descriptionHeaderText:{
    fontSize:"24px",
    fontWeight:500,
    lineHeight:"28px",
    color:colors.black,
    marginBottom:"4px",
    [theme.breakpoints.down('md')]:{
     marginTop:24   
    }
},
descriptionSubHeaderText:{
    fontSize:"16px",
    color:colors.gray,
    marginBottom:4
},
modelText:{
    fontSize:"12px",
    color:colors.gray
},
descriptionContainer:{
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    gridGap:"12px",
    marginTop:"16px"
},
descriptionMainText:{
    fontSize:"12px",
    fontWeight:700,
    lineHeight:"14px",
    color:colors.black
},
closeIcon:{
    position:'absolute',
    top:"40px",
    right:'24px'
},
descriptionSubText:{
    fontSize:"12px",
    lineHeight:"16px",
    color:colors.gray
},
checkOutContainer:{
    padding:"24px",
    background:colors.background,
    height:"fit-content"
},
itemContainer:{
    display:'flex',
    justifyContent:"space-between"
},
totalContainer:{
    display:"flex",
    justifyContent:"space-between"
},
subTotalText:{
    fontSize:"20px",
    lineHeight:"28px",
    color:colors.black
},
price:{
    fontSize:'16px',
    lineHeight:"19px",
    color:colors.black
},
shippingText:{
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.gray,
    marginTop:"10px"
},
itemText:{
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.black
},
count:{
fontSize:"16px",
lineHeight:"22px",
color:colors.black
},
includesText:{
fontSize:"16px",
lineHeight:"19px",
color:colors.black,
fontWeight:"500",
marginTop:"24px",
marginBottom:"8px"
},
infoText:{
    fontSize:'16px',
    lineHeight:"22px",
    color:colors.black
},
infoBox:{
    marginLeft:"20px"
},
link:{
    fontSize:"12px",
    lineHeight:"14px",
    color:colors.primary,
    marginTop:16,
    fontWeight:"500",
    display:"none",
    textDecoration:"none",
    [theme.breakpoints.down('md')]:{
        display:"block"
    }
}

}))

const Cart = () => {
    const classes=useStyles()
    const [showMore,setShowMore]=useState(false)
    const detailsClickHandler=()=>{
        setShowMore(!showMore)
    }
    return (
        <div className={classes.root}>
            <TopBar/>
            <div className={classes.mainContainer}>
                <div className={classes.cartText}>Your Cart</div>
                <div className={classes.productDetailsContainer}>
                    <div className={classes.mainDetailContainer}>
                        {[0,1,2].map(product=>{
                            return (
                                <div className={classes.productDetails}>
                                <CloseIcon className={classes.closeIcon}/>
        <img src="images/glass.png" className={classes.productImage}/>
        <div className={classes.productDescriptionContainer}>
            <div className={classes.descriptionHeaderText}>Chase</div>
            <div className={classes.descriptionSubHeaderText}>Product Description(short)</div>
            <div className={classes.modelText}>Model: H231ff</div>
            <Link className={classes.link} onClick={detailsClickHandler}  href="#">
                <a >More Details</a>
            </Link>
            {showMore ?
                 <div className={classes.descriptionContainer}>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
                 <div className={classes.detailsContainer}>
                 <div className={classes.descriptionMainText}>Size</div>
                 <div className={classes.descriptionSubText}>Medium</div>
                 </div>
         
                 </div>:'' }
       
            </div>
        </div>
                            )
                        })}
            

                    </div>
                    <div className={classes.checkOutContainer}>
                        <div className={classes.itemContainer}>
                            <div className={classes.itemText}>Items:</div>
                            <div className={classes.count}>4</div>
                        </div>
                            <Divider style={{margin:"10px 0"}}/>
                            <div className={classes.totalContainer}>
                                <div className={classes.subTotalText}>Subtotal:</div>
                                <div className={classes.price}>Rs.8000.00</div>
                            </div>
                            <div className={classes.shippingText}>Shipping and Tax in not included.</div>
                            <PrimaryButton title="Proceed to checkout" style={{marginTop:24}} parentStyle={{justifyContent:"center"}}/>
                            <div className={classes.includesText}>Includes:</div>
                            <ul className={classes.infoBox}>
                              <li className={classes.infoText}>Includes frame case and lens cloth</li>  
                              <li className={classes.infoText}>Free standard shipping and free returns</li>
                            </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Cart
