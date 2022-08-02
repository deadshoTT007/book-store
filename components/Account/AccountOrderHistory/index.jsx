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
    gridTemplateColumns:"repeat(6,1fr)"
},
orderHeaderText:{
    fontSize:16,
    fontWeight:500,
    color:colors.black
},
orderBodyContainer:{
    display:"grid",
    padding:12,
    gridTemplateColumns:"repeat(6,1fr)",
    background:"#fff",
    padding:"16px "
},
orderContainer:{
    display:'flex',
    alignItems:"center",
    fontWeight:600,
},
product:{
    // textAlign:"center"
    marginLeft:10
},
orderBodyWrapper:{
    minHeight:"400px"
},
productImage:{
width:"100px",
height:"100px"        
},
mainOrdersContainer:{
    boxShadow:"0px 0px 3px rgba(0,0,0,0.25)",
    // padding:20,
    margin:20
}

}))
const AccountOrderHistory = ({ordersList}) => {
    console.log(ordersList,"ordersList")
    const classes=useStyles()
    const [currentPage,setCurrentPage]=useState(1)
    const listsPerPage=5;
    const indexOFLastPost = currentPage * listsPerPage;
    const indexOfFirstPost = indexOFLastPost - listsPerPage;
    const newOrderList = ordersList.filter(order=>order.order_items.length>0)
    const currentList = newOrderList.slice(indexOfFirstPost, indexOFLastPost)
    const pageChangeNext=()=>{
        if(currentPage>=Math.ceil(ordersList.length/listsPerPage)){
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

const paymentHandler = () => {
    
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
                    <div className={classes.orderHeaderText}>Quantity</div>
                    <div className={classes.orderHeaderText}>Value</div>
                    <div className={classes.orderHeaderText}>Status</div>
                    <div className={classes.orderHeaderText}>SubTotal</div>
                </div>
                <Divider style={{marginTop:"16px"}}/>
                <div className={classes.orderBodyWrapper}>
                {/* {currentList.map((eachOrderData,index)=>{
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
                })} */}
                { currentList.map((orders,index)=>{
                    return (
                        <div className={classes.mainOrdersContainer}>
                         {orders.order_items.length>0 && orders.order_items.map((order,index)=>{
                             return(
                                 <>
                                      
                <div key={index} className={classes.orderBodyContainer}>
                <div className={classes.orderContainer}>
                <div className={classes.orderBodyText}>{order.order_id}</div>
                </div>
                <div className={classes.orderContainer}>
                <img src={order.order_product.image} className={classes.productImage} alt="" />                        
                    </div>
                    <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>{order.order_quantity}</div>                        
                </div>
                <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>Rs {order.order_product.price}</div>                        
                </div>
                <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>{"Pending"}</div>                        
                </div>
                <div className={classes.orderContainer}>
                <div className={classes.oderBodyText}>{order.order_quantity*order.order_product.price}</div>                        
                </div>

                </div>
                </>
                             )
                            }) 
                        }
                        {orders.order_items.length>0 && 
                        <PrimaryButton actionClock={paymentHandler} style={{margin:"20px",width:"200px"}} parentStyle={{background:"#fff"}} title="Pay"/>
                        }
                            </div>
                    )
                }) }
                </div>
                <Pagination listsPerPage={listsPerPage} totalLists={orderData.length} currentPage={currentPage} pageChangeNext={pageChangeNext} pageChangePrev={pageChangePrev}/>
               
            </div>
            
        </div>
    )
}

export default AccountOrderHistory
