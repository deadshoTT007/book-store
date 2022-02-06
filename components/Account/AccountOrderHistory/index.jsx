import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import PrimaryButton from '@/components/elements/PrimaryButton'
import Pagination from '@/components/Pagination'
import Divider from '@/components/elements/Divider'

const orderData=[
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
    {
        orderId:"24563248",
        imgSrc:'images/glass.png',
        date:"01-22-2022",
        value:"800",
        status:"delivered"
    },
]
const useStyles=makeStyles(theme=>({
orderTextContainer:{
    padding:"16px 40px",
    background:colors.background,
    borderRadius:4,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // height:"105px"
},
orderText:{
    fontSize:'16px',
    margin:"24px 0",
    fontWeight:500,
    lineHeight:"25px",
    color:colors.black
},
order:{
    marginTop:24,
    background:colors.background,
    borderRadius:4,
    padding:24
},
orderHeaderContainer:{
    padding:"0 12px",
    display:"grid",
    gridTemplateColumns:"repeat(5,1fr)"
},
orderHeaderText:{
    fontSize:16,
    fontWeight:500,
    color:colors.black
},
orderBodyContainer:{
    display:"grid",
    padding:12,
    gridTemplateColumns:"repeat(5,1fr)",
    background:"#fff",
    margin:"16px 0"
},
orderContainer:{
    display:'flex',
    alignItems:"center"
},
product:{
    // textAlign:"center"
    marginLeft:10
},
orderBodyWrapper:{
    minHeight:"400px"
}
}))
const AccountOrderHistory = () => {
    const classes=useStyles()
    const [currentPage,setCurrentPage]=useState(1)
    const listsPerPage=5;
    const indexOFLastPost = currentPage * listsPerPage;
    const indexOfFirstPost = indexOFLastPost - listsPerPage;
    const currentList = orderData.slice(indexOfFirstPost, indexOFLastPost)
    const pageChangeNext=()=>{
        if(currentPage>=Math.ceil(orderData.length/listsPerPage)){
            return;
        }
        console.log("pagina")
        setCurrentPage(currentPage+1)
        // currentPage ++;
    }
    const pageChangePrev=()=>{
        if(currentPage<=1){
            return;
        }
        setCurrentPage(currentPage-1)
    }
    return (
        <div className={classes.main}>
            <div className={classes.orderTextContainer}>
                <div className={classes.orderText}>Order History</div>
            </div>
            <div className={classes.order}>
                <div className={classes.orderHeaderContainer}>
                    <div className={classes.orderHeaderText}>Order Id</div>
                    <div className={`${classes.orderHeaderText} ${classes.product}`}>Product</div>
                    <div className={classes.orderHeaderText}>Date</div>
                    <div className={classes.orderHeaderText}>Value</div>
                    <div className={classes.orderHeaderText}>Status</div>
                </div>
                <Divider style={{marginTop:"16px"}}/>
                <div className={classes.orderBodyWrapper}>
                {currentList.map((eachOrderData,index)=>{
                    return(

                    
                <div key={index} className={classes.orderBodyContainer}>
                <div className={classes.orderContainer}>
                <div className={classes.orderBodyText}>{eachOrderData.orderId}</div>
                </div>
                <div className={classes.orderContainer}>
                <img src={eachOrderData.imgSrc} className={classes.productImage} alt="" />                        
                    </div>
                    <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>{eachOrderData.date}</div>                        
                </div>
                <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>Rs {eachOrderData.value}</div>                        
                </div>
                <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>{eachOrderData.status}</div>                        
                </div>

                </div>
                    )
                })}
                </div>
                <Pagination listsPerPage={listsPerPage} totalLists={orderData.length} currentPage={currentPage} pageChangeNext={pageChangeNext} pageChangePrev={pageChangePrev}/>
               
            </div>
            
        </div>
    )
}

export default AccountOrderHistory
