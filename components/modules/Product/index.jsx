import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '../../../utils'
import { useRouter } from 'next/dist/client/router'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import book1 from '@/public/images/book1.jpg'
const useStyles = makeStyles(theme => ({
  productImage:{
      width:"100%",
      height:"600px",
      objectFit:"cover",
      transition:"all 300ms ease-in-out",
      cursor:"pointer",
      '&:hover':{
          opacity:"0.8"
        },
        [theme.breakpoints.down('lg')]:{
            height:"400px"
        },
        [theme.breakpoints.down('md')]:{
            height:"600px"
        }
    },
    container:{
        position:"relative",
        '&:hover':{
             '& $cart':{
                 display:"flex",
                 transition:"all 250ms ease-in-out",
                 top:"90%",
                 [theme.breakpoints.down('lg')]:{
                     top:'85%'
                 },
                 [theme.breakpoints.down('md')]:{
                    top:'91%'
                },

             }
        }

    },
    product:{
        // flex:1,
        // margin:"0 20px"
        
  },
  authorName:{
      color:"grey",
      marginTop:"16px",
      textAlign:"left"
  },
  title:{
      marginTop:"10px",
      fontWeight:700,
      fontSize:"24px",
      textAlign:"left"
  },
  price:{
      textAlign:"left",
      marginTop:'10px',
      color:"grey",
      fontSize:"18px",
      fontWeight:'700'
  },
  cart:{
      display:"none",
      transition:"none",
      padding:"20px",
      backgroundColor:colors.primary,
      position:"absolute",
      top:"100%",
      cursor:"pointer",
      zIndex:10,
    //   display:'flex',
      alignItems:"center",
      justifyContent:"center",
      gap:"10px",
      width:"100%",
      color:"#fff",
      fontWeight:"700",
      fontSize:"18px"
  },
  icon:{
      marginTop:"-3px",
      fontSize:"20px"
  }
}))

const Product = ({ title, image, colors, price }) => {
    const classes = useStyles()
    const router=useRouter()
    return (
        <div className={classes.product}>
            <div className={classes.container}>
            <img  onClick={()=>router.push('product-details')} src={book1.src} className={classes.productImage}/>
            <div className={classes.cart}>Add To Cart
            <ShoppingCartIcon className={classes.icon}/>
            </div>
            </div>
            <div className={classes.authorName}>ALICE JAMES</div>
            <div className={classes.title}>Girls at the Golden City</div>
            <div className={classes.price}>Rs.300</div>
        </div>
    )
}
export default Product
