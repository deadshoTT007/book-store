import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import { colors } from '@/utils/index'
import HomeLayout from '@/components/layouts/HomeLayout'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@/components/elements/Divider';
import Product from '@/components/modules/Product';
import SearchProduct from '@/components/modules/SearchProduct';
const useStyles=makeStyles(theme=>({
    smallSearchBarCOntainer:{
        display:"flex",
        justifyContent:"center",
        width:"100%",
        marginTop:"160px",
        position:"relative",
        [theme.breakpoints.up('md')]:{
            display:"none"
        }
    },
    smallSearch:{
        [theme.breakpoints.up('lg')]:{
            width:"300px"
    },
    width:"100%",
    outline:"none",
    border:"none",
    padding:"8px 24px",
    border:`1px solid ${colors.gray}`,
    borderRadius:"40px",
    fontSize:"16px",
    lineHeight:"22px",
    color:colors.gray,
    '&:focus':{
        outline:"none"
    }
    },
    smallSearchBar:{
        width:"90%",
        margin:"0 auto"
    },
    smallSearchIcon:{
position:'absolute',
right:"60px",
top:"7px"
    },
    productContainer:{
        width:"60%",
        // margin:"0 auto",
        margin:"40px auto"
    },
    searchResultContainer:{
        width:"90%",
        margin:"0 auto",
        marginTop:40
    },
    searchText:{
        fontWeight:500,
        fontSize:16,
        lineHeight:"19px"
    },
    searchResultText:{
        fontWeight:400,
        fontSize:16,
        lineHeight:"22px"
    },
    searchStatusText:{
        marginTop:16,
        fontWeight:500,
        fontSize:16,
        lineHeight:"19px",
        color:colors.black,
        textAlign:'center'
    },
    recommendText:{
fontSize:16,
lineHeight:"22px",
fontWeight:400,
color:colors.black
    }
}))
const imageBg="images/glass-image.png"


const glassesData = [
    {
        src:imageBg,
        title: "Gucci",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Rayban",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Oxydo",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "okola",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Gucci",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Gucci",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
    {
        src:imageBg,
        title: "Durand",
        colors: ["red", "black", "gray", "brown", "maron", "yellow"],
        price: "2500"

    },
]


const Search = () => {
    const classes=useStyles()
    const [searchValue,setSearchValue]=useState("")
    const [searchResult,setSearchResult]=useState([])
    const searchHandler=(e)=>{
        setSearchValue(e.target.value)
        if(searchValue.length>0){
      const newSearchResult=glassesData.filter((data,index)=>{
                return Object.values(data).join(" ").toLowerCase().includes(searchValue.toLowerCase())
            })
            setSearchResult(newSearchResult)
            console.log(searchResult,searchValue,"result")
        }
       
    }
   
    return (
        <HomeLayout>
            <div className={classes.mainContainer}>
                            <div className={classes.smallSearchBarCOntainer}>
                         <div className={classes.smallSearchBar}>
                             <input onChange={(e)=>searchHandler(e)} value={searchValue} placeholder="Search" type="text" className={classes.smallSearch}/>
                             {searchValue.length>0?<CloseOutlinedIcon onClick={()=>setSearchValue("")} className={classes.smallSearchIcon}/>:
                         <SearchIcon  className={classes.smallSearchIcon} />
                             }
                         </div>

                     </div>
                     {(searchResult.length>0 &&  searchValue.length>0) &&
                     <div className={classes.searchResultContainer}>
                     <div className={classes.searchResultText}>Search results: <span className={classes.searchText}>{searchValue}</span></div>
                     <Divider style={{background:"#C6C6C6"}} style={{marginTop:8}}/>
                     <div className={classes.productContainer}>
                         {searchResult  && searchResult.map((data,index)=>{
                            return <SearchProduct  key={index} title={data.title} image={data.src} colors={data.colors} price={data.price} />
                         })}
                     </div>
                 </div>
                 }
                 {(searchValue.length>0 && searchResult.length==0) &&
                 <div className={classes.searchStatusContainer}>
                 <div className={classes.searchStatusText}>No Search results</div>
                 <div className={classes.searchResultContainer}>
                 <div className={classes.recommendText}>Recommended glasses</div>
                 <Divider style={{background:"#C6C6C6"}} style={{marginTop:8}}/>
                 <div className={classes.productContainer}>
                    {glassesData.map((data,index)=>{
                    return <SearchProduct  key={index} title={data.title} image={data.src} colors={data.colors} price={data.price} />

                    })}
                 </div>
                 </div>
                 </div>
                 }
                    
                     
                     </div>

        </HomeLayout>
    )
}

export default Search
