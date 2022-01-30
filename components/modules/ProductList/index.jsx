import React from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
const ProductList = (props) => {
    const useStyles=makeStyles(theme=>({
        productList:{
            width:"40%",
            maxWidth:"400px",
            border:`1px solid #8D8D8D`,
            padding:'24px',
            borderRadius:"4px",
            alignItems:"flex-start",
            [theme.breakpoints.down('md')]:{
                ...props.smallStyle
            }
            // minHeight:"260px"
           
        },
        productListContainer:{
        },
        productContainer:{
            display:"flex",
            justifyContent:"space-between",
        marginBottom:"40px",
        
        
        },
        detailContainer:{
            display:"flex"
        },
        productDetailsContainer:{
            marginLeft:"40px"
        
        },
        productHeaderText:{
            fontSize:"20px",
            fontWeight:"500",
            color:colors.black,
            marginBottom:"4px"
        },
        productDescriptionText:{
            fontSize:"12px",
            fontWeight:"500",
            color:colors.gray
        },
        productCount:{
            fontSize:"16px",
            lineHeight:"22px"
        }
        }))
        
    const classes=useStyles()
    return (
        <div className={classes.productList}>
            <div className={classes.productListContainer}>
                <div className={classes.productContainer}>
                    <div className={classes.detailContainer}>
                <img src="images/glass.png" className={classes.productImage}/>
                <div className={classes.productDetailsContainer}>
                <div className={classes.productHeaderText}>Chase</div>
                <div className={classes.productDescriptionText}>Model: H231ff</div>
                </div>
                </div>
                <div className={classes.productCount}>1</div>
            </div>
            </div>
            <div className={classes.productListContainer}>
                <div className={classes.productContainer}>
                    <div className={classes.detailContainer}>
                <img src="images/glass.png" className={classes.productImage}/>
                <div className={classes.productDetailsContainer}>
                <div className={classes.productHeaderText}>Chase</div>
                <div className={classes.productDescriptionText}>Model: H231ff</div>
                </div>
                </div>
                <div className={classes.productCount}>1</div>
            </div>
            </div>
            <div className={classes.productListContainer}>
                <div className={classes.productContainer}>
                    <div className={classes.detailContainer}>
                <img src="images/glass.png" className={classes.productImage}/>
                <div className={classes.productDetailsContainer}>
                <div className={classes.productHeaderText}>Chase</div>
                <div className={classes.productDescriptionText}>Model: H231ff</div>
                </div>
                </div>
                <div className={classes.productCount}>1</div>
            </div>
            </div>
           
           
            
        </div>
    )
}

export default ProductList
